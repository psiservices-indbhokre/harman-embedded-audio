/*eslint-disable*/
import React from "react";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

import Button from "@src/components/CustomButtons/Button.jsx";
import logo from '../logo.png';

interface DropdownParams {
    classes: { [key: string]: string },
    paths: { [key: string]: string }
}

class HardwareDropdown extends React.Component<DropdownParams> {

    public render() {
        const { classes } = this.props;
        return (
            <div className={classes.body}>
                <div className={classes.buttonBox}>
                    <Button
                        to={this.props.paths.ROOT}
                        color="HeaderSubMenu"
                        component={Link}
                    >Item1</Button>
                    <Button
                        to={this.props.paths.ROOT}
                        color="HeaderSubMenu"
                        component={Link}
                    >Item2</Button>
                    <Button
                        to={this.props.paths.ROOT}
                        color="HeaderSubMenu"
                        component={Link}
                    >Item3</Button>
                </div>
                <div className={classes.detailsBox}>
                    <img src={logo} className={classes.itemPic} />
                    <div className={classes.itemDescr}>
                        Item description
                </div>
                </div>
            </div>)
    }
}

export default HardwareDropdown;