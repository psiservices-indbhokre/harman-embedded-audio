import React from "react";
import { Link, withRouter } from 'react-router-dom';
import { RouteComponentProps } from 'react-router';
import i18next from 'i18next';

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Hidden from "@material-ui/core/Hidden"
import Button from "@src/components/CustomButtons/Button.jsx";
import CustomDropdown from "@src/components/CustomDropdown/CustomDropdown.jsx";

import classname from 'classnames';

import * as styles from './Navigation.scss';
import * as coreStyles from '@src/index.scss';

import { PATHS } from '@src/modules/navigation/models';

import * as arrow from './arrow.png';
import Search from '../../Search/SearchContainer';

interface HeaderState {
  openedMenu: string | null;
}


const menu: Array<{ titleKey: string, submenuItems?: Array<{ titleKey: string, path: string }>, path?: string }> = [
  {
    titleKey: 'hardware', submenuItems: [
      { titleKey: 'microphones', path: PATHS.MICROPHONES },
      { titleKey: 'speakers', path: PATHS.SPEAKERS },
      { titleKey: 'complete_product', path: PATHS.PRODUCT_DESIGN }
    ]
  },
  {
    titleKey: 'software', submenuItems: [
      { titleKey: 'software_sonique', path: PATHS.SONIQUE },
      { titleKey: 'clari-voice', path: PATHS.CLARI_VOICE },
      { titleKey: 'software_audio_efx', path: PATHS.AUDIOEFX }
    ]
  },
  { titleKey: 'product-design', path: PATHS.PRODUCT_DESIGN },
  { titleKey: 'co-branding', path: PATHS.CO_BRANDING },
  {
    titleKey: 'about', submenuItems: [
      { titleKey: 'overview', path: PATHS.OVERVIEW },
      { titleKey: 'news_blog', path: PATHS.NEWS },
      { titleKey: 'our_team', path: PATHS.TEAM }
    ]
  },
  { titleKey: 'contact', path: PATHS.CONTACT }
];


interface Props extends RouteComponentProps, i18next.WithT {
    onRoute(): void
 }

class Navigation extends React.Component<Props, HeaderState>{
  constructor(props: Props) {
    super(props);
    this.state = { openedMenu: null };
  }

  private readonly openMenu = (name: string) => {
    this.setState({ openedMenu: name });
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
              const hasSubmenu = item.submenuItems !== undefined && item.submenuItems.length > 0;
              const onMouseEnter = hasSubmenu ? () => this.openMenu(item.titleKey) : this.closeMenu;
              let el;
              if (hasSubmenu) {
                const subItems = item.submenuItems!.map((iItem) =>
                  (
                    <Link to={iItem.path} key={iItem.titleKey} onClick={this.props.onRoute}>
                      <div className={styles.menuItem}>{this.props.t(iItem.titleKey)}</div>
                    </Link>
                  )
                );
                const mainButtonCallback = () => item.path && this.props.history.push(item.path)
                el = <CustomDropdown
                  navDropdown
                  buttonText={<div className={styles.text}>{this.props.t(item.titleKey)}</div>}
                  buttonProps={{
                    className: styles.navigationItem,
                    color: "HeaderMenu"
                  }}
                  caret={<img src={arrow} className={styles.arrow} />}
                  openedCaret={<img src={arrow} className={classname(styles.arrow, styles.opened)} />}
                  dropdownList={subItems}
                  mainButtonCallback={mainButtonCallback}
                />
              } else {
                el = <Button
                  className={styles.navigationItem}
                  to={item.path ? item.path : null}
                  color="HeaderMenu"
                  component={Link}
                  onMouseEnter={onMouseEnter}
                  onClick={this.props.onRoute}
                >
                  <div className={classname(coreStyles.regular, styles.text)}>{this.props.t(item.titleKey)}</div>
                </Button>
              }
              return (
                <ListItem key={index} disableGutters={true} className={styles.listItem}>
                  {el}
                </ListItem>
              );
            })
          }
          <Hidden mdDown>
            <ListItem>
              <Search />
            </ListItem>
          </Hidden>
        </List>
      </div>
    );
  }
}

export default withRouter(Navigation);