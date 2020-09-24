import React, { useState } from 'react';
// GraphQL Query Hooks and Types
import { useAllLaunchesIdsQuery, Order, LaunchRange } from '../../api/index';
// Components
import { LaunchCard } from '../components';
// Styles
import styles from './LaunchesAll.module.css';

const numLaunchesPerPage: 10 = 10;
type Varaibles = {
    range?: LaunchRange;
    order: Order;
}

export const LaunchesAll: React.FC<{}> = () => {
    const [ variables, setVariables ] = useState<Varaibles>({ order: Order.Asc });
    const [ numLaunches, setNumLaunches ] = useState<number>(numLaunchesPerPage);
    const [ showMoreBtn, setShowMoreBtn ] = useState<boolean>(true);
    const { data, loading, error } = useAllLaunchesIdsQuery({ variables });

    const ids = (data && data.launches)
        ? data.launches.map(launch => launch?.flight_number)
        : [];

    return (
        <div className={styles.container} data-testid="launches-all-page">
            <h3 className={styles.heading}>
                {!variables.range
                    ? 'All Launches'
                    : variables.range === LaunchRange.Past
                        ? 'Past Launches'
                        : 'Upcoming Launches'
                }
            </h3>
            <div className={styles.filters}>
                Filters:
                <button
                    data-testid="all"
                    disabled={loading}
                    style={{
                        background: !variables.range ? 'rgba(255, 255, 255, 0.2)' : 'transparent',
                        color: (loading || error) ? 'grey' : 'whitesmoke',
                        cursor: (loading || error) ? 'not-allowed' : 'pointer',
                    }}
                    onClick={() => {
                        // if current filter is either Past or Upcoming
                        if (!!variables.range) {
                            setNumLaunches(numLaunchesPerPage);
                            setVariables({ order: Order.Asc });
                        }
                    }}
                >
                    All
                </button>
                <button 
                    data-testid="past"
                    disabled={loading}
                    style={{
                        background: variables.range && variables.range === LaunchRange.Past 
                            ? 'rgba(255, 255, 255, 0.2)' 
                            : 'transparent',
                        color: (loading || error) ? 'grey' : 'whitesmoke',
                        cursor: (loading || error) ? "not-allowed" : 'pointer',
                    }}
                    onClick={() => {
                        // if current filter is either Past or Upcoming
                        if (!variables.range || (variables.range && variables.range !== LaunchRange.Past)) {
                            setNumLaunches(numLaunchesPerPage);
                            setVariables({ 
                                order: Order.Desc,
                                range: LaunchRange.Past,
                            });
                        }
                    }}
                >
                    Past
                </button>
                <button 
                    data-testid="upcoming"
                    disabled={loading}
                    style={{
                        background: variables.range && variables.range === LaunchRange.Upcoming 
                            ? 'rgba(255, 255, 255, 0.2)' 
                            : 'transparent',
                        color: (loading || error) ? 'grey' : 'whitesmoke',
                        cursor: (loading || error) ? "not-allowed" : 'pointer',
                    }}
                    onClick={() => {
                        if (!variables.range || (variables.range && variables.range !== LaunchRange.Upcoming)) {
                            setNumLaunches(numLaunchesPerPage);
                            setVariables(prev => ({
                                order: Order.Asc,
                                range: LaunchRange.Upcoming,
                            }));
                        }
                    }}
                >
                    Upcoming
                </button>
            </div>
            <div className={styles.filters}>
                Order:
                <button
                    data-testid="asc"
                    disabled={loading}
                    style={{
                        background: variables.order === Order.Asc 
                            ? 'rgba(255, 255, 255, 0.2)' 
                            : 'transparent',
                        color: (loading || error) ? 'grey' : 'whitesmoke',
                        cursor: (loading || error) ? "not-allowed" : 'pointer',
                    }}
                    onClick={() => {
                        setVariables(prev => ({
                            ...prev,
                            order: Order.Asc,
                        }));
                        setNumLaunches(numLaunchesPerPage);
                    }}
                >
                    Ascending
                </button>
                <button
                    data-testid="desc"
                    disabled={loading}
                    style={{
                        background: variables.order === Order.Desc 
                            ? 'rgba(255, 255, 255, 0.2)' 
                            : 'transparent',
                        color: (loading || error) ? 'grey' : 'whitesmoke',
                        cursor: (loading || error) ? "not-allowed" : 'pointer',
                    }}
                    onClick={() => {
                        setVariables(prev => ({
                            ...prev,
                            order: Order.Desc,
                        }));
                        setNumLaunches(numLaunchesPerPage);
                    }}
                >
                    Descending
                </button>
            </div>
            <div className={styles.launches}  style={{paddingBottom: (loading || !!error) ? '20px' : 0}}>
                {loading ? 'Loading launches...' : error ? 'Error fetching launches...' :
                    ids
                        .slice(0, Math.min(numLaunches, ids.length))
                        .map(id => id && <LaunchCard flightNumber={id} key={id} data-testid={id} />)
                }
            </div>
            <button
                data-testid="more"
                style={{ 
                    visibility: loading ? 'hidden' : 'visible',
                    color: (numLaunches >= ids.length) ? 'grey' : 'whitesmoke',
                    cursor: (numLaunches >= ids.length) ? "not-allowed" : 'pointer',
                    display: (showMoreBtn) ? 'block' : 'none',
                }}
                className={styles.more}
                disabled={numLaunches >= ids.length}
                onClick={() => {
                    setNumLaunches(prev => prev + numLaunchesPerPage)
                    setShowMoreBtn(false);
                    setTimeout(() => setShowMoreBtn(true), 250)
                }}
            >
                {(numLaunches >= ids.length) ? 'No more results' : 'More Results'}
            </button>
        </div>
    )
}
