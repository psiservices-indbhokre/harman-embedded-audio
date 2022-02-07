import React, { useState } from 'react';
import classname from 'classnames';

import * as styles from './VideoBanner.scss';
import * as coreStyles from '@src/index.scss';
import { Hidden } from '@material-ui/core';

// import * as play from './ico_play_media_opc.png';
import * as arrow from './Arrow.png';

import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import { withStyles, StyleRulesCallback } from '@material-ui/core';
import modalStyle from "@src/assets/jss/material-kit-pro-react/modalStyle.jsx";

import closeImg from '../DownloadPopup/close.png';

export interface VideoBannerProps {
  readonly title: string;
  readonly subtitle: string;
  readonly clips: string[];
  readonly image: string;
  readonly playImage?: string;
  readonly overlayStyle?: string;
  readonly backgroundStyle?: string;
  readonly youtubeId: string;
}

function VideoBanner(props: VideoBannerProps) {
  const [opened, setOpened] = useState(false);
  const clip = useState(props.clips[Math.floor(Math.random() * props.clips.length) % props.clips.length])[0];

  // function open() {
  //   setOpened(true);
  // }

  function close() {
    setOpened(false);
  }

  return (
    <React.Fragment>
      <Hidden smDown>
        <Dialog open={opened} maxWidth={false} disableBackdropClick onClose={close}>
          <DialogContent>
            <div className={styles.popupContainer}>
              <img src={closeImg} onClick={close} />
              <div className={styles.videoContainer}>
                <iframe width="100%" height="100%" frameBorder="0" allow="autoplay" allowFullScreen
                  src={`https://www.youtube.com/embed/${props.youtubeId}?rel=0&modestbranding=1&autoplay=1`} />
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </Hidden>
      <Hidden mdUp>
        <Dialog open={opened} maxWidth={false} disableBackdropClick onClose={close} fullScreen>
          <DialogContent>
            <div className={styles.popupContainer}>
              <img src={closeImg} onClick={close} />
              <div className={styles.videoContainer}>
                <iframe width="100%" height="100%" frameBorder="0" allow="autoplay" allowFullScreen
                  src={`https://www.youtube.com/embed/${props.youtubeId}?rel=0&modestbranding=1&autoplay=1`} />
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </Hidden>
      <Hidden smDown>
        <div className={styles.videoContainer}>
          <video autoPlay loop muted width={'100%'} src={clip} />
          <div className={classname(styles.videoOverlay, styles.gradient, props.overlayStyle)} />
          <div className={styles.videoOverlay}>
            <div className={coreStyles.container}>
              <h1 className={classname(styles.label, coreStyles.wrap)}>{props.title}</h1>
              <div className={classname(styles.sublabel, coreStyles.wrap)}>{props.subtitle}</div>
              {/* <img src={props.playImage || play} className={styles.play} onClick={open} /> */}

            </div>
            <img src={arrow} className={styles.downArrow} />
          </div>
        </div>
      </Hidden>
      <Hidden mdUp>
        <div className={styles.videoContainer}>
          <img className={classname(styles.img, props.backgroundStyle)} src={props.image} />
          <div className={classname(styles.videoOverlay, styles.gradient, props.overlayStyle)} />
          <div className={styles.videoOverlay}>
            <h1 className={classname(coreStyles.fontLight, styles.label, coreStyles.wrap)}>{props.title}</h1>
            {/* <img src={props.playImage || play} className={styles.play} onClick={open} /> */}
          </div>
        </div>
      </Hidden>
    </React.Fragment>
  );
}

export default withStyles(modalStyle as StyleRulesCallback)(VideoBanner);