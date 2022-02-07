import React from "react";
// import i18next from 'react-i18next';
// import i18next from 'i18next';
// core components
import styles from './Card.scss';
// import coreStyles from '@src/index.scss';
import classname from 'classnames';



export interface Card {
	image: string;
	title: string;
	description: string;
	className?: string;
}

function Card(props : Card) {
	const { image, title, description, className} = props;
	return (
		// <div className={styles.container}>
		// 	<div className={classname(coreStyles.container, styles.contentContainer)}>
		// 		<div className={styles.innerContainer}>		
					<div className={classname(styles.itemContainer, className)}>
						<div className={styles.imgBlock}>
							<img src={image} />
						</div>
						<div className={styles.textBlock}>
							<div className={styles.itemTitle}>
								{(title)}
							</div>
							<div>
								{(description)}
							</div>
						</div>
					</div>
		// 		</div>
		// 	</div>
		// </div>
	)
}

export default Card;