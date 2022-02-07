import React, { useState, useRef, useEffect, ReactHTML } from 'react';
import classname from 'classnames';

import styles from './TabbedHeader.scss';
import coreStyles from '@src/index.scss';
import { Hidden } from '@material-ui/core';

export interface TabbedHeaderProps {
  readonly tabs: string[];
  readonly onTabChanged: (index: number) => void;
  readonly tabStyle?: string;
  readonly activeTabStyle?: string;
  readonly lineStyle?: string;
  readonly underlineStyle?: string;
  readonly containerStyle?: string;
  readonly tabContainerStyle?: string;
  readonly tabElement?: keyof ReactHTML;
}

export function TabbedHeader(props: TabbedHeaderProps) {
  const [tab, setTab] = useState(0);
  const [underlineLeft, setUnderlineLeft] = useState(0);
  const [underlineWidth, setUnderlineWidth] = useState(0);
  const children = useRef<Array<HTMLElement | null>>(props.tabs.map(() => null));
  useEffect(() => {
    props.onTabChanged(tab);
  }, [tab]);
  // useEffect(() => {
  //   updateUnderline(children.current[tab]);
  // }, [...children.current, tab]);
  useEffect(() => {
    setTimeout(() => {
      updateUnderline(children.current[tab]);
    }, 500);
    return () => {
      // clearTimeout(timeout);
    };
  }, []);

  function onMouseEnter(ev: React.MouseEvent<HTMLElement>) {
    updateUnderline(ev.target as HTMLDivElement);
  }

  function onMouseLeave(ev: React.MouseEvent<HTMLElement>) {
    updateUnderline(children.current[tab]);
  }

  function updateUnderline(activeElement: HTMLElement | null) {
    if (!!activeElement) {
      setUnderlineLeft(Number(activeElement.offsetLeft));
      setUnderlineWidth(Number(activeElement.offsetWidth));
    }
  }

  return (
    <div className={classname(styles.container, props.containerStyle)}>
      <Hidden smDown>
        <div className={classname(styles.line, props.lineStyle)} />
      </Hidden>
      {
        props.tabs.map((tabItem, index) => {
          const element = React.createElement(props.tabElement || 'h4', {
            className: classname(coreStyles.tab, styles.tabTitle, props.tabStyle, { [props.activeTabStyle || '']: index === tab }),
            onClick: () => setTab(index),
            onMouseEnter,
            onMouseLeave,
            ref: (el: HTMLElement) => { children.current[index] = el; }
          }, [tabItem]);
          return (
            <div key={index} className={classname(styles.tab, props.tabContainerStyle)}>
              {element}
              {index === tab && <div className={classname(styles.underline, props.underlineStyle)} />}
            </div>
          );
        })
      }
      <Hidden smDown>
        <div className={classname(styles.underline, props.underlineStyle)} style={{ left: underlineLeft, width: underlineWidth }} />
      </Hidden>
    </div>
  )
}