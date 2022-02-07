import React from 'react';
import { WithTranslation, withTranslation } from 'react-i18next';
import classname from 'classnames';
import { Helmet } from 'react-helmet';

import styles from './Hardware.scss';
import img from './img_info.jpg';

import TabbedSection, { TabbedSectionProps } from '@src/views/common/TabbedSection/TabbedSection';



function Hardware(props: WithTranslation) {
  const tabprops: TabbedSectionProps = {
      title: props.t('hardware'),
      tabs: [
        {
          title: props.t('microphones'),
          content: (
            <div className={classname(styles.contentContainer, styles.tab1)}>
              <div className={styles.areaImage}>
                <img src={img}/>
              </div>
              <div className={styles.areaDescription}>
                <div className={styles.description}>{props.t('microphones_text')}</div>
              </div>
            </div>
          )
        },
        {
          title: props.t('speaker'),
          content: (
            <div className={classname(styles.contentContainer, styles.tab1)}>
              <div className={styles.areaImage}>
                <img src={img}/>
              </div>
              <div className={styles.areaDescription}>
                <div className={styles.description}>
                  <p>{props.t('speaker_text1')}</p>
                  <p>{props.t('speaker_text2')}</p>
                  <p>{props.t('speaker_text3')}</p>
                </div>
              </div>
            </div>
          )
        }
      ],
      headerContainerStyle: styles.tabsHeader, 
      tabContainerStyle: styles.tab,
      containerStyle: styles.container,
      headerStyle: styles.tabHeader
    };
    
  const { activeTabStyle, ...rest } = tabprops;
  return (
    <React.Fragment>
      <Helmet>
        <title>{props.t('hardware')}</title>
        <meta name="description" content={props.t('description')} />
      </Helmet>
      <TabbedSection activeTabStyle={classname(tabprops.activeTabStyle)} {...rest}  />
    </React.Fragment>
  );
}

export default withTranslation('home')(Hardware);