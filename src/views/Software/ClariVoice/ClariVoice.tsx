import React from 'react';
import { withTranslation, WithTranslation } from 'react-i18next';
import classname from 'classnames';
import { Helmet } from 'react-helmet';
import { HeaderBanner } from "@src/views/common/HeaderBanner/HeaderBanner";
// import CardCarousel from '@src/views/common/CardCarousel/CardCarousel';
import BasicCarousel from '@src/views/common/BasicCarousel/BasicCarousel';
import { captureEveryWordList, powerOfHarmanList } from './CarouselItems/CarouselItems';
import Card from '@src/views/common/Card/Card';
import { applications } from './Applications/Applications'
import { benefits } from './Benefits/Benefits';

import audioWave from './audio_wave.png';

import bottomBg from '@src/assets/app_img_common/software_bottom_banner.jpg';
import bannerBackground from './Clarivoice_Header.png';
import bannerLogo from './ClariVoice_logo.png';

import styles from './ClariVoice.scss';
import coreStyles from '@src/index.scss';
import { Hidden } from '@material-ui/core';
import { Banner } from '@src/views/common/Banner/Banner';
import Button from '@src/components/CustomButtons/Button.jsx';
import { Link } from 'react-router-dom';
import { PATHS } from '@src/modules/navigation/models';

type CarouselContentList = typeof captureEveryWordList | typeof powerOfHarmanList

function ClariVoice(props: WithTranslation) {

  const benefitsContent = ((): JSX.Element[] => {
    return(
      benefits.map((item, index) => {
        return(
          <div className={styles.plate} key={index}>
            <img src={item.image} />
            <div className={styles.plateDescription}>
              <h4 className={classname(coreStyles.fontMedium, styles.plateTitle)}>{props.t(item.title)}</h4>
            </div>
          </div>
        )
      })
    ) 
  })();

  const applicationContent = ((): JSX.Element[] => {
    return applications.map((item, index) => {
      return(
        <div className={classname(styles.plate, styles.applicationPlate)} key={index}>
          <img src={item.image}/>
          <h4 className={coreStyles.fontLight}>{props.t(item.title)}</h4>
        </div>
      )
    })
  })();

  const getCarouselContent = (contentList: CarouselContentList, styleClassName: string): JSX.Element[] => {
    return(
      contentList.map((item, index) => {
        return(
          <div className={styles.cardContainer} key={index}>
            <Card className={styleClassName} title={props.t(item.title)} image={item.image} description={props.t(item.description)} />
          </div>
        )
      })
    )
  }

  return (
    <div className={styles.container}>
      <Helmet>
        <title>{props.t('title')}</title>
        <meta name="description" content={props.t('description')} />
      </Helmet>
      <HeaderBanner backgroundImage={bannerBackground} logoImage={bannerLogo} sublabel={props.t("ensure_the_highest")} />
      <div className={coreStyles.container}>
        <div className={styles.descriptionContainer}>
          <div className={styles.images}>
            <img src={audioWave} />
          </div>
          <h2 className={classname(coreStyles.fontLight, styles.title)}>{props.t('description_title')}</h2>
          <div className={styles.description}>{props.t('description_subtitle')}</div>
        </div>
      </div>
      <div className={classname(styles.platesContainer, styles.benefitsContainer)}>
        <div className={coreStyles.container}>
          <div className={styles.platesContentContainer}>
            <h2 className={classname(coreStyles.fontLight, styles.platesTitle, styles.benefitsTitle)}>{props.t('benefits')}</h2>
            <div className={classname(styles.benefitPlates, styles.plates )}>
              <Hidden mdUp>
                <BasicCarousel>  
                  {
                    benefitsContent
                  }
                </BasicCarousel> 
              </Hidden>
              <Hidden smDown> 
                {
                  benefitsContent
                }
              </Hidden>
            </div>
          </div>
        </div>
      </div>
      <div className={classname(styles.carouselContainer, styles.captureContainer)}>
        <div className={classname(coreStyles.container)}>        
			    <div className={classname(styles.contentContainer)}>
				    <div className={styles.innerContainer}>	
              <h2 className={classname(coreStyles.fontLight, styles.title)}>{props.t("capture_every_word")}</h2>
				      <h3 className={classname(coreStyles.fontLight, styles.subtitle)}>{props.t("harman_clarivoice_uses")}</h3>
              <Hidden mdUp>
                <BasicCarousel>
                  {
                    getCarouselContent(captureEveryWordList, styles.captureItem)
                  }
                </BasicCarousel>
              </Hidden>
              <Hidden smDown> 
                <BasicCarousel propSettings={{dots: false, centerMode: false, variableWidth: false, slidesToShow: 3}}>
                  {
                    getCarouselContent(captureEveryWordList, styles.captureItem)
                  }
                </BasicCarousel>
              </Hidden>
            </div>
					</div>
				</div>
      </div>
      <div className={classname(styles.platesContainer, styles.applicationsContainer)}>
        <div className={coreStyles.container}>
          <div className={styles.platesContentContainer}>
            <h2 className={classname(coreStyles.fontLight, styles.platesTitle, styles.applicationsTitle)}>{props.t('applications')}</h2>
            <div className={classname(styles.applicationPlates, styles.plates )}>
              <Hidden mdUp>
                <BasicCarousel> 
                  {
                    applicationContent 
                  }
                </BasicCarousel> 
              </Hidden>
              <Hidden smDown>
                {
                  applicationContent
                }
              </Hidden>
            </div>
          </div>
        </div>        
      </div>
      <div className={classname(styles.carouselContainer, styles.powerContainer)}>
        <div className={classname(coreStyles.container)}>        
			    <div className={classname(styles.contentContainer)}>
				    <div className={styles.innerContainer}>
              <h2 className={classname(coreStyles.fontLight, styles.title)}>{props.t("power_of_harman")}</h2>
              <h3 className={classname(coreStyles.fontLight, styles.subtitle)}>{props.t("when_embedded")}</h3>
              <Hidden mdUp>
                <BasicCarousel>
                  {
                    getCarouselContent(powerOfHarmanList, styles.powerItem)
                  }
                </BasicCarousel>
              </Hidden>
              <Hidden smDown> 
                <BasicCarousel propSettings={{dots: false, centerMode: false, variableWidth: false, slidesToShow: 3}}>
                  {
                    getCarouselContent(powerOfHarmanList, styles.powerItem)
                  }
                </BasicCarousel>
              </Hidden>
            </div>
			    </div>
        </div>
      </div>
      <Banner title={props.t('ensure_accurate')} image={bottomBg} subtitle={props.t('discover_how')}
        bottomContent={(
          <div className={styles.buttons}>
            <Button color={'HarmanTransparent'} component={Link} to={PATHS.CONTACT} underline={'none'}>
              <span className={coreStyles.buttonWhite}>{props.t('contact_us')}</span>
            </Button>
          </div>
        )} />
    </div>
  );
}

export default withTranslation('clarivoice')(ClariVoice);