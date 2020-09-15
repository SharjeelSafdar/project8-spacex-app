import React from 'react';
import { useNextLaunchQuery } from '../../api/index';
import { Timer } from '../Timer/Timer';
import styles from './Home.module.css';

export const Home: React.FC<{}> = () => {
    const { data, loading, error } = useNextLaunchQuery();
    return (
        <div className={styles.heroImage} data-testid="heroImage">
            <div className={styles.shade}>
                {loading 
                    ? 'Loading...'
                    : error
                        ? 'Error in loading data...'
                        : <>
                            <div className={styles.missionDetails}>
                                <img 
                                    src={(data?.launchNext?.links?.mission_patch_small) 
                                        ? data?.launchNext?.links?.mission_patch_small 
                                        : ''} 
                                    alt="Mission Patch"
                                    data-testid="missionPatch"
                                />
                                <div>
                                    <p data-testid="missionName">
                                        {`Next Launch: ${data?.launchNext?.mission_name}`}
                                    </p>
                                    <p data-testid="missionSite">
                                        {`From: ${data?.launchNext?.launch_site?.site_name_long}`}
                                    </p>
                                </div>
                            </div>
                            <p className={styles.remaining}>Time Remaining</p>
                            <Timer secondsLeft={
                                (new Date(data?.launchNext?.launch_date_unix*1000).getTime() - 
                                new Date().getTime())/1000} 
                            />
                        </>
                }
            </div>
        </div>
    );
}
