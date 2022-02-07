import React from 'react';
import { WithTranslation, withTranslation } from 'react-i18next';
import classname from 'classnames';
import { Helmet } from 'react-helmet';

import styles from './Software.scss';
import soniqueimg from './sonique img.png';
import audioefximg from './audioEFX img.png';
import audioworximg from './audioworx img.png';

import TabbedSection, { TabbedSectionProps } from '@src/views/common/TabbedSection/TabbedSection';




function Software(props: WithTranslation) {
  const tabprops: TabbedSectionProps = {
      title: props.t('software'),
      tabs: [
        {
          title: props.t('sonique'),
          content: (
            <div className={classname(styles.contentContainer, styles.tab1)}>
              <div className={styles.areaDescription} dangerouslySetInnerHTML={{__html:props.t('sonique_text')}}/>
              <div className={styles.areaImage}>
                <img src={soniqueimg} />
              </div>
            </div>
          )
        },
        {
          title: props.t('audioefx'),
          content: (
            <div className={classname(styles.contentContainer, styles.tab1)}>
              <div className={styles.areaDescription} dangerouslySetInnerHTML={{__html:props.t('audioefx_text')}}/>
              <div className={styles.areaImage}>
                <img src={audioefximg} />
              </div>
            </div>
          )
        },
        {
          title: props.t('audioworx'),
          content: (
            <div className={classname(styles.contentContainer, styles.tab1)}>
              <div className={styles.areaDescription} dangerouslySetInnerHTML={{__html:props.t('audioworx_text')}}/>
              <div className={styles.areaImage}>
                <img src={audioworximg} />
              </div>
            </div>
          )
        }
      ],
      headerContainerStyle: styles.tabsHeader,
      tabContainerStyle: styles.tab,
      headerStyle: styles.tabHeader
    };
    
  const { activeTabStyle, ...rest } = tabprops;
  return (
    <React.Fragment>
      <Helmet>
        <title>{props.t('title')}</title>
        <meta name="description" content={props.t('description')} />
      </Helmet>
      <TabbedSection activeTabStyle={classname(tabprops.activeTabStyle)} {...rest}  />
    </React.Fragment>
  );
}

export default withTranslation('home')(Software);