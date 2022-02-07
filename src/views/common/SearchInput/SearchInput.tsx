import React, { useRef, useEffect } from 'react';
import { withTranslation, WithTranslation } from 'react-i18next';
import classname from 'classnames';

import styles from './SearchInput.scss';
import coreStyles from '@src/index.scss';

import close from './close.png';

interface SearchInputProps extends WithTranslation {
  readonly query?: string;
  readonly onClose?: () => void;
  readonly search: (query: string) => void;
}

function SearchInput(props: SearchInputProps) {
  const input = useRef<HTMLInputElement>(null);
  useEffect(() => {
    input.current!.value = props.query || '';
  }, [props.query]);

  function onKeyUp(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === 'Enter' && input.current!.value.length > 0) {
      props.search(input.current!.value);
      event.preventDefault();
    }
  }

  return (
    <div className={styles.inputContainer}>
      <div className={coreStyles.container}>
        <div>
          <input placeholder={props.t('placeholder')} className={classname(coreStyles.fontRegular, styles.input)}
            ref={input} onKeyUp={onKeyUp} type='search' />
          {props.onClose && <img src={close} onClick={props.onClose} />}
        </div>
      </div>
    </div>
  );
}

export default withTranslation('search')(SearchInput);