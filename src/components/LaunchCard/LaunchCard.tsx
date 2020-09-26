import React from 'react';
import { Link } from 'react-router-dom';
// GraphQL Query Hook
import { useSingleLaunchQuery } from '../../api/index';
import { Message } from '../../react-app-env.d';
// Icons
import { FaYoutube } from 'react-icons/fa';
import { RiArticleLine } from 'react-icons/ri';
// Styles
import styles from './LaunchCard.module.css';

interface Props {
    flightNumber: number;
}

export const LaunchCard: React.FC<Props> = ({ flightNumber }) => {
    const { data, loading, error, networkStatus } = useSingleLaunchQuery({
        variables: { flightNumber: flightNumber.toString() },
    });

    return (
        <div className={styles.container}>
            {loading ? Message.LOADING : networkStatus === 8 ? Message.OFFLINE : error ? Message.ERROR :
                <>
                    <div className={styles.missionPatch}>
                        {!!data?.launch?.links?.mission_patch_small
                            ? <Link to={`/launches-all/${data?.launch?.flight_number}`}>
                                <img
                                    src={(data?.launch?.links?.mission_patch_small !== null)
                                        ? data?.launch?.links?.mission_patch_small
                                        : undefined
                                    }
                                    alt="Mission Patch"
                                    title="Mission Patch"
                                    data-testid="mission-patch"
                                />
                            </Link>
                            : ''
                        }
                    </div>
                    <div className={styles.launchData}>
                        <div className={styles.numAndStatus}>
                            <p data-testid="flight-number">{`Flight #${data?.launch?.flight_number}`}</p>
                            <p data-testid="flight-status">Status: {
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
                        <p data-testid="mission-name">{`Mission Name: ${data?.launch?.mission_name}`}</p>
                        <p data-testid="launch-site">{`Launch Site: ${data?.launch?.launch_site?.site_name}`}</p>
                        <p data-testid="launch-date">{`Launch Date: ${!!data?.launch?.launch_date_unix
                            ? new Date(data.launch.launch_date_unix * 1000).toUTCString()
                            : 'Not Available'
                            }`}
                        </p>
                        <div className={styles.links}>
                            <span className={styles.detailsLink}>
                                <Link 
                                    to={`/launches-all/${data?.launch?.flight_number}`} 
                                    data-testid="more-details"
                                >
                                    More Details...
                                </Link>
                            </span>
                            {!!data?.launch?.links?.video_link
                                ? <span>
                                    <a
                                        href={data.launch.links.video_link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        title="Video Link"
                                        data-testid="video-link"
                                        className={styles.videoLink}
                                    >
                                        <FaYoutube />
                                    </a>
                                </span>
                                : ""
                            }
                            {!!data?.launch?.links?.article_link
                                ? <span>
                                    <a
                                        href={data.launch.links.article_link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        title="Article Link"
                                        data-testid="article-link"
                                        className={styles.articleLink}
                                    >
                                        <RiArticleLine />
                                    </a>
                                </span>
                                : ""
                            }
                        </div>
                    </div>
                </>
            }
        </div>
    )
}
