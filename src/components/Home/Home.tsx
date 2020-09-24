import React from 'react';
// Components
import { NextLaunch, RecentLaunches } from '../components';
// Styles
import styles from './Home.module.css';

export const Home: React.FC<{}> = () => {
	return (
		<div data-testid="home-page">
			<div className={styles.heroImage} data-testid="heroImage">
				<div className={styles.shade}>
					<NextLaunch />
				</div>
			</div>
			<RecentLaunches />
		</div>
	);
}
