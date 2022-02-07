import React from 'react';
import { withTranslation, WithTranslation } from 'react-i18next';
import { Hidden } from '@material-ui/core';
import { Helmet } from 'react-helmet';

import styles from './Home.scss';

import VideoBanner from '@src/views/common/VideoBanner/VideoBanner';
import { Introduction } from './Introduction/Introduction';
import { Solutions } from './Solutions/Solutions';
import Partnership from '@src/views/common/Partnership/Partnership';
import News from '@src/views/common/News/News';
import QuoteCarousel from '@src/views/common/QuoteCarousel/QuoteCarousel';

import * as clip1 from './Homepage 01.mp4';
import * as clip2 from './Homepage 02.mp4';
const clips = [clip1, clip2];

import * as background from './background.png';

function Home(props: WithTranslation) {
  return (
    <div className={styles.homeContainer}>
      <Helmet>
        <title>{props.t('title')}</title>
        <meta name="description" content={props.t('description')} />
      </Helmet>
      <Hidden smDown>
        <VideoBanner clips={clips} image={background} title={props.t('video_overlay_line_1')} subtitle={props.t('video_overlay_line_2')}
          youtubeId='0dHRFpHKmpA' />
      </Hidden>
      <Hidden mdUp>
        <VideoBanner clips={clips} image={background} title={props.t('video_overlay_mobile')} subtitle={''} youtubeId='0dHRFpHKmpA' backgroundStyle={styles.overlay} />
      </Hidden>
      <Introduction t={props.t} />
      <Solutions t={props.t} youtubeId='0dHRFpHKmpA' />
      <Partnership />
      <QuoteCarousel />
      <News />
    </div>
  );
}

export default withTranslation('home')(Home);