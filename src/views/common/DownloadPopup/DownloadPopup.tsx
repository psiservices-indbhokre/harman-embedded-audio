import React, { useEffect, useState } from 'react';

import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import { withStyles, StyleRulesCallback } from '@material-ui/core';

import modalStyle from "@src/assets/jss/material-kit-pro-react/modalStyle.jsx";

import styles from './DownloadPopup.scss';

import close from './close.png';

export interface DownloadPopupProps {
  readonly url: string;
  readonly opened: boolean;
  readonly onClose?: () => void;
}

function DownloadPopup(props: DownloadPopupProps) {
  const [iFrame, setIFrame] = useState<HTMLIFrameElement | null>(null);
  useEffect(() => {
    if (!!iFrame) {
      const eventMethod = window.addEventListener ? "addEventListener" : "attachEvent";
      const cleanUpMethod = eventMethod === "attachEvent" ? "detachEvent" : "removeEventListener";
      const eventer = window[eventMethod];
      const cleanUp = window[cleanUpMethod];
      const messageEvent = eventMethod === "attachEvent" ? "onmessage" : "message";
      // Listen for a message from the iframe.
      const callback = (e: MessageEvent) => {
        if (!isNaN(e.data)) {
          iFrame!.style.height = e.data + 'px';
        }

      };
      eventer(messageEvent, callback, false);

      return () => {
        cleanUp(messageEvent, callback, false);
      };
    }
    return undefined;
  }, [iFrame]);

  function setRef(element: HTMLIFrameElement) {
    setIFrame(element);
  }

  return (
    <Dialog open={props.opened} maxWidth={false} disableBackdropClick onClose={props.onClose}>
      <DialogContent>
        <div className={styles.container}>
          <img src={close} onClick={props.onClose} />
          <iframe src={props.url} scrolling="no" frameBorder="0" ref={setRef} id='sizetracker' />
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default withStyles(modalStyle as StyleRulesCallback)(DownloadPopup);