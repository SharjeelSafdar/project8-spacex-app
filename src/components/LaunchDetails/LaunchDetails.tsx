import React from 'react';
import { useLaunchDetailsQuery } from '../../api/index';
import { FaYoutube } from 'react-icons/fa';
import { FcWikipedia } from 'react-icons/fc';
import { RiArticleLine } from 'react-icons/ri';
// Styles
import styles from './LaunchDetails.module.css';

const flightNumber = 101;

export const LaunchDetails = () => {
    const { data, loading, error } = useLaunchDetailsQuery({
        variables: { flightNumber: flightNumber.toString() }
    });
    return (
        <div className={styles.container}>
            {loading ? 'Loading data...' : error ? 'Error fetching launch data...' :
                <>
                    <div className={styles.patchAndTitle}>
                        {data && data.launch && data.launch.links && data?.launch?.links?.mission_patch_small &&
                            <img
                                src={data.launch.links.mission_patch_small}
                                alt="Mission Patch"
                                title={`${data.launch.mission_name} Mission Patch`}
                                data-testid="mission-patch"
                            />
                        }
                        <div className={styles.title}>
                            <h2 className={styles.heading}>{data?.launch?.mission_name}</h2>
                            <div>
                                <p>{`Flight #${data?.launch?.flight_number}`}</p>
                                <p>Status: {
                                    data?.launch?.launch_success !== undefined
                                        ? data?.launch?.launch_success === null
                                            ? 'Upcoming'
                                            : data.launch.launch_success === true
                                                ? <span className={styles.success}>Success</span>
                                                : <span className={styles.failure}>Failed</span>
                                        : 'Not Available'
                                }
                                </p>
                            </div>
                        </div>
                    </div>
                    <table><tbody>
                        <tr>
                            <td className={styles.c1}>Static Fire Date</td>
                            <td className={styles.c2} data-testid="static-fire">
                                {data && data.launch && data.launch.static_fire_date_unix
                                    ? new Date(data.launch.static_fire_date_unix * 1000).toUTCString()
                                    : 'Not Available'}
                            </td>
                        </tr>
                        <tr>
                            <td className={styles.c1}>Launch Date</td>
                            <td className={styles.c2} data-testid="launch-date">
                                {data && data.launch && data?.launch?.launch_date_unix
                                    ? new Date(data.launch.launch_date_unix * 1000).toUTCString()
                                    : 'Not Available'}
                            </td>
                        </tr>
                        <tr>
                            <td className={styles.c1}>Rocket</td>
                            <td className={styles.c2} data-testid="rocket">
                                {data?.launch?.rocket?.rocket_name}
                            </td>
                        </tr>
                        <tr>
                            <td className={styles.c1}>Launch Site</td>
                            <td className={styles.c2}>{data?.launch?.launch_site?.site_name_long}</td>
                        </tr>
                        <tr>
                            <td className={styles.c1}>Details</td>
                            <td className={styles.c2}>{data?.launch?.details}</td>
                        </tr>
                        <tr>
                            <td>Links</td>
                            <td className={styles.links}>
                                {data && data.launch && data.launch.links && data.launch.links.video_link &&
                                    <span data-testid="video-link">
                                        <a
                                            className={styles.videoLink}
                                            href={data.launch.links.video_link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            title="Video Link"
                                        >
                                            <FaYoutube />
                                        </a>
                                    </span>
                                }
                                {data && data.launch && data.launch.links && data.launch.links.wikipedia &&
                                    <span data-testid="wiki-link">
                                        <a
                                            className={styles.wikiLink}
                                            href={data.launch.links.wikipedia}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            title="Wikipedia Article Link"
                                        >
                                            <FcWikipedia />
                                        </a>
                                    </span>
                                }
                                {data && data.launch && data.launch.links && data.launch.links.article_link &&
                                    <span data-testid="article-link">
                                        <a
                                            className={styles.articleLink}
                                            href={data.launch.links.article_link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            title="Article Link"
                                        >
                                            <RiArticleLine />
                                        </a>
                                    </span>
                                }
                            </td>
                        </tr>
                    </tbody></table>

                    <div className={styles.images}>
                        Launch Images: 
                        {data && data.launch && data.launch.links && data.launch.links.flickr_images ?
                            data.launch.links.flickr_images.map(image => (
                                <img
                                    className={styles.image}
                                    key={image?.toString()}
                                    src={image?.toString()}
                                    alt="Launch"
                                    title={`${data.launch?.mission_name} Launch Image`}
                                    data-testid="launch-image"
                                />
                            ))
                            : ' Not Available'
                        }
                    </div>
                </>
            }
        </div>
    )
}
