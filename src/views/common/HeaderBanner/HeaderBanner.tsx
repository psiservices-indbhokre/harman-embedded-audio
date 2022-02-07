import React from 'react';
import classname from 'classnames';

import * as styles from './HeaderBanner.scss';
import * as coreStyles from '@src/index.scss';

import * as arrow from './Arrow.png';
import { Hidden } from '@material-ui/core';

interface HeaderBannerProps {
  backgroundImage: string;
  logoImage: string;
  sublabel: string;
}

export function HeaderBanner(props: HeaderBannerProps) {

  return (
    <React.Fragment>
      <div className={styles.topbannerContainer}>
        <img className={styles.img} src={props.backgroundImage} /> 
        <div className={styles.topbannerOverlay}>
          <img src={props.logoImage} />
          <Hidden smDown>
            <div className={classname(styles.sublabel, coreStyles.wrap)}>{props.sublabel}</div>            
          </Hidden>
          <img src={arrow} className={styles.downArrow}/>  
        </div>
      </div>
    </React.Fragment>
  );
}