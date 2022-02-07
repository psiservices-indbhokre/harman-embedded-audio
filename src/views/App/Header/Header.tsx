import React from 'react';
import { Link } from "react-router-dom";
import { withTranslation, WithTranslation } from 'react-i18next';
import MaterialHeader from "@src/components/Header/Header.jsx";
import classname from "classnames";

import { PATHS, EXTERNAL_PATHS } from '@src/modules/navigation/models';

import * as styles from './Header.scss';
import coreStyles from '@src/index.scss';
import Navigation from "./Navigation/Navigation";
import * as logo from './img_harman_logo.png';
import Search from '../Search/SearchContainer';

interface MobileOpen {
  mobileOpen: boolean
}

class HeaderComponent extends React.Component<WithTranslation, MobileOpen> {
  private readonly t = this.props.t;

  constructor(props: any) {
    super(props);
    this.state = {
      mobileOpen: false
    };
    this.handleDrawerToggle = this.handleDrawerToggle.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }
  private handleDrawerToggle() {
    this.setState({ mobileOpen: !this.state.mobileOpen });
  }
  
  private closeMenu() {
    this.setState({ mobileOpen: false });
  }

  public render() {
    return (
      <div className={styles.headerContainer}>
        <MaterialHeader
          color={'white'}
          classes={{ title: styles.logoButton }}
          brand={
            <div className={styles.title}>
              <a href={EXTERNAL_PATHS.HARMAN} target="_blank">
                <img src={logo} className={styles.logo} />
              </a>
              <Link to={PATHS.ROOT}>
                <span className={classname(coreStyles.fontRegular, styles.embeddedAudio)}>
                  {this.props.t('title')}
                </span> 
              </Link> 
            </div>}
          links={<Navigation t={this.t} onRoute={this.closeMenu}/>}
          search={<Search />}
          fixed={true}
          mobileOpen={this.state.mobileOpen}
          handleDrawerToggle={this.handleDrawerToggle}
          closeMenu={this.closeMenu}
        />
      </div>
    );
  }
}

export const Header = withTranslation('menu')(HeaderComponent);