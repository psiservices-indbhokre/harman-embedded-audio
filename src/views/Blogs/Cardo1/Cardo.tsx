import React from 'react';
import { EXTERNAL_PATHS } from '@src/modules/navigation/models';
import { withTranslation, WithTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';
import classname from 'classnames';

import styles from '../Blogs.scss';

import cardo_banner from './cardo_banner.png';
import cardo_system from './cardo_system.png';
import cardo_device from './cardo_device.png';

function Cardo(props: WithTranslation) {
	return (
		<div className={styles.contentContainer}>
			<Helmet>
				<title>{props.t('title')}</title>
			</Helmet>
			<div className={styles.bannerContainer}>
				<img src={cardo_banner} />
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
					<p className={classname(styles.subtitle, styles.indent)}>{props.t('available_now')}</p>
				</div>
				<div className={styles.doubleImageContainer}>
					<div className={styles.imageContainer}>
						<img src={cardo_system} />
					</div>					
					<div className={styles.imageContainer}>
						<img src={cardo_device} />
					</div>
				</div>
				<div className={styles.textContainer}>
					<p>{props.t('cardo_systems')}</p>
				</div>
				<div className={styles.textContainer}>
					<p>{props.t('audio_quality')}</p>
				</div>
				<div className={styles.textContainer}>
					<p>{props.t('the_audio_set')}</p>
				</div>
				<div className={styles.subtitle}>
					<p >{props.t('watch_to_learn_cardo_jbl')}</p>
				</div>
				<div className={styles.videoContainer}>
					<div className={styles.video}>
						<iframe width="100%" height="100%" frameBorder="0" allowFullScreen
							src={`https://www.youtube.com/embed/cny6oCVF7Ig?rel=0&modestbranding=1`}
						/>
					</div>
				</div>
				<div className={styles.textContainer}>
					<p>{props.t('however_packtalk')}</p>
				</div>
				<div className={styles.textContainer}>
					<p>{props.t('jbl_sound_processing')}</p>
				</div>
				<div className={styles.textContainer}>
					<p>{props.t('additionally_packtalk')}</p>
				</div>
				<div className={styles.textContainer}>
					<p>{props.t('three_sound')}</p>
					<ul>
						<li>{props.t('standard_sound')}</li>
						<li>{props.t('bass_sound')}</li>
						<li>{props.t('vocal_sound')}</li>
					</ul>
				</div>
				<div className={styles.textContainer}>
					<p>{props.t('jbl_equalizer')}</p>
				</div>
				<div className={styles.subtitle}>
					<p>{props.t('watch_to_learn_sound_perfect')}</p>
				</div>
				<div className={styles.videoContainer}>
					<div className={styles.video}>
						<iframe width="100%" height="100%" frameBorder="0" allowFullScreen
							src={`https://www.youtube.com/embed/kj1_iUNYXSQ?rel=0&modestbranding=1`}
						/>
					</div>
				</div>
				<div className={styles.textContainer}>
					<p>{props.t('although_the_audio')}</p>
				</div>
				<div className={styles.textContainer}>
					<p>{props.t('cardo_jbl_partnership')}</p>
				</div>
				<div className={styles.textContainer}>
					<p>
						{props.t('the_audio_set_availanle')}
						<a href={EXTERNAL_PATHS.CARDO_WEBSITE}>{props.t('cardo_website')}</a>
						{props.t('and_join')}
						<a href={EXTERNAL_PATHS.CARDO_FACEBOOK}>{props.t('facebook')}</a>
						<a href={EXTERNAL_PATHS.CARDO_TWITTER}>{props.t('twitter')}</a>
						{props.t('and')}
						<a href={EXTERNAL_PATHS.CARDO_INSTAGRAM}>{props.t('instagram')}</a>
					</p>
				</div>
				<div className={styles.subtitle}>
					<p>{props.t('about_cardo')}</p>
				</div>
				<div className={styles.textContainer}>
					<p>{props.t('cardo_specializes')}</p>
				</div>
				<div className={styles.subtitle}>
					<p>{props.t('about_jbl')}</p>
				</div>
				<div className={styles.textContainer}>
					<p>{props.t('jbl_creates')}</p>
				</div>
				<div className={styles.subtitle}>
					<p>{props.t('press_enquiries')}</p>
				</div>
				<div className={styles.textContainer}>
					<p>{props.t('more_information')}</p>
					<p>
						{props.t('cardo_mail')}
						<a href={EXTERNAL_PATHS.CARDO_WEBSITE}>{props.t('cardo_website')}</a>
					</p>
					<p><i>{props.t('disclaimer')}</i></p>
				</div>				
			</div>				
		</div>
	)
}

export default withTranslation('blogs_cardo')(Cardo);
