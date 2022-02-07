import React from 'react';
import { EXTERNAL_PATHS } from '@src/modules/navigation/models';
import { withTranslation, WithTranslation } from 'react-i18next';

import styles from './BlogsFooter.scss';


function Footer(props: WithTranslation) {
	return (
    <div className={styles.footerContainer}>
			<footer>
				<div className={styles.privacy}>
            <div>
              <a href={EXTERNAL_PATHS.COOKIES} target={'_blank'}>{props.t('cookies')}</a><span>|</span>
              <a href={EXTERNAL_PATHS.PRIVACY} target={'_blank'}>{props.t('privacy_policy')}</a><span>|</span>
              <a href={EXTERNAL_PATHS.TERMS_OF_USE} target={'_blank'}>{props.t('terms_of_use')}</a>
            </div>
            <span className={styles.copyright}>{props.t('copyright')}</span>		
				</div>
			</footer>			
    </div>
	)
}

export default withTranslation('footer')(Footer);