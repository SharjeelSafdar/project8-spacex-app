import React from 'react';
import { useHistoryQuery } from '../../api/index';
import { RiArticleLine } from 'react-icons/ri';
import { FcWikipedia } from 'react-icons/fc';
// Stles
import styles from './History.module.css';

export const History = () => {
    const { data, loading, error } = useHistoryQuery();
    return (
        <div className={styles.container}>
            <h3 className={styles.heading}>History</h3>
            <div className={styles.histories} style={{paddingBottom: (loading || !!error) ? '20px' : 0}}>
                {loading ? 'Loading data...' : error ? 'Error fetching data...' :
                    data && data.history && data?.history.map( (historyItem, index) => (
                        <div className={styles.historyItem} data-testid={`historyItem${index+1}`} key={index+1}>
                            <h4 className={styles.title}>
                                {`${historyItem && historyItem.id}: ${historyItem?.title}`}
                            </h4>
                            <p>{`Date: ${historyItem?.event_date_unix && 
                                new Date(historyItem.event_date_unix * 1000).toUTCString()}`
                            }</p>
                            {historyItem?.flight_number && <p>{`Flight Number: ${historyItem.flight_number}`}</p>}
                            <p>{`Details: ${historyItem?.details}`}</p>
                            {(!!historyItem?.links?.article || !!historyItem?.links?.wikipedia) && 
                                <p className={styles.links}>
                                    {!!historyItem?.links?.article &&
                                        <span>
                                            <a
                                                href={historyItem?.links?.article}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                title="Article Link"
                                                data-testid={`article${index}`}
                                                className={styles.articleLink}
                                            >
                                                <RiArticleLine />
                                            </a>
                                        </span>
                                    }
                                    {!!historyItem?.links?.wikipedia &&
                                        <span>
                                            <a
                                                href={historyItem?.links?.wikipedia}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                title="Wikipedia Link"
                                                data-testid={`wiki${index}`}
                                                className={styles.wikiLink}
                                            >
                                                <FcWikipedia />
                                            </a>
                                        </span>
                                    }
                                </p>
                            }
                        </div>
                    ))
                }
            </div>
        </div>
    )
}