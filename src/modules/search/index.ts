import { ActionType, getType, isActionOf, createStandardAction, createAction } from 'typesafe-actions';
import { combineEpics, Epic } from 'redux-observable';
import { filter, flatMap } from 'rxjs/operators';
import { merge, of, from } from 'rxjs';
import { RootAction, RootState } from '../store';
import i18n from '@src/i18n';

import { getNews } from '@src/services/api';
import { actions as newsActions } from '@src/modules/news';

import { searchContent, SearchContentType } from './model';
import { NewsItem } from '../news/models';

interface LocalizedSearchContentType {
  readonly link: string;
  readonly title: string;
  readonly content: string[];
}

const localizedSearchContent: LocalizedSearchContentType[] = searchContent.map((item: SearchContentType) => ({
  link: item.link,
  title: i18n.getResource(i18n.language || i18n.languages[0], item.namespace, item.title),
  content: item.content.map((contentItem: string) => i18n.getResource(i18n.language || i18n.languages[0], item.namespace, contentItem))
})
);

export interface SearchResultItem {
  readonly image?: string;
  readonly title: string;
  readonly content: string;
  readonly link: string;
  readonly external: boolean;
}

export interface SearchState {
  readonly searchResult: SearchResultItem[];
}

const DefaultState: SearchState = {
  searchResult: []
}

export const actions = {
  init: createAction('@search/init'),
  search: createStandardAction('@search/search')<string>(),
  setResult: createStandardAction('@search/setResult')<SearchResultItem[]>()
}

export type SearchAction = ActionType<typeof actions>;

const reducer = (state: SearchState = DefaultState, action: SearchAction) => {
  switch (action.type) {
    case getType(actions.init):
      return { ...state, searchResult: [] };
    case getType(actions.setResult):
      return { ...state, searchResult: action.payload };
    default:
      return state;
  }
};
const searchEpic: Epic<RootAction, RootAction, RootState> = (action$, store$, dependencies) => action$
  .pipe(
    filter(isActionOf(actions.search)),
    flatMap(action => {
      if (!action.payload) {
        return of(actions.setResult([]));
      }
      const searchStr = action.payload.toLocaleLowerCase();
      const newsMapper = (news: NewsItem[]) => news.filter(newsItem => newsItem.title.toLocaleLowerCase().indexOf(searchStr) !== -1 || newsItem.content.toLocaleLowerCase().indexOf(searchStr) !== -1)
        .map(newsItem => ({
          image: `/static/news/${newsItem.image}`,
          title: newsItem.title,
          content: newsItem.content,
          link: newsItem.link,
          external: true
        })
        );
      const matchedPages = localizedSearchContent.filter(item => {
        for (const str of item.content) {
          if (str.toLocaleLowerCase().indexOf(searchStr) !== -1) {
            return true;
          }
        }
        return false;
      }).map(item => {
        let content = '';
        for (const str of item.content) {
          if (str.toLocaleLowerCase().indexOf(searchStr) !== -1) {
            if (str.length > content.length) {
              content = str;
            }
          }
        }
        return {
          title: item.title,
          content,
          link: item.link,
          external: false
        };
      });
      if (store$.value.news.allNews.length > 0) {
        return of(actions.setResult([...newsMapper(store$.value.news.allNews), ...matchedPages]));
      } else {
        return merge(
          of(actions.setResult(matchedPages)),
          getNews().pipe(
            flatMap(news => {
              return from([newsActions.setNews(news), actions.setResult([...newsMapper(news), ...matchedPages])])
            })
          )
        );
      }
    })
  );

export const epics = combineEpics(
  searchEpic
);

export default reducer;