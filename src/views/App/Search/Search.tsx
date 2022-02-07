import React, { useState, useRef } from 'react';
import { withTranslation, WithTranslation } from 'react-i18next';

import Button from '@src/components/CustomButtons/Button.jsx';
import popoverStyles from "@src/assets/jss/material-kit-pro-react/popoverStyles.jsx";

import { Hidden, withStyles } from '@material-ui/core';
import IconButton from "@material-ui/core/IconButton";
import Popover from "@material-ui/core/Popover";
import { StyleRules } from '@material-ui/core/styles';

import searchImg from './ico_search.png';

import styles from './Search.scss';
import SearchInput from '@src/views/common/SearchInput/SearchInput';
import SearchSuggestions from '@src/views/common/SearchSuggestions/SearchSuggestions';

export interface SearchProps extends WithTranslation {
  readonly search: (query: string) => void;
}

function Search(props: SearchProps) {
  const [opened, setOpened] = useState(false);
  const searchButton = useRef();

  function openSearchPopover() {
    setOpened(true);
  }

  function closeSearchPopover() {
    setOpened(false);
  }

  function search(query: string) {
    console.log(`search for ${query}`);
    closeSearchPopover();
    props.search(query);
  }

  return (
    <React.Fragment>
      <Hidden smDown>
        <IconButton onClick={openSearchPopover} buttonRef={searchButton}>
          <img src={searchImg} />
        </IconButton>
      </Hidden>
      <Hidden mdUp>
        <Button color="transparent" onClick={openSearchPopover} buttonRef={searchButton}>
          <img src={searchImg} />
        </Button>
      </Hidden>
      <Popover open={opened} anchorEl={searchButton.current}
        classes={{ paper: styles.container }}
        onClose={closeSearchPopover} elevation={0}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        transformOrigin={{ vertical: "top", horizontal: "center" }}>
        <SearchInput onClose={closeSearchPopover} search={search} />
        <SearchSuggestions search={search} />
      </Popover>
    </React.Fragment>
  );
}

export default withTranslation('search')(withStyles(popoverStyles as StyleRules)(Search));