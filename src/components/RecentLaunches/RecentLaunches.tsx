import React from 'react';
// GraphQL Query Hook
import { useRecentLaunchesIdsQuery } from '../../api/index';
import { Message } from '../../react-app-env.d';
// Components
import { LaunchCard } from '../components';
// Styles
import styles from './RecentLaunches.module.css';

const numRecentFlights = 3;

export const RecentLaunches: React.FC<{}> = () => {
    const { data, loading, error, networkStatus } = useRecentLaunchesIdsQuery({
        variables: { count: numRecentFlights }
    });
    
    const ids = (data && data.launches)
        ? data.launches.map( launch => launch?.flight_number )
        : [];

    return (
        <div className={styles.container}>
            <h3 className={styles.heading}>Recent Launches</h3>
            <div className={styles.launches} style={{paddingBottom: (loading || !!error) ? '20px' : '0px'}}>
                {loading ? Message.LOADING : networkStatus === 8 ? Message.OFFLINE : error ? Message.ERROR :
                    ids.map( id => id && <LaunchCard flightNumber={id} key={id} /> )
                }
            </div>
        </div>
    )
}
