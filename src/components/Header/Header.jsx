import React from "react";
import { Link } from "react-router-dom";
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import Hidden from "@material-ui/core/Hidden";
import Drawer from "@material-ui/core/Drawer";
import Popover from "@material-ui/core/Popover";
// @material-ui/icons
import Menu from "@material-ui/icons/Menu";
import Close from "@material-ui/icons/Close";
// core components
import headerStyle from "assets/jss/material-kit-pro-react/components/headerStyle.jsx";

class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    if (this.props.changeColorOnScroll) {
      window.addEventListener("scroll", this.headerColorChange);
    }
  }
  headerColorChange() {
    const { classes, color, changeColorOnScroll } = this.props;
    const windowsScrollTop = window.pageYOffset;
    if (windowsScrollTop > changeColorOnScroll.height) {
      document.body
        .getElementsByTagName("header")[0]
        .classList.remove(classes[color]);
      document.body
        .getElementsByTagName("header")[0]
        .classList.add(classes[changeColorOnScroll.color]);
    } else {
      document.body
        .getElementsByTagName("header")[0]
        .classList.add(classes[color]);
      document.body
        .getElementsByTagName("header")[0]
        .classList.remove(classes[changeColorOnScroll.color]);
    }
  }
  componentWillUnmount() {
    if (this.props.changeColorOnScroll) {
      window.removeEventListener("scroll", this.headerColorChange);
    }
  }
  render() {
    const { classes, color, links, brand, fixed, absolute, search } = this.props;
    const appBarClasses = classNames({
      [classes.appBar]: true,
      [classes[color]]: color,
      [classes.absolute]: absolute,
      [classes.fixed]: fixed
    });
    const popoverRefStyle={
      "width": "100%"
    }
    return (
      <AppBar className={appBarClasses}>
      <div style={popoverRefStyle} ref={(el) => {this.pooverAnchor=el}}>
        <Toolbar className={classes.container}>
          {brand}
          <Hidden mdDown implementation="css" className={classes.hidden}>
            <div className={classes.collapse}>{links}</div>
          </Hidden>
          <Hidden lgUp>
            <div>
            {search}
            <IconButton
              aria-label="open drawer"
              onClick={this.props.handleDrawerToggle}
            >
              <Menu />
            </IconButton>
            </div>
          </Hidden>
        </Toolbar>
        </div>
        <Hidden lgUp implementation="css">
          {/* <Drawer
            variant="temporary"
            anchor={"right"}
            open={this.state.mobileOpen}
            classes={{
              paper: classes.drawerPaper
            }}
            onClose={this.handleDrawerToggle}
          > */}
            <Popover
              open={this.props.mobileOpen}
              onClose={this.props.handleDrawerToggle}
              //onClick={this.handleDrawerToggle}
              //anchorPosition={{ top: 68, left: 0 }}
              anchorEl={this.pooverAnchor}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              marginThreshold={0}
            >
              <div className={classes.appResponsive}>{links}</div>
            </Popover>
            
          {/* </Drawer> */}
        </Hidden>
      </AppBar>
    );
  }
}

Header.defaultProp = {
  color: "white"
};

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  color: PropTypes.oneOf([
    "primary",
    "info",
    "success",
    "warning",
    "danger",
    "transparent",
    "white",
    "rose",
    "dark"
  ]),
  links: PropTypes.node,
  brand:  PropTypes.node,
  search:  PropTypes.node,
  fixed: PropTypes.bool,
  absolute: PropTypes.bool,
  // this will cause the sidebar to change the color from
  // this.props.color (see above) to changeColorOnScroll.color
  // when the window.pageYOffset is heigher or equal to
  // changeColorOnScroll.height and then when it is smaller than
  // changeColorOnScroll.height change it back to
  // this.props.color (see above)
  changeColorOnScroll: PropTypes.shape({
    height: PropTypes.number.isRequired,
    color: PropTypes.oneOf([
      "primary",
      "info",
      "success",
      "warning",
      "danger",
      "transparent",
      "white",
      "rose",
      "dark"
    ]).isRequired
  }),
  mobileOpen: PropTypes.bool,
  handleDrawerToggle: PropTypes.func,
  closeMenu: PropTypes.func
};

export default withStyles(headerStyle)(Header);
