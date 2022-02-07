import React from 'react';
import { EXTERNAL_PATHS } from '@src/modules/navigation/models';
import { withTranslation, WithTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';
import classname from 'classnames';

import styles from '../Blogs.scss';

import xiaomi_banner from './xiaomi_banner.png';
import xiaomi_sound from './xiaomi_sound.png';
import xiaomi_dual_speakers from './xiaomi_dual_speakers.png';


function Xiaomi(props: WithTranslation) {
	return (
		<div className={styles.contentContainer}>
			<Helmet>
				<title>{props.t('title')}</title>
			</Helmet>
			<div className={styles.bannerContainer}>
				<img src={xiaomi_banner} />
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
				<div className={styles.textContainer}>
					<p className={classname(styles.subtitle, styles.indent)}>{props.t('xiaomi_users')}</p>
				</div>
				<div className={styles.doubleImageContainer}>
					<div className={styles.imageContainer}>
						<img src={xiaomi_sound} />
					</div>					
					<div className={styles.imageContainer}>
						<img src={xiaomi_dual_speakers} />
					</div>
				</div>
				<div className={styles.textContainer}>
					<p>{props.t('according_to')}</p>
				</div>
				<div className={styles.textContainer}>
					<p>{props.t('the_american_company')}</p>
				</div>
				<div className={styles.textContainer}>
					<p>{props.t('xiaomi_marks')}</p>
				</div>
				<div className={styles.subtitle}>
					<p>{props.t('watch_to_discover')}</p>
				</div>
				<div className={styles.videoContainer}>
					<div className={styles.video}>
						<iframe width="100%" height="100%" frameBorder="0" allowFullScreen
							src={`https://www.youtube.com/embed/qkD7taZ32pU?rel=0&modestbranding=1`}
						/>
					</div>
				</div>

				<div className={styles.textContainer}>
					<p>{props.t('lei_jun_claims')}</p>
				</div>
				<div className={styles.textContainer}>
					<p>
						{props.t('xiaomi_has_officially')}
						<a href={EXTERNAL_PATHS.XIAOMI_OVERVIEW} target='_blank'>{props.t('here')}</a>
					</p>
				</div>

				<div className={styles.subtitle}>
					<p>{props.t('about_xiaomi')}</p>
				</div>
				<div className={styles.textContainer}>
					<p>{props.t('xiaomi_corporation')}</p>
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

export default withTranslation('blogs_xiaomi')(Xiaomi);
