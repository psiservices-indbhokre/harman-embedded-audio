import React, { useEffect, useRef } from 'react';
import { WithTranslation, withTranslation } from 'react-i18next';
import classname from 'classnames';
import { Helmet } from 'react-helmet';

// import VideoBanner, { VideoBannerProps } from '@src/views/common/VideoBanner/VideoBanner';
import { HeaderBanner } from "@src/views/common/HeaderBanner/HeaderBanner";
import TabbedSection, { TabbedSectionProps } from '@src/views/common/TabbedSection/TabbedSection';
import { Banner, BannerProps } from '@src/views/common/Banner/Banner';
// import { Hidden } from '@material-ui/core';

import coreStyles from '@src/index.scss';
import styles from './AudioEFX.scss';
import { PATHS } from '@src/modules/navigation/models';

import bannerBackground from './AudioEFX_Header.png';
import bannerLogo from './AudioEFX_logo.png';

// import play from './ico_play_media_opc.png';
// import clip from './AudioEFX.mp4';
// import img from './img.jpg';
import frame from './frame.png';
// import background from './background.png';
// import audioefx from './audioefx.png';
import tab_1_img from './tab_1_img.jpg';
import tab_2_img from './tab_2_img.jpg';
import tab_3_img from './tab_3_img.jpg';
import bottom_banner from '@src/assets/app_img_common/software_bottom_banner.jpg';
import play_audio from './play-button.png';

import clip1EfxOn from './FastCarAudioEFXOn.wav';
import clip1EfxOff from './FastCarAudioEFXOff.wav';
import clip2EfxOn from './SultansAudioEFXOn.wav';
import clip2EfxOff from './SultansAudioEFXOff.wav';

import { isIE } from '@src/browserDetector.jsx';

