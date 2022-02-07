import React from 'react';

import styles from './BlogsHeader.scss'

import harman_embedded_logo from './harman_embedded_logo.png';

export default function Header() {
	return (
    <div className={styles.headerContainer}>
			<header>
				<a href={''}>
					<img src={harman_embedded_logo} />
				</a>				
			</header>
			
    </div>
	)
}