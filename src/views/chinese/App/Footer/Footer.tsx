import React from 'react';
import { withTranslation, WithTranslation } from 'react-i18next';
import { Hidden } from '@material-ui/core';
import classname from 'classnames';

import * as styles from './Footer.scss';
import * as coreStyles from '@src/index.scss';
import { Cross } from './Cross/Cross';

import { EXTERNAL_PATHS } from '@src/modules/navigation/models';

import * as map from './map.png'

import * as linkedin from './ico_linkedin.png';

import * as contact from './ico_contact.png';

function Footer(props: WithTranslation) {
  return (
    <div className={styles.container}>
      <div className={classname(coreStyles.container, styles.content)}>
        <div>
          <Hidden smDown>
            <div className={styles.mapDescription}>
              <div className={styles.description}>{props.t('ft_descr')}</div>
              <div className={styles.legend}><Cross color={'#00A6E7'} style={styles.cross} />{props.t('ft_l1')}</div>
              <div className={styles.legend}><Cross color={'#DA6EE2'} style={styles.cross} />{props.t('ft_l2')}</div>
              <div className={styles.legend}><Cross color={'#93F16E'} style={styles.cross} />{props.t('ft_l3')}</div>
            </div>
            <div className={styles.map}>
              <img src={map} />
            </div>
          </Hidden>
          <div className={styles.links}>
            <div className={styles.social}>
              <div className={styles.contacts}>
                <a href='mailto:solutions@harman.com'><img src={contact} />solutions@harman.com</a>
              </div>
              <a href={EXTERNAL_PATHS.LINKEDIN} target={'_blank'}>
                <img src={linkedin} />
              </a>
            </div>
            <div className={styles.external}>
              <a href={EXTERNAL_PATHS.HARMAN} target={'_blank'}>
                {props.t('ft_vh')}
              </a>
              <a href={EXTERNAL_PATHS.CARREERS} target={'_blank'}>
                {props.t('ft_ch')}
              </a>
            </div>
          </div>
          <div className={styles.divider} />
          <Hidden mdUp>
            <div className={styles.divider} />
          </Hidden>
          <div className={styles.privacy}>
            <div>
              <a href={EXTERNAL_PATHS.COOKIES} target={'_blank'}>{props.t('ft_coockies')}</a><span>|</span>
              <a href={EXTERNAL_PATHS.PRIVACY} target={'_blank'}>{props.t('ft_pp')}</a><span>|</span>
              <a href={EXTERNAL_PATHS.TERMS_OF_USE} target={'_blank'}>{props.t('ft_tu')}</a>
            </div>
            <span className={styles.copyright}>{props.t('ft_c')}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default withTranslation('home')(Footer);