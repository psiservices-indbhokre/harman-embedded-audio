import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { WithTranslation, withTranslation } from 'react-i18next';
import classname from 'classnames';
import { Helmet } from 'react-helmet';

import coreStyles from '@src/index.scss';
import styles from './Speakers.scss';

import { Hardware, HardwareProps } from '../Hardware';
import { PATHS } from '@src/modules/navigation/models';
import Button from "@src/components/CustomButtons/Button.jsx";

import image_banner from './Speakers_banner.jpg';
import bottom_image from './img_download_bg_microphone.jpg';
import DownloadPopup from '@src/views/common/DownloadPopup/DownloadPopup';

function Microphones(props: WithTranslation) {
  const [opened, setOpened] = useState(false);
  const hwProps: HardwareProps = {
    imageBanner: {
      title: props.t('section_image_banner_title'),
      subtitle: props.t('section_image_banner_subtitle'),
      image: image_banner,
      contentContainerStyle: styles.imageContentContainer
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
              <div className={styles.areaImage}>
                <div />
              </div>
              <div className={styles.areaText}>
                <div className={styles.title}>{props.t('section_tabs_tab_1_content_title')}</div>
                <div className={styles.description}>{props.t('section_tabs_tab_1_content_description')}</div>
              </div>
            </div>
          )
        },
        {
          title: props.t('section_tabs_tab_2_title'),
          content: (
            <div className={classname(styles.contentContainer, styles.tab2)}>
              <div className={styles.areaText}>
                <div className={styles.title}>{props.t('section_tabs_tab_2_content_title')}</div>
                <div className={styles.description}>{props.t('section_tabs_tab_2_content_description')}</div>
              </div>
              <div className={styles.areaImage}>
                <div />
              </div>
            </div>
          )
        },
        {
          title: props.t('section_tabs_tab_3_title'),
          content: (
            <div className={classname(styles.contentContainer, styles.tab3)}>
              <div className={styles.areaImage}>
                <div />
              </div>
              <div className={styles.areaText}>
                <div className={styles.title}>{props.t('section_tabs_tab_3_content_title')}</div>
                <div className={styles.description}>{props.t('section_tabs_tab_3_content_description')}</div>
              </div>
            </div>
          )
        }
      ],
      headerContainerStyle: styles.tabsHeader
    },
    banner: {
      title: props.t('section_bottom_banner_title'),
      subtitle: props.t('section_bottom_banner_subtitle'),
      image: bottom_image,
      titleStyle: styles.bannerTitle,
      subtitleStyle: styles.bannerSubtitle,
      bottomContent: (
        <div className={styles.bottomButtons}>
          <Button color={'HarmanTransparent'} underline={'none'} onClick={open}>
            <span className={coreStyles.buttonWhite}>{props.t('section_bottom_banner_download')}</span>
          </Button>
          <Button color={'HarmanTransparent'}
            component={Link} to={PATHS.OVERVIEW} underline={'none'}>
            <span className={coreStyles.buttonWhite}>{props.t('section_bottom_banner_learn_more')}</span>
          </Button>
        </div>
      )
    }
  };

  function open() {
    setOpened(true);
  }

  function close() {
    setOpened(false);
  }

  return (
    <React.Fragment>
      <Helmet>
        <title>{props.t('title')}</title>
        <meta name="description" content={props.t('description')} />
      </Helmet>
      <Hardware {...hwProps} />
      <DownloadPopup url='https://goembed.harman.com/l/273722/2019-04-20/3ylfwzh' opened={opened} onClose={close} />
    </React.Fragment>
  );
}

export default withTranslation('speakers')(Microphones);