function AudioEFX(props: WithTranslation) {
  const audio = useRef<HTMLAudioElement | null>(null);
  const currentAudioFile = useRef<string>('');
  useEffect(() => {
    return () => {
      if (audio.current !== null) {
        audio.current.pause();
      }
    }
  })

  // const banner: VideoBannerProps = {
  //   clips: [clip],
  //   image: background,
  //   backgroundStyle: styles.background,
  //   title: props.t('banner_title'),
  //   subtitle: props.t('banner_subtitle'),
  //   playImage: play,
  //   overlayStyle: styles.overlay,
  //   youtubeId: 'dn1QCxvmL0I'
  // };
  const tabs: TabbedSectionProps = {
    title: props.t('section_tabs_title'),
    tabs: [
      {
        title: props.t('section_tabs_tab_1_title'),
        content: (
          <div className={classname(styles.contentContainer, styles.tab1)}>
            <div className={styles.left}>
              <div className={styles.tabDescription}>{props.t('section_tabs_tab_1_description')}</div>
              <ul className={styles.tabText}>
                <li dangerouslySetInnerHTML={{ __html: props.t('section_tabs_tab_1_bullet_1') }} />
                <li dangerouslySetInnerHTML={{ __html: props.t('section_tabs_tab_1_bullet_2') }} />
                <li dangerouslySetInnerHTML={{ __html: props.t('section_tabs_tab_1_bullet_3') }} />
                <li dangerouslySetInnerHTML={{ __html: props.t('section_tabs_tab_1_bullet_4') }} />
                <li dangerouslySetInnerHTML={{ __html: props.t('section_tabs_tab_1_bullet_5') }} />
                <li dangerouslySetInnerHTML={{ __html: props.t('section_tabs_tab_1_bullet_6') }} />
              </ul>
            </div>
            <div className={styles.right}>
              <img src={tab_1_img} className={classname({ [styles.imageIeFix]: isIE })} />
            </div>
          </div>
        )
      },
      {
        title: props.t('section_tabs_tab_2_title'),
        content: (
          <div className={classname(styles.contentContainer, styles.tab2)}>
            <div className={styles.left}>
              <div className={styles.tabDescription}>{props.t('section_tabs_tab_2_description')}</div>
              <ul className={styles.tabText}>
                <li dangerouslySetInnerHTML={{ __html: props.t('section_tabs_tab_2_bullet_1') }} />
              </ul>
            </div>
            <div className={styles.right}>
              <img src={tab_2_img} className={classname({ [styles.imageIeFix]: isIE })} />
            </div>
          </div>
        )
      },
      {
        title: props.t('section_tabs_tab_3_title'),
        content: (
          <div className={classname(styles.contentContainer, styles.tab3)}>
            <div className={styles.left}>
              <div className={styles.tabDescription}>{props.t('section_tabs_tab_3_description')}</div>
              <ul className={styles.tabText}>
                <li>{props.t('section_tabs_tab_3_bullet_1')}</li>
                <li>{props.t('section_tabs_tab_3_bullet_2')}</li>
                <li>{props.t('section_tabs_tab_3_bullet_3')}</li>
                <li>{props.t('section_tabs_tab_3_bullet_4')}</li>
                <li>{props.t('section_tabs_tab_3_bullet_5')}</li>
              </ul>
            </div>
            <div className={styles.right}>
              <img src={tab_3_img} className={classname({ [styles.imageIeFix]: isIE })} />
            </div>
          </div>
        )
      }
    ],
    headerContainerStyle: styles.tabsHeader,
    tabContainerStyle: styles.tab,
    activeTabStyle: styles.activeTab
  };
  const bottomBanner: BannerProps = {
    title: props.t('section_bottom_banner_title'),
    subtitle: props.t('section_bottom_banner_subtitle'),
    button: {
      label: props.t('section_bottom_banner_button_label'),
      link: PATHS.OVERVIEW
    },
    image: bottom_banner
  };

  function playAudio(file: string) {
    if (audio.current === null) {
      audio.current = new Audio(file);
      currentAudioFile.current = file;
      audio.current.onended = () => {
        audio.current = null;
        currentAudioFile.current = '';
      };
      audio.current.play();
    } else if (currentAudioFile.current !== file) {
      audio.current.pause();
      currentAudioFile.current = file;
      audio.current.src = file;
      audio.current.play();
    } else if (audio.current.paused) {
      audio.current.play();
    } else {
      audio.current.pause();
    }
  }

  function play1Off() {
    playAudio(clip1EfxOff);
  }
  function play2Off() {
    playAudio(clip2EfxOff);
  }
  function play1On() {
    playAudio(clip1EfxOn);
  }
  function play2On() {
    playAudio(clip2EfxOn);
  }

  return (
    <div className={styles.rootContainer}>
      <Helmet>
        <title>{props.t('title')}</title>
        <meta name="description" content={props.t('description')} />
      </Helmet>
      <HeaderBanner backgroundImage={bannerBackground} logoImage={bannerLogo} sublabel={props.t("gain_powerfull")} />
      {/* <div className={styles.video}>
        <VideoBanner {...banner} />
        <Hidden smDown><img src={audioefx} /></Hidden>
      </div> */}
      <div className={styles.introduction}>
        <div className={coreStyles.container}>
          <h2 className={classname(coreStyles.fontLight, styles.introductionHeader)}>{props.t('section_hear_more_title')}</h2>

          <h3 className={styles.introductionText}>{props.t('section_hear_more_subtitle')}</h3>
        </div>
        <div className={styles.introductionContainer}>
          <div className={styles.introductionGrid}>
            <div className={styles.introductionImageContainer}>
              <div>
                <img className={classname(styles.introductionInfoImg, { [styles.imageIeFix]: isIE })} src={frame} />
              </div>
            </div>
            <div className={styles.introductionContentContainer}>
              <div className={classname(coreStyles.fontLight, styles.introductionSmallHeader)}>{props.t('section_hear_more_image_title')}</div>
              <div className={classname(coreStyles.fontLight, styles.introductionDescription)}>{props.t('section_hear_more_image_description')}</div>
            </div>
          </div>
        </div>
      </div>
      <div className={coreStyles.container}>
        <div className={styles.videoContainer}>
          <div className={styles.videoSingle}>
              <div>
                  <div>
                      <iframe height="100%" width="100%"  src={`https://www.youtube.com/embed/dn1QCxvmL0I?rel=0&modestbranding=1&autoplay=0`}
                        allowFullScreen frameBorder="0" />
                  </div>
              </div>
          </div>
        </div>  
      </div>
      <TabbedSection  {...tabs} />
      <div className={coreStyles.container}>
        <div className={styles.hearContainer}>
          <h2 className={classname(coreStyles.fontLight, styles.hearTitle)}>{props.t('hear_the_difference')}</h2>
          <h3 className={classname(coreStyles.fontLight, styles.hearSubtitle)}>{props.t('hear_the_difference_subtitle')}</h3>
          <div className={styles.hearItems}>
            <div className={classname(coreStyles.fontLight, styles.hearLabel)}>{props.t('audioefx_off')}</div>
            <div className={styles.grayContainer}>
              <img src={play_audio} onClick={play1Off} />
              <div className={classname(coreStyles.fontLight, styles.hearText)}>{props.t('clip_1')}</div>
              <img src={play_audio} onClick={play2Off} />
              <div className={classname(coreStyles.fontLight, styles.hearText)}>{props.t('clip_2')}</div>
            </div>
            <div className={classname(coreStyles.fontLight, styles.hearLabel)}>{props.t('audioefx_on')}</div>
            <div className={styles.grayContainer}>
              <img src={play_audio} onClick={play1On} />
              <div className={classname(coreStyles.fontLight, styles.hearText)}>{props.t('clip_1')}</div>
              <img src={play_audio} onClick={play2On} />
              <div className={classname(coreStyles.fontLight, styles.hearText)}>{props.t('clip_2')}</div>
            </div>
          </div>
        </div>
      </div>
      <Banner {...bottomBanner} />
    </div>
  );
}

export default withTranslation('audioefx')(AudioEFX);