import React from "react";
import i18next from 'i18next';

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import NavigationButton from "./NavigationButton";

import classname from 'classnames';

import * as styles from './Navigation.scss';
import * as coreStyles from '@src/index.scss';

import {REFS} from "../../../refs";

interface HeaderState {
  openedMenu: string | null;
}


const menu: Array<{ titleKey: string, path: string }> = [
  { titleKey: 'header_hardware', path: REFS.HARDWARE  },
  { titleKey: 'header_software', path: REFS.SOFTWARE  },
  { titleKey: 'header_proddesign', path: REFS.PRODUCT_DESIGN },
  { titleKey: 'header_contact', path: REFS.CONTACT }
];


interface Props extends i18next.WithT {
    onRoute(ref:string): void
 }

class Navigation extends React.Component<Props, HeaderState>{
  constructor(props: Props) {
    super(props);
    this.state = { openedMenu: null };
  }

  private readonly closeMenu = () => {
    this.setState({ openedMenu: null });
  }

  public render() {
    return (
      <div className={styles.container}>

        <List className={styles.navigation} onMouseLeave={this.closeMenu}>
          {
            menu.map((item, index) => {
              const onMouseEnter = this.closeMenu;
              const el = <NavigationButton
                className={styles.navigationItem}
                color="HeaderMenu"
                onMouseEnter={onMouseEnter}
                onClick={this.props.onRoute}
                value={item.path}
              >
                  <div className={classname(coreStyles.regular, styles.text)}>{this.props.t(item.titleKey)}</div>
                </NavigationButton>
              return (
                <ListItem key={index} disableGutters={true} className={styles.listItem}>
                  {el}
                </ListItem>
              );
            })
          }
        </List>
      </div>
    );
  }
}

export default Navigation;