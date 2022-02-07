import React from 'react';
import i18n from 'i18next';
import classname from 'classnames';

import * as styles from './TopBanner.scss';
import * as coreStyles from '@src/index.scss';

import * as background from './Group 2.png';

export function TopBanner(props: i18n.WithT) {
  return (
    <React.Fragment>
      <div className={styles.topbannerContainer}>
        <img className={styles.img} src={background} /> 
        <div className={styles.topbannerOverlay}>
          <div className={classname(coreStyles.bannerHeading, styles.label, coreStyles.wrap)}>{props.t('unique_knowledge')}</div>
          <div className={classname(coreStyles.bannerSubtext, styles.sublabel, coreStyles.wrap)}>{props.t('find_out_how')}</div>
        </div>
      </div>
    </React.Fragment>
  );
}