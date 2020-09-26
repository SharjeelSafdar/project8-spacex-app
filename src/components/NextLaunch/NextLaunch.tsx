import React from 'react';
import { Link } from 'react-router-dom';
// GraphQL Query Hook
import { useNextLaunchQuery } from '../../api/index';
import { Message } from '../../react-app-env.d';
// Components
import { Timer } from '../components';
// Styles
import styles from './NextLaunch.module.css';

export const NextLaunch: React.FC<{}> = () => {
    const { data, loading, error, networkStatus } = useNextLaunchQuery();

    return (
        <>
            {loading ? Message.LOADING : networkStatus === 8 ? Message.OFFLINE : error ? Message.ERROR :
                <>
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
                            </p>
                            <p className={styles.moreDetails}>
                                <Link to={`/launches-all/${data?.launches && data.launches[0]?.flight_number
                                    }`}>
                                    More details
                                </Link>
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
