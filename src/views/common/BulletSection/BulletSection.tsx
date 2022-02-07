import React from 'react';
import classname from 'classnames';

import styles from './BulletSection.scss';
import coreStyles from '@src/index.scss';

export interface BulletSectionProps {
  readonly sectionTitle: string;
  readonly sectionSubtitle: string;
  readonly image: string;
  readonly title: string;
  readonly bullets: string[];
  readonly containerStyle?: string;
}

export function BulletSection(props: BulletSectionProps) {
  return (
    <div className={classname(styles.container, props.containerStyle)}>
      <div className={classname(styles.sectionTitle, coreStyles.h2)}>{props.sectionTitle}</div>
      <div className={coreStyles.h5Margin}>{props.sectionSubtitle}</div>
      <div className={styles.contentContainer}>
        <div className={styles.imageContainer}>
          <img src={props.image} className={styles.image} />
        </div>
        <div className={styles.content}>
          <div className={classname(coreStyles.h4Highlight, styles.title)}>{props.title}</div>
          <ul className={styles.bullets}>
            {
              props.bullets.map((bullet, index) => {
                return (
                  <li className={classname(coreStyles.regular, styles.bullet)} key={index}>{bullet}</li>
                );
              })
            }
          </ul>
        </div>
      </div>
    </div>
  );
}