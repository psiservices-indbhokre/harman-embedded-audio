import React from 'react';
import i18n from 'i18next';
import classname from 'classnames';

import * as styles from './TopBanner.scss';
import * as coreStyles from '@src/index.scss';

import * as background from './Overview_Header.jpg';
import * as arrow from './Arrow.png';
import { Hidden } from '@material-ui/core';

export function TopBanner(props: i18n.WithT) {

  return (
    <React.Fragment>
      <div className={styles.topbannerContainer}>
        <img className={styles.img} src={background} /> 
        <div className={styles.topbannerOverlay}>
          <h1 className={classname(coreStyles.fontLight, styles.label, coreStyles.wrap)}>{props.t('unique_knowledge')}</h1>
          <Hidden smDown>
            <div className={classname(styles.sublabel, coreStyles.wrap)}>{props.t('find_out_how')}</div>
            <img src={arrow} className={styles.downArrow}/>
          </Hidden>  
        </div>
      </div>
    </React.Fragment>
  );
}