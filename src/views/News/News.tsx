import React, { useEffect } from 'react';
import { withTranslation, WithTranslation } from 'react-i18next';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import classname from 'classnames';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

import { NewsItem, NewsItemType, mapTypeToKey } from '@src/modules/news/models';
import styles from './News.scss';
import coreStyles from '@src/index.scss';

import * as youtube from './ico_youtube.png';
import * as linkedin from './ico_linkedin.png';
import arrow from './arrow.png';
import { NewsItem as NewsItemComponent } from '../common/NewsItem/NewsItem';
import { EXTERNAL_PATHS } from '@src/modules/navigation/models';
import { ImageBanner } from '../common/ImageBanner/ImageBanner';
import { TabbedHeader } from '../common/TabbedHeader/TabbedHeader';

export interface NewsProps extends WithTranslation {
  readonly hasMoreNews: boolean;
  readonly news: NewsItem[];
  readonly main?: NewsItem;
  readonly filter?: NewsItemType;

  readonly cleanup: () => any;
  readonly applyFilter: (type?: NewsItemType) => any;
}

function News(props: NewsProps) {

  useEffect(() => {
    props.applyFilter();
    return () => {
      props.cleanup();
    };
  }, []);

  const filters = [
    { label: props.t('filter_all'), onClick: () => props.applyFilter(), isSelected: props.filter === undefined },
    { label: props.t(mapTypeToKey(NewsItemType.PressReleases)), onClick: () => props.applyFilter(NewsItemType.PressReleases), isSelected: props.filter === NewsItemType.PressReleases },
    { label: props.t(mapTypeToKey(NewsItemType.ByLines)), onClick: () => props.applyFilter(NewsItemType.ByLines), isSelected: props.filter === NewsItemType.ByLines },
    { label: props.t(mapTypeToKey(NewsItemType.CaseStudies)), onClick: () => props.applyFilter(NewsItemType.CaseStudies), isSelected: props.filter === NewsItemType.CaseStudies }
  ]

  const animClasses = {
    enter: styles.animEnter,
    enterActive: styles.animEnterActive,
    exit: styles.animExit,
    exitActive: styles.animExitActive
  };

  function filterHandler(index: number) {
    filters[index].onClick();
  }

  return (
    <div className={styles.newsContainer}>
      <Helmet>
        <title>{props.t('title')}</title>
      </Helmet>
      <ImageBanner title={props.main ? props.main.title : ''} image={props.main ? `/static/news/${props.main.image}` : ''}
        contentContainerStyle={styles.imageBannerTitleContainer}
        subtitleElement={(
          <div className={styles.learnMore}>
            <Link to={props.main ? props.main.link : ''} className={coreStyles.fontRegular}>
              <div> {props.t('learn_more')}</div>
              <img src={arrow} className={styles.arrow} />
            </Link>
          </div>
        )} />
      <div className={classname(coreStyles.container, styles.heightFix)}>
        <div className={styles.filters}>
          <TabbedHeader tabs={filters.map(filter => filter.label)} onTabChanged={filterHandler}
            tabStyle={classname(coreStyles.fontRegular, styles.filter)} activeTabStyle={styles.activeFilter}
            underlineStyle={styles.underline} lineStyle={styles.line} containerStyle={styles.tabsHeader} tabElement='div' /> 
        </div>
        <div className={styles.newsItems}>
          <TransitionGroup component={null}>
            {
              props.news.map(newsItem => {
                const { type, image, ...rest } = newsItem;
                return (
                  <CSSTransition key={newsItem.link} classNames={animClasses} timeout={500}>
                    <NewsItemComponent t={props.t} category={props.t(mapTypeToKey(type))} image={`/static/news/${image}`} target={ newsItem.link.includes('http') ? '_blanc' : '' } {...rest} />
                  </CSSTransition>
                )
              })
            }
          </TransitionGroup>
        </div>
        {
          // props.hasMoreNews &&
          // <Button color={'Harman'} className={styles.moreNews} onClick={props.loadMore}>{props.t('more_news')}</Button>
        }
      </div>
      <div className={styles.social}>
        <div className={styles.socialTitle}>{props.t('social_title')}</div>
        <div className={styles.socialSubTitle}>{props.t('social_sub_title')}</div>
        <div className={styles.socialLinks}>
          <a href={EXTERNAL_PATHS.YOUTUBE} target={'_blank'}>
            <img src={youtube} className={styles.youtube} />
          </a>
          <a href={EXTERNAL_PATHS.LINKEDIN} target={'_blank'}>
            <img src={linkedin} className={styles.linkedin} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default withTranslation('news')(News);