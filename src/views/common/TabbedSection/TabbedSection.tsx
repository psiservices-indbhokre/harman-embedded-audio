import React, { useRef } from 'react';
import classname from 'classnames';
import Carousel, { Settings } from "react-slick";
import { withStyles } from '@material-ui/core';
import carouselStyle from "@src/assets/jss/material-kit-pro-react/views/componentsSections/carouselStyle.jsx";

import styles from './TabbedSection.scss';
import coreStyles from '@src/index.scss';
import { TabbedHeader } from '../TabbedHeader/TabbedHeader';

export interface TabProps {
  readonly title: string;
  readonly content?: JSX.Element;
}

export interface TabbedSectionProps {
  readonly title: string;
  readonly tabs: TabProps[];
  readonly containerStyle?: string;
  readonly headerStyle?: string;
  readonly headerContainerStyle?: string;
  readonly tabStyle?: string;
  readonly tabContainerStyle?: string;
  readonly activeTabStyle?: string;
}

function TabbedSection(props: TabbedSectionProps) {
  const slider = useRef<Carousel>(null);
  const carouselChildren = useRef<Array<HTMLDivElement | null>>(props.tabs.map(() => null));

  const settings: Settings = {
    dots: false,
    fade: true,
    arrows: false,
    swipe: false,
    adaptiveHeight: true
  };

  function onTabChanged(index: number) {
    slider.current!.slickGoTo(index);
    for (let i = 0; i < carouselChildren.current.length; i++) {
      const element = carouselChildren.current[i];
      let sliderElement: HTMLElement | null = null;
      if (!!element && !!element.parentElement &&  !!element.parentElement.parentElement) {
        sliderElement = element.parentElement.parentElement;
      }
      if (sliderElement !== null) {
        sliderElement.style.pointerEvents = i === index ? 'initial' : 'none';
      }
    }
  }

  return (
    <div className={classname(styles.container, props.containerStyle)}>
      <div className={coreStyles.container}>
        <div>
          <h2 className={classname(props.headerStyle, styles.title)}>{props.title}</h2>
          <div className={styles.tabs}>
            <TabbedHeader tabs={props.tabs.map(tab => tab.title)} onTabChanged={onTabChanged}
              containerStyle={props.headerContainerStyle} tabStyle={props.tabStyle}
              tabContainerStyle={props.tabContainerStyle} activeTabStyle={props.activeTabStyle} />
          </div>
          <Carousel {...settings} ref={slider}>
            {
              props.tabs.map((tabItem, index) => {
                if (tabItem.content) {
                  return (
                    <div key={index} ref={(el: HTMLDivElement) => { carouselChildren.current[index] = el; }}>
                      {tabItem.content}
                    </div>
                  );
                } else {
                  return null;
                }
              })
            }
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default withStyles(carouselStyle)(TabbedSection);