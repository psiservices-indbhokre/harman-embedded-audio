import React from 'react';
import { withTranslation, WithTranslation } from 'react-i18next';
import classname from 'classnames';

import styles from './ProductDesign.scss';
import coreStyles from '@src/index.scss';

import img_1 from '@src/assets/app_img_common/background_1.png';
import img_2 from '@src/assets/app_img_common/background_2.png';
import img_3 from '@src/assets/app_img_common/background_3.jpg';

function ProductDesign(props: WithTranslation) {
  return (
    <div className={styles.container}>
      
      <div className={styles.descriptionContainer}>
        <div className={coreStyles.container}>
          <div className={styles.descriptionContent}>
            <h2 className={classname(coreStyles.fontLight, styles.descriptionTitle)}>{props.t('pd_header')}</h2>
            <h3 className={classname(coreStyles.fontLight, styles.descriptionSubtitle)}>{props.t('pd_subheader')}</h3>
            <div className={styles.columns}>
              <div className={styles.columnContent}>
                <div className={styles.imageContainer}>
                  <img src={img_1} />
                  <h4 className={classname(styles.descriptionText, coreStyles.fontRegular)}>{props.t('pic1')}</h4>
                </div>
              </div>
              <div className={styles.columnContent}>
                <div className={styles.imageContainer}>
                  <img src={img_2} />
                  <h4 className={classname(styles.descriptionText, coreStyles.fontRegular)}>{props.t('pic2')}</h4>
                </div>
              </div>
              <div className={styles.columnContent}>
                <div className={styles.imageContainer}>
                  <img src={img_3} />
                  <h4 className={classname(styles.descriptionText, coreStyles.fontRegular)}>{props.t('pic3')}</h4>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.description}>{props.t('descr')}</div>
          <ul className={styles.descriptionList} >
            <li>{props.t('descr_li1')}</li>
            <li>{props.t('descr_li2')}</li>
            <li>{props.t('descr_li3')}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default withTranslation('home')(ProductDesign);