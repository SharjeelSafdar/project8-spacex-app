import React from 'react';
import { Link } from 'react-router-dom';
// GraphQL Query Hook
import { useRocketsDataShortQuery } from '../../api/index';
import { Message } from '../../react-app-env.d';
// Icons
import { FcWikipedia } from 'react-icons/fc';
// Styles
import styles from './Rockets.module.css';

export const Rockets: React.FC<{}> = () => {
    const { data, loading, error, networkStatus } = useRocketsDataShortQuery();
    return (
        <div className={styles.container} data-testid="rockets-page">
            <h3 className={styles.heading}>Rockets</h3>
            <div className={styles.rockets} style={{ paddingBottom: (loading || !!error) ? '20px' : 0 }}>
                {loading ? Message.LOADING : networkStatus === 8 ? Message.OFFLINE : error ? Message.ERROR :
                    data && data.rockets && data.rockets.map((rocket, index) => (
                        <div className={styles.rocket} data-testid={rocket?.rocket_id} key={rocket?.rocket_id}>
                            <h4 className={styles.title}>{rocket?.rocket_name}</h4>
                            <p data-testid={`status${index}`}>{`Active: ${(rocket?.active) ? 'Yes' : 'No'}`}</p>
                            <p>{`First Flight Date: ${rocket?.first_flight}`}</p>
                            <p>{`Description: ${rocket?.description}`}</p>
                            <div className={styles.links}>
                                <Link to={`./${rocket?.rocket_id}`}>
                                    <p data-testid="more-rocket-details" className={styles.more}>
                                        More Details
                                    </p>
                                </Link>
                                {(rocket?.wikipedia && rocket.wikipedia !== null)
                                    ? <p className={styles.wikiLink}>
                                        <a
                                            href={(rocket?.wikipedia && rocket?.wikipedia !== null) ? rocket.wikipedia : undefined}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            title="Wikipedia Link"
                                            data-testid={`wiki${index}`}
                                        >
                                            <FcWikipedia />
                                        </a>
                                    </p>
                                    : ''
                                }
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
