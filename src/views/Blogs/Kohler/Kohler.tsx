import React from 'react';
import { EXTERNAL_PATHS } from '@src/modules/navigation/models';
import { withTranslation, WithTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';

import styles from '../Blogs.scss';

import kohler_banner from './kohler_banner.png';
import kohler_flower from './kohler_flower.png';
import kohler_shower from './kohler_shower.png';


function Kohler(props: WithTranslation) {
	return (
		<div className={styles.contentContainer}>
			<Helmet>
				<title>{props.t('title')}</title>
			</Helmet>
			<div className={styles.bannerContainer}>
				<img src={kohler_banner} />
			</div>
			<div className={styles.articleContainer} >
				<div className={styles.releaseDateContainer}>
					<p>
						<span>{props.t('press_release_date_key')}</span>
						<span><strong>{props.t('press_release_date_value')}</strong></span>
					</p>
				</div>
				<div className={styles.title}>
					{props.t('blogs_title')}
				</div>
				<div className={styles.doubleImageContainer}>
					<div className={styles.imageContainer}>
						<img src={kohler_flower} />
					</div>					
					<div className={styles.imageContainer}>
						<img src={kohler_shower} />
					</div>
				</div>
				<div className={styles.textContainer}>
					<p>{props.t('just_in_time')}</p>
				</div>
				<div className={styles.textContainer}>
					<p>{props.t('following_its_celebrated')}</p>
				</div>
				<div className={styles.textContainer}>
					<p>{props.t('moxie_offers')}</p>
				</div>
				<div className={styles.subtitle}>
					<p>{props.t('watch_to_see')}</p>
				</div>
				<div className={styles.videoContainer}>
					<div className={styles.video}>
						<iframe width="100%" height="100%" frameBorder="0" allowFullScreen
							src={`https://www.youtube.com/embed/U7VQpZdWGr0?rel=0&modestbranding=1`}
						/>
					</div>
				</div>
				<div className={styles.textContainer}>
					<p>{props.t('the_showerhead')}</p>
				</div>
				<div className={styles.textContainer}>
					<p>{props.t('harmans_decades')}</p>
				</div>
				<div className={styles.textContainer}>
					<p>
						{props.t('the_kohler_moxie')}
						<a href={EXTERNAL_PATHS.KOHLER_CNET} target='_blank'>{props.t('here')}</a>
						{props.t('to_learn_more_visit')}
						<a href={EXTERNAL_PATHS.KOHLER_MOXIE} target='_blank'>{props.t('kohler_website')}</a>
					</p>
				</div>
				<div className={styles.subtitle}>
					<p>{props.t('about_kohler')}</p>
				</div>
				<div className={styles.textContainer}>
					<p>{props.t('founded')}</p>
				</div>
				<div className={styles.subtitle}>
					<p>{props.t('about_harman')}</p>
				</div>
				<div className={styles.textContainer}>
					<p>{props.t('harman_international')}</p>
				</div>
			</div>
				
		</div>
	)
}

export default withTranslation('blogs_kohler')(Kohler);
