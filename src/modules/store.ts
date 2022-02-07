import { connectRouter, LocationChangeAction, RouterAction, routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { applyMiddleware, combineReducers, compose, createStore, DeepPartial } from 'redux';
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import { StateType } from 'typesafe-actions';

import latestNewsReducer, {
  epics as latestNewsEpics,
  LatestNewsAction
} from './news_latest';
import newsReducer, {
  epics as newsEpics,
  NewsAction
} from './news';
import searchReducer, {
  epics as searchEpics,
  SearchAction
} from './search';

const EPIC_COMPLETED_ACTION_TYPE = '@@EPIC_COMPLETED';

type ReactRouterAction = RouterAction | LocationChangeAction;
interface EpicCompletedAction {
  type: typeof EPIC_COMPLETED_ACTION_TYPE,
  payload: string
};

type AppAction = LatestNewsAction | NewsAction | SearchAction;

export type RootAction =
  | AppAction
  | ReactRouterAction
  | EpicCompletedAction;

export const history = createBrowserHistory({
  basename: process.env.PUBLIC_URL
});

history.listen((location, action) => {
  if ((window as any).piTracker) {
    (window as any).piTracker(window.location.href);
  }
  if ((window as any).ga) {
    (window as any).ga('set', 'page', window.location.pathname);
    (window as any).ga('send', 'pageview');
  }
});

const rootReducer = combineReducers({
  router: connectRouter(history),
  latestNews: latestNewsReducer,
  news: newsReducer,
  search: searchReducer
});

export type RootState = StateType<typeof rootReducer>;

export const rootEpic = combineEpics<RootAction, RootAction, RootState, {}>(
  latestNewsEpics,
  newsEpics,
  searchEpics
);

function configureStore(initialState?: DeepPartial<RootState>) {
  const epicMiddleware = createEpicMiddleware<RootAction, RootAction, RootState, {}>({
    dependencies: {}
  });
  const middlewares = [
    epicMiddleware,
    routerMiddleware(history)
  ];

  const enhancer = compose(
    applyMiddleware(...middlewares)
  );

  const store = createStore(
    rootReducer,
    initialState!,
    enhancer
  );

  epicMiddleware.run(rootEpic);

  return store;
}

export default configureStore({});