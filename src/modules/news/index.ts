import { ActionType, getType, isActionOf, createStandardAction } from 'typesafe-actions';
import { combineEpics, Epic } from 'redux-observable';
import { filter, mapTo, flatMap } from 'rxjs/operators';
import { RootAction, RootState } from '../store';
import { getNews } from '@src/services/api';

import { NewsItem, NewsItemType } from './models';
import { from, of, EMPTY } from 'rxjs';

export interface NewsState {
  readonly allNews: NewsItem[];
  readonly filteredNews: NewsItem[];
  readonly hasMoreNews: boolean;
  readonly filter?: NewsItemType;
  readonly main: NewsItem | null;
}

export const MainNewsItemIndex = 0;
const DefaultState: NewsState = {
  allNews: [],
  filteredNews: [],
  hasMoreNews: false,
  main: null
}

export const actions = {
  setNews: createStandardAction('@news/setNews')<NewsItem[]>(),
  setHasMoreNews: createStandardAction('@news/setHasMoreNews')<boolean>(),
  filter: createStandardAction('@news/filter')<NewsItemType | undefined>(),
  setFilteredNews: createStandardAction('@news/setFilteredNews')<NewsItem[]>(),
  cleanup: createStandardAction('@news/cleanup')()
}

export type NewsAction = ActionType<typeof actions>;

const reducer = (state: NewsState = DefaultState, action: NewsAction) => {
  switch (action.type) {
    case getType(actions.cleanup):
      return { ...state, filteredNews: [], filter: undefined };
    case getType(actions.setFilteredNews):
      return { ...state, filteredNews: action.payload };
    case getType(actions.setNews):
      return { ...state, allNews: action.payload, main: action.payload[MainNewsItemIndex] || null };
    case getType(actions.setHasMoreNews):
      return { ...state, hasMoreNews: action.payload };
    case getType(actions.filter):
      return { ...state, filter: action.payload };
    default:
      return state;
  }
};

const setNewsEpic: Epic<RootAction, RootAction, RootState> = (action$, store$, dependencies) => action$
  .pipe(
    filter(isActionOf(actions.setNews)),
    mapTo(actions.filter(store$.value.news.filter))
  );

const filterEpic: Epic<RootAction, RootAction, RootState> = (action$, store$, dependencies) => action$
  .pipe(
    filter(isActionOf(actions.filter)),
    flatMap(action => {
      if (store$.value.news.allNews.length > 0) {
        return from([actions.setFilteredNews(store$.value.news.allNews.filter((item, index) =>
          index !== MainNewsItemIndex && (action.payload === undefined || action.payload === item.type)))]);
      } else {
        return getNews().pipe(
          flatMap(news => {
            if (news && news.length > 0) {
              return of(actions.setNews(news));
            } else {
              return EMPTY;
            }
          })
        );
      }
    })
  );

export const epics = combineEpics(
  setNewsEpic,
  filterEpic
);

export default reducer;