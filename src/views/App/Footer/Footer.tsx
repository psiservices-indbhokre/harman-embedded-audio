import React from 'react';
import { Link } from "react-router-dom";
import { withTranslation, WithTranslation } from 'react-i18next';
import { Hidden } from '@material-ui/core';
import classname from 'classnames';

import * as styles from './Footer.scss';
import * as coreStyles from '@src/index.scss';
import { Cross } from './Cross/Cross';

import { PATHS, EXTERNAL_PATHS } from '@src/modules/navigation/models';

import * as map from './map.png'

import * as youtube from './ico_youtube.png';
import * as linkedin from './ico_linkedin.png';
import * as akg from './img_akg.png';
import * as kardon from './img_Kardon.png';
import * as infinity from './img_infinity.png';
import * as jbl from './img_jbl.png';
import * as laxicon from './img_laxicon.png';
import * as marko from './img_marko.png';
import * as revel from './img_revel.png';

import * as contact from './ico_contact.png';

const internalLinks = [
  {
    title: 'hardware', links: [
      { title: 'microphones', route: PATHS.MICROPHONES },
      { title: 'speakers', route: PATHS.SPEAKERS },
      { title: 'complete_product', route: PATHS.PRODUCT_DESIGN }
    ]
  },
  {
    title: 'software', links: [
      { title: 'sonique', route: PATHS.SONIQUE },
      { title: 'clari_voice', route: PATHS.CLARI_VOICE },
      { title: 'audio_efx', route: PATHS.AUDIOEFX }
    ]
  },
  {
    title: 'about', links: [
      { title: 'overview', route: PATHS.OVERVIEW },
      { title: 'news_blog', route: PATHS.NEWS },
      { title: 'our_team', route: PATHS.TEAM }
    ]
  },
  { title: 'product_design', route: PATHS.PRODUCT_DESIGN },
  { title: 'co_branding', route: PATHS.CO_BRANDING },
  { title: 'contact_us', route: PATHS.CONTACT }
]
const brands = [
  { img: akg, style: styles.akg },
  { img: kardon, style: styles.kardon },
  { img: infinity, style: styles.infinity },
  { img: jbl, style: styles.jbl },
  { img: laxicon, style: styles.laxicon },
  { img: marko, style: styles.marko },
  { img: revel, style: styles.revel }
];

function Footer(props: WithTranslation) {
  return (
    <div className={styles.container}>
      <div className={classname(coreStyles.container, styles.content)}>
        <div>
          <Hidden smDown>
            <div className={styles.mapDescription}>
              <div className={styles.description}>{props.t('description')}</div>
              <div className={styles.legend}><Cross color={'#00A6E7'} style={styles.cross} />{props.t('legend_engineering')}</div>
              <div className={styles.legend}><Cross color={'#DA6EE2'} style={styles.cross} />{props.t('legend_r&d')}</div>
              <div className={styles.legend}><Cross color={'#93F16E'} style={styles.cross} />{props.t('legend_support')}</div>
            </div>
            <div className={styles.map}>
              <img src={map} />
              <div className={styles.contacts}>
                <a href='mailto:solutions@harman.com'><img src={contact} />solutions@harman.com</a>
              </div>
            </div>
            <div className={styles.divider} />
          </Hidden>
          <div className={styles.links}>
            <div className={styles.social}>
              <a href={EXTERNAL_PATHS.YOUTUBE} target={'_blank'}>
                <img src={youtube} />
              </a>
              <a href={EXTERNAL_PATHS.LINKEDIN} target={'_blank'}>
                <img src={linkedin} />
              </a>
            </div>
            <div className={styles.external}>
              <a href={EXTERNAL_PATHS.HARMAN} target={'_blank'}>
                {props.t('visit_harman')}
              </a>
              <a href={EXTERNAL_PATHS.CARREERS} target={'_blank'}>
                {props.t('careers_harman')}
              </a>
            </div>
            <div className={styles.internal}>
              {
                internalLinks.map((group, index) => {
                  return (
                    <div key={index} className={styles.internalGroup}>
                      {
                        group.route && <Link className={styles.internalGroupTitle} to={group.route ? group.route : "/"}>
                          {props.t(group.title)}
                        </Link>
                      }
                      {
                        !group.route && <div className={styles.internalGroupTitle}>
                          {props.t(group.title)}
                        </div>
                      }
                      {
                        group.links && group.links.map((link, linkIndex) => {
                          return (
                            <Link key={linkIndex} className={styles.internalLink} to={link.route}>
                              {props.t(link.title)}
                            </Link>
                          );
                        })
                      }
                    </div>
                  );
                })
              }
            </div>
          </div>
          <div className={styles.divider} />
          <div className={styles.brands}>
            {
              brands.map((brand, index) => {
                return (
                  <div key={index}>
                    <img src={brand.img} className={brand.style} />
                  </div>
                );
              })
            }
          </div>
          <Hidden mdUp>
            <div className={styles.divider} />
          </Hidden>
          <div className={styles.privacy}>
            <div>
              <a href={EXTERNAL_PATHS.COOKIES} target={'_blank'}>{props.t('cookies')}</a><span>|</span>
              <a href={EXTERNAL_PATHS.PRIVACY} target={'_blank'}>{props.t('privacy_policy')}</a><span>|</span>
              <a href={EXTERNAL_PATHS.TERMS_OF_USE} target={'_blank'}>{props.t('terms_of_use')}</a>
            </div>
            <span className={styles.copyright}>{props.t('copyright')}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default withTranslation('footer')(Footer);