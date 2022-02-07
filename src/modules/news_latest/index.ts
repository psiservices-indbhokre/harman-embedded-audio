import { ActionType, createAsyncAction, getType, isActionOf } from 'typesafe-actions';
import { combineEpics, Epic } from 'redux-observable';
import { filter, flatMap } from 'rxjs/operators';
import { from, EMPTY } from 'rxjs';
import { RootAction, RootState } from '../store';
import { getNews } from '@src/services/api';
import { actions as newsActions } from '../news';

import { NewsItem } from '../news/models';
import { MainNewsItemIndex } from '../news';

export interface LatestNewsState {
  readonly newsList: NewsItem[];
}

const NewsCount = 3;
const DefaultState: LatestNewsState = {
  newsList: []
}

export const actions = {
  getNews: createAsyncAction('@news_latest/getNews', '@news_latest/getNewsSuccess', '@news_latest/getNewsFailed')<void, NewsItem[], void>()
}

export type LatestNewsAction = ActionType<typeof actions>;

const reducer = (state: LatestNewsState = DefaultState, action: LatestNewsAction) => {
  switch (action.type) {
    case getType(actions.getNews.success):
      return { ...state, newsList: action.payload };
    default:
      return state;
  }
};

const getNewsEpic: Epic<RootAction, RootAction, RootState> = (action$, store$, dependencies) => action$
  .pipe(
    filter(isActionOf(actions.getNews.request)),
    flatMap(action => {
      if (store$.value.latestNews.newsList.length === 0) {
        if (store$.value.news.allNews.length > 0) {
          const newItems = store$.value.news.allNews.filter((item, index) => index !== MainNewsItemIndex)
            .slice(0, NewsCount);
          return from([actions.getNews.success(newItems)]);
        } else {
          return getNews().pipe(
            flatMap(news => {
              if (news && news.length > 0) {
                return from([newsActions.setNews(news), actions.getNews.request()]);
              } else {
                return EMPTY;
              }
            })
          )
        }
      } else {
        return EMPTY;
      }
    })
  );

export const epics = combineEpics(
  getNewsEpic
);

export default reducer;