import React from 'react';
import { Link } from "react-router-dom";
import i18n from 'i18next';
import classname from 'classnames';

import { Hidden } from '@material-ui/core';
import Button from "@src/components/CustomButtons/Button.jsx";

import { PATHS } from '@src/modules/navigation/models';

import * as styles from './Solutions.scss';
import * as coreStyles from '@src/index.scss';

import * as imgSoftware from './ico_software.png';
import * as imgHardware from './ico_hardware.png';
import * as imgProductDesign from './ico_productdesign.png';
import * as imgCoBranding from './ico_cobranding.png';

export interface SolutionProps {
  readonly youtubeId: string;

  readonly t: i18n.TFunction;  
}

const items = [
  {
    title: 'solutions_hardware', image: imgHardware, imgStyle: styles.hardware, description: 'solutions_hardware_description',
    actions: [
      { label: 'solutions_hardware_microphones', link: PATHS.MICROPHONES },
      { label: 'solutions_hardware_speakers', link: PATHS.SPEAKERS },
      { label: 'solutions_hardware_complete', link: PATHS.PRODUCT_DESIGN }
    ]
  },
  {
    title: 'solutions_software', image: imgSoftware, imgStyle: styles.software, description: 'solutions_software_description',
    actions: [
      { label: 'solutions_software_sonique', link: PATHS.SONIQUE },
      { label: 'solutions_software_clarivoice', link: PATHS.CLARI_VOICE },
      { label: 'solutions_software_audioefx', link: PATHS.AUDIOEFX }
    ]
  },
  {
    title: 'solutions_product_design', image: imgProductDesign, imgStyle: styles.productDesign, description: 'solutions_product_design_description',
    actions: [{ label: 'solutions_product_design_more', link: PATHS.PRODUCT_DESIGN }]
  },
  {
    title: 'solutions_co_branding', image: imgCoBranding, imgStyle: styles.cobranding, description: 'solutions_co_branding_description',
    actions: [{ label: 'solutions_co_branding_more', link: PATHS.CO_BRANDING }]
  }
];

export function Solutions(props: SolutionProps) {
  return (
    <div className={styles.container}>
      <div className={coreStyles.container}>
        <h2 className={classname(coreStyles.fontLight, styles.title)}>{props.t('solutions_title')}</h2>
        <h3 className={styles.description}>{props.t('solutions_description')}</h3>
        <div className={styles.videoContainer}>
          <div className={styles.videoSingle}>
              <div>
                  <div>
                      <iframe height="100%" width="100%"  src={`https://www.youtube.com/embed/${props.youtubeId}?rel=0&modestbranding=1&autoplay=1`}
                        allowFullScreen frameBorder="0" />
                  </div>
              </div>
          </div>
        </div>        
      </div>
      <div className={styles.solutionsContainer}>
        <div className={coreStyles.container}>
          <div className={styles.solutions}>
            <Hidden smDown>
              {
                items.map((item, index) => {
                  return (
                    <div key={index} className={styles.imgContainer}>
                      <img src={item.image} className={item.imgStyle} />
                    </div>
                  );
                })
              }
              {
                items.map((item, index) => {
                  return (
                    <div key={index} className={styles.solutionTitle}>{props.t(item.title)}</div>
                  );
                })
              }
              {
                items.map((item, index) => {
                  return (
                    <div key={index} className={styles.solutionDescription}>{props.t(item.description)}</div>
                  );
                })
              }
              {
                items.map((item, index) => {
                  return (
                    <div key={index} className={styles.solutionActions}>
                      {
                        item.actions.map((action, actionIndex) => {
                          return (
                            <Button key={actionIndex} color={'HarmanTransparent'} className={styles.button}
                              component={Link} to={action.link} underline={'none'}>
                              <span className={classname(coreStyles.buttonWhite, coreStyles.fontRegular)}>{props.t(action.label)}</span>
                            </Button>
                          );
                        })
                      }
                    </div>
                  );
                })
              }
            </Hidden>
            <Hidden mdUp>
              {
                items.map((item, index) => {
                  return (
                    <React.Fragment key={index}>
                      <div className={styles.imgContainer}>
                        <img src={item.image} className={item.imgStyle} />
                      </div>
                      <div className={styles.solutionTitle}>{props.t(item.title)}</div>
                      <div className={styles.solutionDescription}>{props.t(item.description)}</div>
                      <div key={index} className={styles.solutionActions}>
                        {
                          item.actions.map((action, actionIndex) => {
                            return (
                              <Button key={actionIndex} color={'HarmanTransparent'} className={styles.button}
                                component={Link} to={action.link} underline={'none'}>
                                <span className={classname(coreStyles.buttonWhite, coreStyles.fontRegular)}>{props.t(action.label)}</span>
                              </Button>
                            );
                          })
                        }
                      </div>
                    </React.Fragment>
                  );
                })
              }
            </Hidden>
          </div>
        </div>
      </div>
    </div>
  );
}
