import React, { useState } from 'react';
import { withTranslation, WithTranslation } from 'react-i18next';
import classname from 'classnames';
import { Helmet } from 'react-helmet';

import VideoBanner from '@src/views/common/VideoBanner/VideoBanner';

import banner from './img_audioworx_banner.jpg';
import clip from './AudioWorx.mp4';
import play from './ico_play_media_opc.png';
import audioWave from './audio_wave.png';
import pillar_1 from './pillar_1.jpg';
import pillar_2 from './pillar_2.jpg';
import pillar_3 from './pillar_3.jpg';
import benefit_1 from './benefit_1.png';
import benefit_2 from './benefit_2.png';
import benefit_3 from './benefit_3.png';
import benefit_4 from './benefit_4.png';
import benefit_5 from './benefit_5.png';
import benefit_6 from './benefit_6.png';
import benefit_7 from './benefit_7.png';
import benefit_8 from './benefit_8.png';
import benefit_9 from './benefit_9.png';
import benefit_10 from './benefit_10.png';
import bottomBg from '@src/assets/app_img_common/software_bottom_banner.jpg';

import styles from './AudioWorx.scss';
import coreStyles from '@src/index.scss';
import { Hidden } from '@material-ui/core';
import { Banner } from '@src/views/common/Banner/Banner';
import Button from '@src/components/CustomButtons/Button.jsx';
import { Link } from 'react-router-dom';
import { PATHS } from '@src/modules/navigation/models';
import DownloadPopup from '@src/views/common/DownloadPopup/DownloadPopup';

