import React, { ReactHTML } from 'react';
import classname from 'classnames';
import Button from "@src/components/CustomButtons/Button.jsx";
import { Link } from 'react-router-dom';

import styles from './Banner.scss';
import coreStyles from '@src/index.scss';
import { Hidden } from '@material-ui/core';

export interface BannerProps {
  readonly title: string;
  readonly subtitle?: string;
  readonly image: string;
  readonly imageMobile?: string;
  readonly button?: {
    readonly label: string;
    readonly link: string;
  }
  readonly bottomContent?: JSX.Element;
  readonly containerStyle?: string;
  readonly titleStyle?: string;
  readonly subtitleStyle?: string;
  readonly imageStyle?: string;
  readonly titleElement?: keyof ReactHTML;
  readonly subtitleElement?: keyof ReactHTML;
}

export function Banner(props: BannerProps) {
  return (
    <div className={classname(styles.container, props.containerStyle)}>
      {props.imageMobile &&
        <React.Fragment>
          <Hidden mdUp>
            <img src={props.imageMobile} className={classname(styles.image, props.imageStyle)} />
          </Hidden>
          <Hidden smDown>
            <img src={props.image} className={classname(styles.image, props.imageStyle)} />
          </Hidden>
        </React.Fragment>
      }
      {!props.imageMobile &&
        <img src={props.image} className={classname(styles.image, props.imageStyle)} />
      }
      <div className={coreStyles.container}>
        <div className={styles.innerContainer}>
          {
            React.createElement(props.titleElement || 'h2', {
              className: classname(props.titleStyle || coreStyles.h2, coreStyles.wrap, styles.text, { [styles.margin]: props.subtitle || props.button })
            }, [props.title])
          }
          {
            props.subtitle && React.createElement(props.subtitleElement || 'h3', {
              className: classname(props.subtitleStyle || coreStyles.h3, styles.text, { [styles.margin]: props.button })
            }, [props.subtitle])
          }
          {
            props.button &&
            <Button color={'HarmanTransparent'} className={styles.button}
              component={Link} to={props.button.link} underline={'none'}>
              <span className={coreStyles.buttonWhite}>{props.button.label}</span>
            </Button>
          }
          {props.bottomContent}
        </div>
      </div>
    </div >
  );
}