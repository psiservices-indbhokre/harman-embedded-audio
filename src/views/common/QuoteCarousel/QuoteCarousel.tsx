import React from "react";
import { withTranslation, WithTranslation } from 'react-i18next';
// react component for creating beautiful carousel
import Carousel from "react-slick";
// @material-ui/coßre components
import withStyles, { StyledComponentProps } from "@material-ui/core/styles/withStyles";
// @material-ui/icons
// core components
import styles from './QuoteCarousel.scss';
import coreStyles from '@src/index.scss';

import classname from 'classnames';
// import quoteImg from './right-quote-sign.png'; Removed this on 02-Feb-2022
import netgear from './netgear.png';
import sprint from './sprint.jpg';
import asus from './asus.jpg';
import ctouch from './ctouch.jpg';
import smartbeings from './smartbeings.png';
import xiomi from './xiomi.png'; // Added on 2-Feb-22
import lovesac from './lovesac.png'; // Added on 2-Feb-22

import carouselStyle from "@src/assets/jss/material-kit-pro-react/views/componentsSections/carouselStyle.jsx";
import { Hidden } from '@material-ui/core';

const quotes = [
  {
    image: asus,
    quote: "“HARMAN is the perfect partner for ASUS as both companies are passionate about technology and innovation… We expect this partnership will help us grow our business significantly.”",
    author: "S.Y. Hsu",
    position: "ASUS Corporate Vice President"
  },
  {
    image: ctouch,
    quote: "“The collaboration with HARMAN to develop a unique listening experience was energetic and just the beginning of our relationship.”",
    author: "Guus van Gestel",
    position: "Product manager CTOUCH"
  },
  {
    image: sprint,
    quote: "“It was great to work with the team at HARMAN to deliver on our vision for a combined small cell and smart home solution that is stylish enough to fit in any home.”",
    author: "Robert Kingsley",
    position: "head of small cell development at Sprint"
  },
  {
    image: smartbeings,
    quote: "“By partnering with a company as highly-regarded as HARMAN, WooHoo is poised to completely disrupt the IoT/smart homes genre relative to the audio quality of smart home devices.”",
    author: "Joseph Santos",
    position: "Chief Digital and Marketing Smartbeings"
  },
  {
    image: netgear,
    quote: "“…We have taken our expertise in WiFi and married it with a legend in the industry, Harman Kardon, to deliver superior sound quality to give our customers the best WiFi and HiFi in one package.”",
    author: "David Henry",
    position: "VP Connected Home products Netgear"
  }, // Added on 2-Feb-22
  {
    image: lovesac,
    quote: "“Lovesac StealthTech, a collaboration between Lovesac and Harman Kardon, has been a great commercial success … We have appreciated the HARMAN Embedded Audio team’s partnership very much, and the consumer has clearly enjoyed the branded collab and everything it represents.”",
    author: "Shawn Nelson",
    position: "Lovesac CEO & Founder"
  },
  {
    image: xiomi,
    quote: "“XIAOMI and harman/kardon professional acoustic team have in-depth cooperation, jointly fine-tuning the acoustic system. Combining with stereo dual speakers, it delivers to end users an auditory experience that is exquisite and fully delightful.”",
    author: "David",
    position: "Product Director XIOMI"
  }
]

class QuoteCarousel extends React.Component<StyledComponentProps & WithTranslation>{
  public render() {
    const { classes } = this.props;
    if (!classes) {
      return <div />;
    }
    const customDots = () => <div className={styles.dot} />
    const settings = {
      autoplaySpeed: 10000,
      customPaging: customDots,
      dotsClass: styles.dotsContainer,
      dots: true,
      fade: true,
      arrows: false,
      infinite: true,
      speed: 2000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      className: styles.carousel
    };

    return (
      <div className={styles.container}>
        <div className={classname(coreStyles.container, styles.contentContainer)}>
          <h2 className={classname(coreStyles.fontLight, styles.title)}>{this.props.t('quote_section_title')}</h2>
          <div className={classname(styles.innerContainer, classes.container)}>

            <Carousel {...settings}>
              {
                quotes.map((quote, index) => {
                  return (
                    <div key={index}>
                      <div className={styles.itemContainer}>
                        <div className={styles.imgBlock}>
                          <img src={quote.image} className={styles.pic} />
                        </div>
                        <div className={styles.quoteContainer}>
                          <div className={styles.quoteSubContainer}>
                            {/* Removed this 02-Feb-22..
                             <Hidden smDown>
                              <img className={styles.quoteIcon} src={quoteImg} />
                            </Hidden> */}
                            <div className={styles.quoteBlock}>
                              <div className={classname(coreStyles.fontLight, styles.quoteContent)}>{quote.quote}</div>
                              <Hidden smDown>
                                <div className={styles.line} />
                                <div className={classname(coreStyles.fontRegular, styles.quoteAuthor)}>{`${quote.author}, ${quote.position}`}</div>
                              </Hidden>
                              <Hidden mdUp>
                                <div className={styles.quoteAuthor}><b>{`${quote.author},`}</b></div>
                                <div className={styles.quoteAuthor}>{quote.position}</div>
                              </Hidden>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })
              }
            </Carousel>
          </div>
        </div>
      </div>
    );
  }
}

export default withTranslation('common')(withStyles(carouselStyle)(QuoteCarousel));

