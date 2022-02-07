import React from 'react';
import i18next from 'i18next';
import { Link } from 'react-router-dom';
import classname from 'classnames';

import Button from "@src/components/CustomButtons/Button.jsx";
import * as styles from './Introduction.scss';
import * as coreStyles from '@src/index.scss';

import { PATHS } from '@src/modules/navigation/models';

import * as img from './img_info.jpg';

export function Introduction(props: i18next.WithT) {
  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        <div className={styles.imageContainer}>
          <img className={styles.infoImg} src={img} />
        </div>
        <h2 className={styles.title}>{props.t('introduction_title')}</h2>
        <h3 className={styles.description}>{props.t('introduction_description')}</h3>
        <div className={styles.button}>
          <Button color={'Harman'} component={Link} to={PATHS.OVERVIEW}>
            <div className={classname(coreStyles.buttonWhite, coreStyles.fontRegular)}>{props.t('introduction_lean_more')}</div>
          </Button>
        </div>
      </div>
    </div>
  );
}