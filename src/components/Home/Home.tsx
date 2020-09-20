import React from 'react';
import { NextLaunch } from '../NextLaunch/NextLaunch';
import { RecentLaunches } from '../RecentLaunches/RecentLaunches';
// Styles
import styles from './Home.module.css';

export const Home: React.FC<{}> = () => {
	return (
		<>
			<div className={styles.heroImage} data-testid="heroImage">
				<div className={styles.shade}>
					<NextLaunch />
				</div>
			</div>
			<RecentLaunches />
		</>
	);
}
