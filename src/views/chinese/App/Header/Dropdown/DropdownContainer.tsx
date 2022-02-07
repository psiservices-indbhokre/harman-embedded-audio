import React from "react";
// react components for routing our app without refresh
import styles from "./DropdownContainer.scss";

import HardwareDropdown from './HardwareDropdown';
import SoftwareDropdown from './SoftwareDropdown';
import AboutDropdown from './AboutDropdown';

interface DropdownProps {
    openedMenu: string,
    paths: { [key: string]: string },
    onMouseLeave(): void
}

class DropdownContainer extends React.Component<DropdownProps> {
    private readonly dropdowns = {
        hardware: <HardwareDropdown classes={styles} paths={this.props.paths} />,
        software: <SoftwareDropdown classes={styles} paths={this.props.paths} />,
        about: <AboutDropdown classes={styles} paths={this.props.paths} />
    };

    public render() {
        return (
            <div className={styles.container} onMouseLeave={this.props.onMouseLeave}>
                {this.dropdowns[this.props.openedMenu]}
            </div>
        );
    }
}

export default DropdownContainer;