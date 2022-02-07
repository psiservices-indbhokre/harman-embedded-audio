import React from 'react';
import { withTranslation, WithTranslation } from 'react-i18next';
import classname from 'classnames';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

import styles from './ProductDesign.scss';
import coreStyles from '@src/index.scss';

import { ImageBanner } from '@src/views/common/ImageBanner/ImageBanner';
import News from '@src/views/common/News/News';
import { Banner } from '@src/views/common/Banner/Banner';
import { Hidden } from '@material-ui/core';


// import banner from './Product-Design_Header.jpg';
import banner from './product-design-hero-bg-img.png';
import img_1 from '@src/assets/app_img_common/background_1.png';
import img_2 from '@src/assets/app_img_common/background_2.png';
import img_3 from '@src/assets/app_img_common/background_3.jpg';
import bottom_banner from './bottom_banner.jpg';
import arrow from '../News/arrow.png';

import { EXTERNAL_PATHS, PATHS } from '@src/modules/navigation/models';
import Button from '@src/components/CustomButtons/Button.jsx';

function ProductDesign(props: WithTranslation) {
  return (
    <div className={styles.container}>
      <Helmet>
        <title>{props.t('title')}</title>
        <meta name="description" content={props.t('description')} />
      </Helmet>
      <ImageBanner title={props.t('section_image_banner_title')}
        contentContainerStyle={styles.imageBannerTitleContainer}
        image={banner}
        subtitleElement={(
          <div className={styles.learnMore}>
            <Link to={""} className={coreStyles.fontRegular}>
              <div> {props.t('learn_more')}</div>
              <img src={arrow} className={styles.arrow} />
            </Link>
          </div>
        )} />
      <div className={styles.descriptionContainer}>
        <div className={coreStyles.container}>
          <div className={styles.descriptionContent}>
            <h2 className={classname(coreStyles.fontLight, styles.descriptionTitle)}>{props.t('section_description_section_title')}</h2>
            <h3 className={classname(coreStyles.fontLight, styles.descriptionSubtitle)}>{props.t('section_description_section_subtitle')}</h3>
            <div className={styles.columns}>
              <div className={styles.columnContent}>
                <div className={styles.imageContainer}>
                  <img src={img_1} />
                  <h4 className={classname(styles.descriptionText, coreStyles.fontRegular)}>{props.t('card_title_1')}</h4>
                </div>
                <div className={styles.textContainer}>{props.t('section_description_image_1_text')}</div>
              </div>
              <div className={styles.columnContent}>
                <div className={styles.imageContainer}>
                  <img src={img_2} />
                  <h4 className={classname(styles.descriptionText, coreStyles.fontRegular)}>{props.t('card_title_2')}</h4>
                </div>
                <div className={styles.textContainer}>{props.t('section_description_image_2_text')}</div>
              </div>
              <div className={styles.columnContent}>
                <div className={styles.imageContainer}>
                  <img src={img_3} />
                  <h4 className={classname(styles.descriptionText, coreStyles.fontRegular)}>{props.t('card_title_3')}</h4>
                </div>
                <div className={styles.textContainer}>{props.t('section_description_image_3_text')}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Hidden smDown>
        <Banner title={props.t('section_banner_title')} subtitle={props.t('section_banner_subtitle')}
          image={bottom_banner} subtitleStyle={classname(coreStyles.fontLight, styles.bannerSubtitle)}
          titleStyle={classname(coreStyles.fontLight, styles.bannerTitle)}
          button={{ label: props.t('section_banner_button'), link: PATHS.CONTACT }} />
      </Hidden>
      <div className={coreStyles.container}>
        <div className={styles.video}>
          <h2 className={classname(coreStyles.fontLight, styles.videoTitle)}>{props.t('video_title')}</h2>
          <div className={styles.video1}>
            <div>
              <iframe height="100%" width="100%" src="https://www.youtube.com/embed/Iy0M559YBi8?start=3&rel=0&modestbranding=1&fs=0"
                frameBorder="0" />
            </div>
          </div>
          <div className={styles.video2}>
            <div>
              <iframe height="100%" width="100%" src="https://www.youtube.com/embed/D8JN_NpUmVk?rel=0&modestbranding=1&fs=0"
                frameBorder="0" />
            </div>
          </div>
          <div className={styles.videoButton}>
            <a href={EXTERNAL_PATHS.YOUTUBE} target='_blank'>
              <Button color={'Harman'} className={styles.button} underline={'none'}>
                <span className={coreStyles.buttonWhite}>{props.t('find_more_video')}</span>
              </Button>
            </a>
          </div>
        </div>
      </div>
      <News />
    </div>
  );
}

export default withTranslation('product_design')(ProductDesign);