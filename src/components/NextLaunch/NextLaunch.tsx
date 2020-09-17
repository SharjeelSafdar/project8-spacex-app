import React from 'react';
import { useNextLaunchQuery } from '../../api/index';
import { Timer } from '../Timer/Timer';
// Styles
import styles from './NextLaunch.module.css';

export const NextLaunch = () => {
	const { data, loading, error } = useNextLaunchQuery();

    return (
        <>
            {loading
                ? 'Loading...'
                : error
                    ? `Error: ${error.message}`
                    : <>
                        <div className={styles.missionDetails}>
                            <img
                                src={(data?.launches && data.launches[0]?.links?.mission_patch_small)
                                    ? data?.launches[0].links.mission_patch_small
                                    : ''}
                                alt="Mission Patch"
                                data-testid="missionPatch"
                            />
                            <div>
                                <p data-testid="missionName">
                                    {`Next Launch: ${data?.launches && data.launches[0] &&
                                        data.launches[0].mission_name}`}
                                </p>
                                <p data-testid="missionSite">
                                    {`From: ${data?.launches && data.launches[0] &&
                                        data.launches[0].launch_site?.site_name_long} `}
                                    <p>More details</p>
                                </p>
                            </div>
                        </div>
                        <p className={styles.remaining}>Time Remaining</p>
                        <Timer secondsLeft={(data?.launches && data.launches[0] && data.launches[0].launch_date_unix)
                            ? (new Date(data?.launches[0]?.launch_date_unix * 1000).getTime() -
                                new Date().getTime()) / 1000
                            : 0
                        }
                        />
                    </>
            }
        </>
    )
}
