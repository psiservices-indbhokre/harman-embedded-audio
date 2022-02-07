import React from 'react';
// import { EXTERNAL_PATHS } from '@src/modules/navigation/models';
import { withTranslation, WithTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';
import classname from 'classnames';

import styles from '../Blogs.scss';

import iconai_banner from './iconai_banner.png';
import iconai_vegetables from './iconai_vegetables.png';
import iconai_razor from './iconai_razor.png';
import iconai_zmirror from './iconai_zmirror.png';


function IconAI(props: WithTranslation) {
	return (
		<div className={styles.contentContainer}>
			<Helmet>
				<title>{props.t('title')}</title>
			</Helmet>
			<div className={styles.bannerContainer}>
				<img src={iconai_banner} />
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
					<p className={classname(styles.subtitle, styles.indent)}>{props.t('the_new_voice')}</p>
				</div>

				<div className={styles.doubleImageContainer}>
					<div className={styles.imageContainer}>
						<img src={iconai_vegetables} />
					</div>					
					<div className={styles.imageContainer}>
						<img src={iconai_razor} />
					</div>
				</div>
				<div className={styles.textContainer}>
					<p>{props.t('south_korean')}</p>
				</div>
				<div className={styles.textContainer}>
					<p>{props.t('the_samrt_mirror')}</p>
				</div>

				<div className={styles.singleImageContainer}>				
					<div className={styles.imageContainer}>
						<img src={iconai_zmirror} />
					</div>
				</div>

				<div className={styles.subtitle}>
					<p>{props.t('featured')}</p>
				</div>

				<div className={styles.textContainer}>
					<ul>
						<li>{props.t('revolutionary')}</li>
						<li>{props.t('alexa_builtin')}</li>
						<li>{props.t('touchscreen')}</li>
						<li>{props.t('led_ring')}</li>
						<li>{props.t('advanced_skin')}</li>
						<li>{props.t('multicolor')}</li>
						<li>{props.t('full_privacy')}</li>
						<li>{props.t('bluetooth_wifi')}</li>
					</ul>
				</div>
				<div className={styles.textContainer}>
					<p>{props.t('harman_kardon_is_known')}</p>
				</div>
				<div className={styles.textContainer}>
					<p>{props.t('we_are_very')}</p>
				</div>
				<div className={styles.textContainer}>
					<p>{props.t('with_harman_kardon')}</p>
				</div>
				<div className={styles.textContainer}>
					<p>{props.t('though_smart')}</p>
				</div>
				<div className={styles.subtitle}>
					<p>{props.t('about_iconai')}</p>
				</div>
				<div className={styles.textContainer}>
					<p>{props.t('iconai_software_led')}</p>
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

export default withTranslation('blogs_iconai')(IconAI);
