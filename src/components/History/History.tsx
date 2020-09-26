import React from 'react';
// GraphQL Query Hook
import { useHistoryQuery } from '../../api/index';
import { Message } from '../../react-app-env.d';
// Icons
import { RiArticleLine } from 'react-icons/ri';
import { FcWikipedia } from 'react-icons/fc';
// Styles
import styles from './History.module.css';

export const History: React.FC<{}> = () => {
    const { data, loading, error, networkStatus } = useHistoryQuery();
    return (
        <div className={styles.container} data-testid="history-page">
            <h3 className={styles.heading}>History</h3>
            <div className={styles.histories} style={{paddingBottom: (loading || !!error) ? '20px' : 0}}>
                {loading ? Message.LOADING : networkStatus === 8 ? Message.OFFLINE : error ? Message.ERROR :
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
