import React from 'react';
import { useRocketsDataShortQuery } from '../../api/index';
import { FcWikipedia } from 'react-icons/fc';
// Styles
import styles from './Rockets.module.css';

export const Rockets = () => {
    const { data, loading, error } = useRocketsDataShortQuery();
    return (
        <div className={styles.container}>
            <h3 className={styles.heading}>Rockets</h3>
            <div className={styles.rockets} style={{paddingBottom: (loading || !!error) ? '20px' : 0}}>
                {loading ? 'Loading Data...' : error ? 'Error loading data' :
                    data && data.rockets && data.rockets.map( (rocket, index) => (
                        <div className={styles.rocket} data-testid={rocket?.rocket_id} key={rocket?.rocket_id}>
                            <h4 className={styles.title}>{rocket?.rocket_name}</h4>
                            <p data-testid={`status${index}`}>{`Active: ${(rocket?.active) ? 'Yes' : 'No'}`}</p>
                            <p>{`First Flight Date: ${rocket?.first_flight}`}</p>
                            <p>{`Description: ${rocket?.description}`}</p>
                            {(rocket?.wikipedia && rocket.wikipedia !== null)
                                ? <p className={styles.links}>
                                    <a
                                        href={(rocket?.wikipedia && rocket?.wikipedia !== null) ? rocket.wikipedia : undefined}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        title="Wikipedia Link"
                                        data-testid={`wiki${index}`}
                                        className={styles.wikiLink}
                                    >
                                        <FcWikipedia />
                                    </a>
                                </p>
                                : ''
                            }
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
