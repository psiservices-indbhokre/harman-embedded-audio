import React, { useState } from 'react';
import { WithTranslation, withTranslation } from 'react-i18next';
import classname from 'classnames';
import { Helmet } from 'react-helmet';

import coreStyles from '@src/index.scss';
import styles from './Microphones.scss';

import { Hardware, HardwareProps } from '../Hardware';
import { PATHS } from '@src/modules/navigation/models';

import Button from '@src/components/CustomButtons/Button.jsx';

import microphone_bg from './img_download_bg_microphone.jpg';
import image_banner from './Microphone_banner.jpg';
import DownloadPopup from '@src/views/common/DownloadPopup/DownloadPopup';
import { Hidden } from '@material-ui/core';

interface DownloadButtonProps {
  readonly url: string;
  readonly label: string;
}

function DownloadButton(props: DownloadButtonProps) {
  const [opened, setOpened] = useState(false);

  function open() {
    setOpened(true);
  }

  function onClose() {
    setOpened(false);
  }

  return (
    <React.Fragment>
      <Button color={'HarmanDownload'} onClick={open}>
        <div className={classname(coreStyles.fontRegular, styles.download)}>{props.label}</div>
      </Button>
      <DownloadPopup url={props.url} opened={opened} onClose={onClose} />
    </React.Fragment>
  );
}

function Microphones(props: WithTranslation) {
  const hwProps: HardwareProps = {
    imageBanner: {
      title: props.t('section_image_banner_title'),
      subtitle: props.t('section_image_banner_subtitle'),
      image: image_banner
    },
    description: {
      title: props.t('section_description_title'),
      description: props.t('section_description_text'),
      imageStyle: styles.descriptionImage
    },
    tabs: {
      title: props.t('section_tabs_title'),
      tabs: [
        {
          title: props.t('section_tabs_tab_1_title'),
          content: (
            <div className={classname(styles.contentContainer, styles.tab1)}>
              <div className={styles.areaDescription}>
                <div className={styles.description}>{props.t('section_tabs_tab_1_description')}</div>
                <Hidden smDown>
                  <ul className={styles.text}>
                    <li dangerouslySetInnerHTML={{ __html: props.t('section_tabs_tab_1_bullet_1') }} />
                    <li dangerouslySetInnerHTML={{ __html: props.t('section_tabs_tab_1_bullet_2') }} />
                    <li dangerouslySetInnerHTML={{ __html: props.t('section_tabs_tab_1_bullet_3') }} />
                  </ul>
                </Hidden>
              </div>
              <div className={styles.areaImage}>
                <div />
              </div>
              <Hidden mdUp>
                <ul className={styles.text}>
                  <li dangerouslySetInnerHTML={{ __html: props.t('section_tabs_tab_1_bullet_1') }} />
                  <li dangerouslySetInnerHTML={{ __html: props.t('section_tabs_tab_1_bullet_2') }} />
                  <li dangerouslySetInnerHTML={{ __html: props.t('section_tabs_tab_1_bullet_3') }} />
                </ul>
              </Hidden>
              <div className={styles.areaDownload}>
                <div className={classname(coreStyles.fontRegular, styles.downloadTitle)}>{props.t('section_tabs_tab_1_download_title')}</div>
                <div className={styles.downloadButtonsContainer}>
                  <DownloadButton url='https://goembed.harman.com/l/273722/2019-05-18/3ymztjb' label={props.t('section_tabs_tab_1_download_1')} />
                  <DownloadButton url='https://goembed.harman.com/l/273722/2019-05-18/3ymztl6' label={props.t('section_tabs_tab_1_download_2')} />
                </div>
              </div>
            </div>
          )
        },
        {
          title: props.t('section_tabs_tab_2_title'),
          content: (
            <div className={classname(styles.contentContainer, styles.tab2)}>
              <div className={styles.areaImage}>
                <div />
              </div>
              <div className={styles.areaDownload}>
                <div className={classname(coreStyles.fontRegular, styles.downloadTitle)}>{props.t('section_tabs_tab_2_download_title')}</div>
                <div className={styles.downloadButtonsContainer}>
                  <DownloadButton url='https://goembed.harman.com/l/273722/2019-05-18/3ymztyv' label={props.t('section_tabs_tab_2_download_1')} />
                  <DownloadButton url='https://goembed.harman.com/l/273722/2019-05-18/3ymztzq' label={props.t('section_tabs_tab_2_download_2')} />
                  <DownloadButton url='https://goembed.harman.com/l/273722/2019-05-18/3ymzv28' label={props.t('section_tabs_tab_2_download_3')} />
                </div>
              </div>
              <div className={styles.areaDescription}>
                <div className={styles.description}>{props.t('section_tabs_tab_2_description')}</div>
              </div>
            </div>
          )
        },
        {
          title: props.t('section_tabs_tab_3_title'),
          content: (
            <div className={classname(styles.contentContainer, styles.tab3)}>
              <div className={styles.areaDescription}>
                <div className={styles.description}>{props.t('section_tabs_tab_3_description')}</div>
                <div className={styles.descriptionSmall} dangerouslySetInnerHTML={{ __html: props.t('section_tabs_tab_3_description_1') }} />
                <ul className={styles.text}>
                  <li>{props.t('section_tabs_tab_3_bullet_1')}</li>
                  <li>{props.t('section_tabs_tab_3_bullet_2')}</li>
                  <li>{props.t('section_tabs_tab_3_bullet_3')}</li>
                  <li>{props.t('section_tabs_tab_3_bullet_4')}</li>
                </ul>
              </div>
              <div className={styles.areaImage}>
                <div />
              </div>
              <div className={styles.areaDownload}>
                <div className={classname(coreStyles.fontRegular, styles.downloadTitle)}>{props.t('section_tabs_tab_3_download_title')}</div>
                <div className={styles.downloadButtonsContainer}>
                  <DownloadButton url='https://goembed.harman.com/l/273722/2019-05-18/3ymzv2z' label={props.t('section_tabs_tab_3_download_1')} />
                  <DownloadButton url='https://goembed.harman.com/l/273722/2019-05-18/3ymzv34' label={props.t('section_tabs_tab_3_download_2')} />
                </div>
              </div>
            </div>
          )
        }
      ],
      headerContainerStyle: styles.tabsHeader,
      tabContainerStyle: styles.tab
    },
    banner: {
      title: props.t('section_bottom_banner_title'),
      button: {
        label: props.t('section_bottom_banner_button_label'),
        link: PATHS.OVERVIEW
      },
      image: microphone_bg,
      titleStyle: styles.bannerTitle,
      imageStyle: styles.bannerImage
    }
  };

  return (
    <React.Fragment>
      <Helmet>
        <title>{props.t('title')}</title>
        <meta name="description" content={props.t('description')} />
      </Helmet>
      <Hardware {...hwProps} />
    </React.Fragment>
  );
}

export default withTranslation('microphones')(Microphones);