function AudioWorx(props: WithTranslation) {
  const [opened, setOpened] = useState(false);

  function open() {
    setOpened(true);
  }

  function close() {
    setOpened(false);
  }

  return (
    <div className={styles.container}>
      <Helmet>
        <title>{props.t('title')}</title>
        <meta name="description" content={props.t('description')} />
      </Helmet>
      <DownloadPopup url='https://goembed.harman.com/l/273722/2019-05-18/3ymzv3d' opened={opened} onClose={close} />
      <VideoBanner title={props.t('video_banner_title')} subtitle={props.t('video_banner_subtitle')}
        clips={[clip]} image={banner} playImage={play} overlayStyle={styles.overlay} backgroundStyle={styles.background}
        youtubeId='gEqI5N2wne8' />
      <div className={coreStyles.container}>
        <div className={styles.descriptionContainer}>
          <div className={styles.images}>
            <img src={audioWave} />
          </div>
          <h2 className={classname(coreStyles.fontLight, styles.title)}>{props.t('description_title')}</h2>
          <div className={styles.description}>{props.t('description_subtitle')}</div>
        </div>
      </div>
      <div className={styles.infoContainer}>
        <div className={coreStyles.container}>
          <div className={styles.infoContentContainer}>
            <div className={styles.info}>
              <h4 className={classname(coreStyles.fontLight, styles.infoTitle)}>{props.t('info_title_1')}</h4>
              <div className={classname(coreStyles.fontLight, styles.infoDescription)}>{props.t('info_description_1')}</div>
            </div>
            <div className={styles.info}>
              <h4 className={classname(coreStyles.fontLight, styles.infoTitle)}>{props.t('info_title_2')}</h4>
              <div className={classname(coreStyles.fontLight, styles.infoDescription)}>{props.t('info_description_2')}</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.pillarsContainer}>
        <div className={coreStyles.container}>
          <div className={styles.pillarsContentContainer}>
            <h2 className={classname(coreStyles.fontLight, styles.pillarsTitle)}>{props.t('pillars_title')}</h2>
            <div className={styles.pillars}>
              <div className={styles.pillar}>
                <img src={pillar_1} />
                <div className={styles.pillarDescription}>
                  <h4 className={classname(coreStyles.fontMedium, styles.pillarTitle)}>{props.t('pillar_1_title')}</h4>
                  <div className={classname(coreStyles.fontRegular, styles.pillarText)}>{props.t('pillar_1_text')}</div>
                </div>
              </div>
              <div className={styles.pillar}>
                <img src={pillar_2} />
                <div className={styles.pillarDescription}>
                  <h4 className={classname(coreStyles.fontMedium, styles.pillarTitle)}>{props.t('pillar_2_title')}</h4>
                  <div className={classname(coreStyles.fontRegular, styles.pillarText)}>{props.t('pillar_2_text')}</div>
                </div>
              </div>
              <div className={styles.pillar}>
                <img src={pillar_3} />
                <div className={styles.pillarDescription}>
                  <h4 className={classname(coreStyles.fontMedium, styles.pillarTitle)}>{props.t('pillar_3_title')}</h4>
                  <div className={classname(coreStyles.fontRegular, styles.pillarText)}>{props.t('pillar_3_text')}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={coreStyles.container}>
        <div className={styles.benefitsContainer}>
          <h2 className={coreStyles.h2}>{props.t('benefits')}</h2>
          <div className={styles.benefits}>
            <div className={styles.benefit}>
              <img src={benefit_1} />
              <div className={classname(coreStyles.fontRegular, styles.benefitText)}>{props.t('benefit_1')}</div>
            </div>
            <div className={styles.benefit}>
              <img src={benefit_2} />
              <div className={classname(coreStyles.fontRegular, styles.benefitText)}>{props.t('benefit_2')}</div>
            </div>
            <div className={styles.benefit}>
              <img src={benefit_3} />
              <div className={classname(coreStyles.fontRegular, styles.benefitText)}>{props.t('benefit_3')}</div>
            </div>
            <div className={styles.benefit}>
              <img src={benefit_4} />
              <div className={classname(coreStyles.fontRegular, styles.benefitText)}>{props.t('benefit_4')}</div>
            </div>
            <div className={styles.benefit}>
              <img src={benefit_5} />
              <div className={classname(coreStyles.fontRegular, styles.benefitText)}>{props.t('benefit_5')}</div>
            </div>
            <div className={styles.benefit}>
              <img src={benefit_6} />
              <div className={classname(coreStyles.fontRegular, styles.benefitText)}>{props.t('benefit_6')}</div>
            </div>
            <div className={styles.benefit}>
              <img src={benefit_7} />
              <div className={classname(coreStyles.fontRegular, styles.benefitText)}>{props.t('benefit_7')}</div>
            </div>
            <div className={styles.benefit}>
              <img src={benefit_8} />
              <div className={classname(coreStyles.fontRegular, styles.benefitText)}>{props.t('benefit_8')}</div>
            </div>
            <Hidden smDown><div /></Hidden>
            <div className={styles.benefit}>
              <img src={benefit_9} />
              <div className={classname(coreStyles.fontRegular, styles.benefitText)}>{props.t('benefit_9')}</div>
            </div>
            <div className={styles.benefit}>
              <img src={benefit_10} />
              <div className={classname(coreStyles.fontRegular, styles.benefitText)}>{props.t('benefit_10')}</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.blueContainer}>
        <div className={coreStyles.container}>
          <div>
            <h2 className={classname(coreStyles.fontLight, styles.blueTitle)}>{props.t('to_market_title')}</h2>
            <div className={styles.audioworxToMarket}>
              <div className={classname(coreStyles.fontLight, styles.audioworxToMarketText)}>{props.t('to_market_text')}</div>
              <div className={styles.audioworxToMarketImage}>
                <div>
                  <iframe height="100%" width="100%" src="https://www.youtube.com/embed/gEqI5N2wne8?rel=0&modestbranding=1&fs=0"
                    frameBorder="0" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Banner title={props.t('get_started')} image={bottomBg}
        bottomContent={(
          <div className={styles.buttons}>
            <Button color={'HarmanTransparent'} underline={'none'} onClick={open}>
              <span className={coreStyles.buttonWhite}>{props.t('download')}</span>
            </Button>
            <Button color={'HarmanTransparent'} component={Link} to={PATHS.OVERVIEW} underline={'none'}>
              <span className={coreStyles.buttonWhite}>{props.t('learn_more')}</span>
            </Button>
          </div>
        )} />
    </div>
  );
}

export default withTranslation('audioworx')(AudioWorx);