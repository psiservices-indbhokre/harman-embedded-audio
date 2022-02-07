import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { PATHS } from '@src/modules/navigation/models';

import styles from './App.scss';

import Home from '../Home/Home';
import NewsContainer from '../News/NewsContainer';
import AudioEFX from '../Software/AudioEFX/AudioEFX';
import Microphones from '../Hardware/Microphones/Microphones';
import Speakers from '../Hardware/Speakers/Speakers';
import Overview from '../About/Overview/Overview';
import OurTeam from '../About/OurTeam/OurTeam';
import ProductDesign from '../ProductDesign/ProductDesign';
import Contact from '../Contact/Contact';
import CoBranding from '../CoBranding/CoBranding';
import Sonique from '../Software/Sonique/Sonique';
import { Header } from './Header/Header';
import Footer from './Footer/Footer';
import Search from '../Search/SearchContainer';
import { LeadForensincs } from '../common/LeadForensics/LeadForensics';
import ClariVoice from '../Software/ClariVoice/ClariVoice';

import Xiaomi from '../Blogs/Xiaomi/Xiaomi';
import Kohler from '../Blogs/Kohler/Kohler';
import Cardo from '../Blogs/Cardo/Cardo';
import IconAI from '../Blogs/IconAI/IconAI';
import Byline from '../Blogs/Byline/Byline';
import Sena from '../Blogs/Sena/Sena';
import Lovesac from '../Blogs/Lovesac/Lovesac';

// import Blogs from '../Blogs/Blogs';

const ScrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
  return null;
};

class App extends React.Component {
  public render() {
    return (
          <div className={styles.appContainer}>
            <Header />
            <Route component={ScrollToTop} />
            <Route component={LeadForensincs} />
            <Switch>
              <Route exact={true} path={PATHS.ROOT} component={Home} />

              <Route exact={true} path={PATHS.MICROPHONES} component={Microphones} />
              <Route exact={true} path={PATHS.SPEAKERS} component={Speakers} />

              <Route exact={true} path={PATHS.SONIQUE} component={Sonique} />
              <Route exact={true} path={PATHS.AUDIOEFX} component={AudioEFX} />
              <Route exact={true} path={PATHS.CLARI_VOICE} component={ClariVoice} />

              <Route exact={true} path={PATHS.PRODUCT_DESIGN} component={ProductDesign} />

              <Route exact={true} path={PATHS.CO_BRANDING} component={CoBranding} />

              <Route exact={true} path={PATHS.OVERVIEW} component={Overview} />
              <Route exact={true} path={PATHS.NEWS} component={NewsContainer} />
              <Route exact={true} path={PATHS.TEAM} component={OurTeam} />
              
              <Route exact={true} path={PATHS.CONTACT} component={Contact} />
              
              <Route exact={true} path={PATHS.SEARCH} component={Search} />

              <Route path={PATHS.XIAOMI} component={Xiaomi} />
              <Route path={PATHS.KOHLER} component={Kohler} />
              <Route path={PATHS.CARDO} component={Cardo} />
              <Route path={PATHS.ICONAI} component={IconAI} />
              <Route path={PATHS.BYLINE} component={Byline} />
              <Route path={PATHS.SENA} component={Sena} />
              <Route path={PATHS.LOVESAC} component={Lovesac} />
              <Redirect to={PATHS.ROOT} />
            </Switch>
            <Footer />
          </div>
    );
  }
}

export default App;
