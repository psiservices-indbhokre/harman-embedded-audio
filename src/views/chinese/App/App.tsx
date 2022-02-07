import React from 'react';
import { withTranslation, WithTranslation } from 'react-i18next';
import { Route } from 'react-router-dom';

import styles from './App.scss';

import { Header } from './Header/Header';
import Footer from './Footer/Footer';
import { LeadForensincs } from '../../common/LeadForensics/LeadForensics';

import { Hidden } from '@material-ui/core';
import { Helmet } from 'react-helmet';

import chineseStyles from './ChineseHome.scss';

import {Banner} from '@src/views/common/Banner/Banner';
import {REFS} from '../refs';
import Hardware from '../Hardware/Hardware';
import Software from '../Software/Software';
import ProductDesign from './ProductDesign/ProductDesign';
import Contact from '../Contact/Contact';

import * as background from './background.png';
import * as arrow from './Arrow.png';

class App extends React.Component<WithTranslation> {

  constructor(props:WithTranslation) {
    super(props)
    this.scrollTo = this.scrollTo.bind(this)
  }
  private sectionRefs = Object.keys(REFS).reduce((res, key) => {res[key] = React.createRef<HTMLDivElement>();return res}, {})

  public scrollTo (ref: string, headerHeigth: number) {
    console.log(headerHeigth)
    const requiredTop = this.sectionRefs[ref].current?this.sectionRefs[ref].current.offsetTop-headerHeigth:0;
    window.scrollTo({
      top: requiredTop,
      behavior: 'smooth'
    });
    document.documentElement.scrollTop = requiredTop // for IE
  };

  public render() {
    return (
      <div className={styles.appContainer}>
        <Header onRoute={this.scrollTo} />
        <Route component={LeadForensincs} />
        
        <div className={chineseStyles.homeContainer}>
          <Helmet>
            <title>{this.props.t('title')}</title>
            <meta name="description" content={this.props.t('description')}/>
          </Helmet>
          <Hidden smDown>
            <Banner image={background} title={this.props.t('video_overlay_line_1')} subtitle={this.props.t('video_overlay_line_2')} containerStyle={chineseStyles.overlay}
            bottomContent={<img src={arrow} className={chineseStyles.downArrow} />} />
          </Hidden>
          <Hidden mdUp>
            <Banner image={background} title={this.props.t('video_overlay_mobile')} subtitle={''}  containerStyle={chineseStyles.overlay}/>
          </Hidden>
          <div ref={this.sectionRefs[REFS.HARDWARE]} />
          <Hardware />
          <div ref={this.sectionRefs[REFS.SOFTWARE]} />
          <Software />
          <div ref={this.sectionRefs[REFS.PRODUCT_DESIGN]} />
          <ProductDesign />
          <div ref={this.sectionRefs[REFS.CONTACT]} />
          <Contact />
        </div>
        <Footer />
      </div>
    );
  }
}

export default withTranslation('home')(App);
