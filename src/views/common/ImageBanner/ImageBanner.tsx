import React from 'react';
import classname from 'classnames';

import styles from './ImageBanner.scss';
import coreStyles from '@src/index.scss';
import { Hidden } from '@material-ui/core';

export interface ImageBannerProps {
  readonly image: string;
  readonly title: string;
  readonly subtitle?: string;
  readonly imageMobile?: string;
  readonly subtitleElement?: JSX.Element;
  readonly contentContainerStyle?: string;
}

export function ImageBanner(props: ImageBannerProps) {
  return (
    <div className={styles.container}>
      {props.imageMobile &&
        <React.Fragment>
          <Hidden mdUp>
            <img src={props.imageMobile} className={styles.image} />
          </Hidden>
          <Hidden smDown>
            <img src={props.image} className={styles.image} />
          </Hidden>
        </React.Fragment>
      }
      {!props.imageMobile &&
        <img src={props.image} className={styles.image} />
      }
      <div className={classname(styles.titleContainer, props.contentContainerStyle)}>
        <h1 className={classname(coreStyles.fontLight, styles.title)}>{props.title}</h1>
        {(props.subtitle || props.subtitleElement) && <div className={styles.divider} />}
        {!props.subtitleElement && props.subtitle && <div className={classname(coreStyles.fontRegular, styles.subtitle)}>{props.subtitle}</div>}
        {props.subtitleElement}
      </div>
    </div>
  );
}