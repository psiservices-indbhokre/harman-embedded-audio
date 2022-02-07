import React from 'react';
import { withTranslation, WithTranslation } from 'react-i18next';
import MaterialHeader from "@src/components/Header/Header.jsx";
import classname from "classnames";

import {REFS} from '../../refs';

import ContactPanel from './ContactPanel/ContactPanel';
import { Hidden } from '@material-ui/core';
import * as styles from './Header.scss';
import coreStyles from '@src/index.scss';
import Navigation from "./Navigation/Navigation";
import * as logo from './img_harman_logo.png';

interface MobileOpen {
  mobileOpen: boolean,
}

interface HeaderProps {
  onRoute: (ref:string, hh:number) => any
}

class HeaderComponent extends React.Component<WithTranslation & HeaderProps, MobileOpen> {
  private readonly t = this.props.t;
  private containerRef = React.createRef<HTMLDivElement>();

  private onRoute (ref:string) {
    console.log(this.containerRef)
    this.closeMenu();
    if(this.containerRef.current) {
    this.props.onRoute(ref, (this.containerRef.current.childNodes[0] as HTMLElement).offsetHeight)
    }
  }

  constructor(props: any) {
    super(props);
    this.state = {
      mobileOpen: false
    };
    this.handleDrawerToggle = this.handleDrawerToggle.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
    this.onRoute = this.onRoute.bind(this);
    this.navigateToContact = this.navigateToContact.bind(this);
  }
  private handleDrawerToggle() {
    this.setState({ mobileOpen: !this.state.mobileOpen });
  }
  
  private closeMenu() {
    this.setState({ mobileOpen: false });
  }

  private navigateToContact() {
    this.onRoute(REFS.CONTACT)
  }

  public render() {
    return (
      <div ref = {this.containerRef} className={styles.headerContainer}>
        <MaterialHeader
          color={'white'}
          classes={{ title: styles.logoButton }}
          brand={
            <div className={styles.title}>
              <img src={logo} className={styles.logo} />
              <span className={classname(coreStyles.fontRegular, styles.embeddedAudio)}>
                {this.props.t('title')}
              </span> 
            </div>}
          links={<Navigation t={this.t} onRoute={this.onRoute}/>}
          fixed={true}
          mobileOpen={this.state.mobileOpen}
          handleDrawerToggle={this.handleDrawerToggle}
          closeMenu={this.closeMenu}
        />
        <Hidden smDown>
          <ContactPanel />
        </Hidden>
      </div>
    );
  }
}

export const Header = withTranslation('home')(HeaderComponent);