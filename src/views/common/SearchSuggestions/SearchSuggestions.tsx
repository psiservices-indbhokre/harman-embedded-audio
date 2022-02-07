import React from 'react';
import { WithTranslation, withTranslation } from 'react-i18next';
import classname from 'classnames';

import styles from './SearchSuggestions.scss';
import coreStyles from '@src/index.scss';

export interface SearchSuggestionsProps extends WithTranslation {
  readonly search: (query: string) => void;
}

function SearchSuggestions(props: SearchSuggestionsProps) {

  const suggestions = [
    { label: props.t('suggestion_1'), onClick: () => props.search(props.t('suggestion_1')) },
    { label: props.t('suggestion_2'), onClick: () => props.search(props.t('suggestion_2')) },
    { label: props.t('suggestion_3'), onClick: () => props.search(props.t('suggestion_3')) }
  ];

  return (
    <div className={styles.suggestionsContainer}>
      <div className={coreStyles.container}>
        <div>
          <div className={classname(coreStyles.fontRegular, styles.suggestionsLabel)}>{props.t('suggestions')}</div>
          {
            suggestions.map((suggestion, index) => (
              <div key={index} className={classname(coreStyles.fontRegular, styles.suggestion)}
                onClick={suggestion.onClick}>{suggestion.label}</div>
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default withTranslation('search')(SearchSuggestions);