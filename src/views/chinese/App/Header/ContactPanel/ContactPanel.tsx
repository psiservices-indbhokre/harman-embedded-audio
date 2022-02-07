import React from 'react';
import { withTranslation, WithTranslation } from 'react-i18next';
import classname from 'classnames';
import ClickAwayListener from "@material-ui/core/ClickAwayListener";

import * as styles from './ContactPanel.scss';
import { Phone } from './Phone/Phone';
import { Mail } from './Mail/Mail';

interface ContactPanelState {
  opened: boolean
}

class ContactPanel extends React.Component<WithTranslation, ContactPanelState> {
  
  constructor(props:WithTranslation) {
    super(props)
    this.state = {opened:false};
    this.setClosed = this.setClosed.bind(this);
    this.switchState = this.switchState.bind(this);
  }

  private setClosed() {
    this.setState({opened:false });
  }

  private switchState() {
    this.setState({opened:!this.state.opened });
  }
  
  public render(){
    return (
      <ClickAwayListener onClickAway={this.setClosed}>
        <div className={classname(styles.container, this.state.opened?styles.opened:"")}>
          <div className={styles.phoneButton} onClick={this.switchState} >
            <Phone color='#ffffff' style={styles.iconStyle}/>
          </div>
          <div className={styles.phoneNumber} >+86 (755) 8634-3608</div>
          <div className={styles.mailButton} onClick={this.switchState} >
            <Mail color='#ffffff' style={styles.iconStyle}/>
          </div>
          <a className={styles.mailAddress} href="mailto:solutions@harman.com">Solutions@harman.com</a>
        </div>
      </ClickAwayListener>
    )
  }
}

export default withTranslation('home')(ContactPanel);