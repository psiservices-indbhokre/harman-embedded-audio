import React from 'react';
import classname from 'classnames';

import TabbedSection, { TabbedSectionProps } from '@src/views/common/TabbedSection/TabbedSection';
import { Banner, BannerProps } from '@src/views/common/Banner/Banner';

import styles from './Hardware.scss';
import coreStyles from '@src/index.scss';
import { ImageBanner, ImageBannerProps } from '../common/ImageBanner/ImageBanner';

export interface HardwareProps {
  readonly imageBanner: ImageBannerProps;
  readonly description: {
    readonly title: string;
    readonly imageStyle: string;
    readonly description: string;
  }
  readonly tabs: TabbedSectionProps,
  readonly banner: BannerProps
}

export function Hardware(props: HardwareProps) {
  const { activeTabStyle, ...rest } = props.tabs;
  return (
    <div className={styles.container}>
      <ImageBanner {...props.imageBanner} />
      <div className={classname(styles.description, styles.margin)}>
        <div className={coreStyles.container}>
          <h2 className={classname(coreStyles.fontLight, styles.title)}>{props.description.title}</h2>
        </div>
        <div className={styles.content}>
          <div className={styles.image}>
            <div className={props.description.imageStyle} />
          </div>
          <div className={styles.text}>
            <div className={coreStyles.fontLight}>{props.description.description}</div>
          </div>
        </div>
      </div>
      <TabbedSection activeTabStyle={classname(styles.activeTab, props.tabs.activeTabStyle)} {...rest} containerStyle={styles.margin} />
      <Banner {...props.banner} />
    </div>
  );
}