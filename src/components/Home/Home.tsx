import React from 'react';
import { NextLaunch, RecentLaunches } from '../components';
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
