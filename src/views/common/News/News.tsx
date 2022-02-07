import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withTranslation, WithTranslation } from 'react-i18next';
import classname from 'classnames';
// import { Link } from 'react-router-dom';
// import Button from '@src/components/CustomButtons/Button.jsx';

import { actions } from '@src/modules/news_latest';
import { RootState } from '@src/modules/store';

import { PATHS } from '@src/modules/navigation/models';

import { NewsItem, mapTypeToKey } from '@src/modules/news/models';
import { NewsItem as NewsItemComponent } from '@src/views/common/NewsItem/NewsItem';
import * as styles from './News.scss';
import * as coreStyles from '@src/index.scss';

export interface NewsProps extends WithTranslation {
  readonly news: NewsItem[];
  readonly getNews: () => any;
}

function News(props: NewsProps) {
  useEffect(() => {
    props.getNews();
  })

  return (
    <div className={styles.container}>
      <div className={coreStyles.container}>
        <h2 className={classname(coreStyles.fontLight, styles.title)}>{props.t('news_section_title')}</h2>
        <div className={styles.news}>
          {
            props.news.map((item, index) => {
              const { type, image, ...rest } = item;
              return <NewsItemComponent t={props.t} key={index} image={`/static/news/${image}`} {...rest} category={props.t(mapTypeToKey(type))} target={ item.link.includes('http') ? '_blanc' : '' } />
            })
          }
        </div>
        {/* <Button color={'Harman'} component={Link} to={PATHS.NEWS}>
          <div className={classname(coreStyles.buttonWhite, coreStyles.fontRegular)}>{props.t('news_section_view_all')}</div>
        </Button> */}
        <a href={PATHS.NEWS} target={'_blank'}>{props.t('news_section_view_all')}</a>
      </div>
    </div>

  );
}

const mapStateToProps = (state: RootState) => ({
  news: state.latestNews.newsList
});
const mapDispatchToProps = {
  getNews: () => actions.getNews.request()
};

const newsContainer = connect(mapStateToProps, mapDispatchToProps)(News);

export default withTranslation('common')(newsContainer);