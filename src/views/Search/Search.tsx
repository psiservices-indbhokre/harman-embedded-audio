import React, { useEffect } from 'react';
import { withTranslation, WithTranslation } from 'react-i18next';
import { withRouter, RouteComponentProps } from 'react-router';
import classname from 'classnames';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import coreStyles from '@src/index.scss';
import styles from './Search.scss';

import SearchInput from '../common/SearchInput/SearchInput';
import SearchSuggestions from '../common/SearchSuggestions/SearchSuggestions';
import { SearchResultItem } from '@src/modules/search';

import arrowExternal from './arrow_external.png';
import arrow from './arrow.png';

export interface SearchProps extends WithTranslation, RouteComponentProps<{ query: string }> {
  readonly searchResults: SearchResultItem[];

  readonly init: () => void;
  readonly search: (query: string) => void;
  readonly performSearch: (query: string) => void;
}

function Search(props: SearchProps) {

  useEffect(() => {
    props.init();
  }, []);
  useEffect(() => {
    props.performSearch(props.match.params.query);
  }, [props.match.params.query]);

  function highlight(text: string) {
    const reg = new RegExp(props.match.params.query, 'gi');
    return text.replace(reg, `<span class='${styles.highlight}'>$&</span>`)
  }

  return (
    <React.Fragment>
      <Helmet>
        <title>{props.t('title')}</title>
      </Helmet>
      <SearchInput search={props.search} query={props.match.params.query} />
      {
        props.searchResults.length === 0 &&
        <React.Fragment>
          <div className={styles.notFoundContainer}>
            <div className={coreStyles.container}>
              <div>
                <div className={classname(coreStyles.fontRegular, styles.notFound, styles.text)}>{props.t('not_found')}</div>
                <div className={styles.separator} />
              </div>
            </div>
          </div>
          <SearchSuggestions search={props.search} />
        </React.Fragment>
      }
      {
        props.searchResults.length > 0 &&
        <React.Fragment>
          <div className={styles.resultsContainer}>
            <div className={coreStyles.container}>
              <div>
                <div className={classname(coreStyles.fontRegular, styles.resultsCount, styles.text)}>
                  {props.t('results_count', { count: props.searchResults.length })}
                </div>
                {
                  props.searchResults.map((searchItem, index) => {
                    return (
                      <div key={index} className={styles.searchItem}>
                        {searchItem.image && <img src={searchItem.image} />}
                        <div className={styles.searchItemContent}>
                          <div className={classname(coreStyles.fontRegular, styles.searchItemTitle)}
                            dangerouslySetInnerHTML={{ __html: highlight(searchItem.title) }} />
                          <div className={classname(coreStyles.fontRegular, styles.searchItemText)}
                            dangerouslySetInnerHTML={{ __html: highlight(searchItem.content) }} />
                          {searchItem.external && <a href={searchItem.link} target='_blank'><img src={arrowExternal} /></a>}
                          {!searchItem.external && <Link to={searchItem.link}><img src={arrow} /></Link>}
                        </div>
                      </div>
                    );
                  })
                }
              </div>
            </div>
          </div>
        </React.Fragment>
      }
    </React.Fragment>
  );
}

export default withTranslation('search')(withRouter(Search));