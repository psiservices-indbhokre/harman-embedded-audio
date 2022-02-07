import React, { useEffect, useRef } from 'react';
import { withTranslation, WithTranslation } from 'react-i18next';

import styles from './Contact.scss';
import coreStyles from '@src/index.scss';


function Contact(props: WithTranslation) {
  const iFrameRef = useRef<HTMLIFrameElement | null>(null);
  useEffect(() => {
    setTimeout(() => {
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
    }, 500);
  }, [iFrameRef.current]);

  return (
    <div className={styles.container}>
      
      <div className={coreStyles.container}>
        <div>
          <iframe src="https://goembed.harman.com/l/273722/2019-10-19/3yvftj8" className={styles.form}
            scrolling="no" frameBorder="0" ref={iFrameRef} id='sizetracker' />
        </div>
      </div>
    </div>
  );
}

export default withTranslation('contact')(Contact);