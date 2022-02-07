import React, { useEffect, useRef } from 'react';
import { withTranslation, WithTranslation } from 'react-i18next';
import { Hidden } from '@material-ui/core';
import { Helmet } from 'react-helmet';

import { Banner } from '../common/Banner/Banner';

import styles from './Contact.scss';
import coreStyles from '@src/index.scss';

import banner from './Contact_Header.jpg';

function Contact(props: WithTranslation) {
  const iFrameRef = useRef<HTMLIFrameElement | null>(null);
  useEffect(() => {
    if (!!iFrameRef.current) {
      const eventMethod = window.addEventListener ? "addEventListener" : "attachEvent";
      const cleanUpMethod = eventMethod === "attachEvent" ? "detachEvent" : "removeEventListener";
      const eventer = window[eventMethod];
      const cleanUp = window[cleanUpMethod];
      const messageEvent = eventMethod === "attachEvent" ? "onmessage" : "message";
      // Listen for a message from the iframe.
      const callback = (e: MessageEvent) => {
        if (!isNaN(e.data)) {
          iFrameRef.current!.style.height = e.data + 'px';
        }

      };
      eventer(messageEvent, callback, false);

      return () => {
        cleanUp(messageEvent, callback, false);
      }
    }
    return undefined;
  }, [iFrameRef.current]);

  return (
    <div className={styles.container}>
      <Helmet>
        <title>{props.t('metadata_title')}</title>
      </Helmet>
      <Hidden mdUp>
        <Banner title={props.t('title')} image={banner} titleStyle={styles.title}
          imageStyle={styles.image} containerStyle={styles.bannerContainer} titleElement='h1' subtitleElement='div' />
      </Hidden>
      <Hidden smDown>
        <Banner title={props.t('title')} subtitle={props.t('subtitle')} image={banner}
          titleStyle={styles.title} subtitleStyle={styles.subtitle}
          imageStyle={styles.image} containerStyle={styles.bannerContainer} />
      </Hidden>
      <div className={coreStyles.container}>
        <div>
          <iframe src="https://goembed.harman.com/l/273722/2019-04-12/3ykvdc7" className={styles.form}
            scrolling="no" frameBorder="0" ref={iFrameRef} id='sizetracker' />
        </div>
      </div>
    </div>
  );
}

export default withTranslation('contact')(Contact);