import { routerActions } from 'connected-react-router';
import { matchPath } from 'react-router';

import { PATHS } from './models';

import { history } from '../store';

export const goto = {
  search: (query: string) => navigate(PATHS.SEARCH.replace(':query?', query))
}

export type PathType = keyof typeof PATHS;

const getCurrentPath = () => history.location.pathname;

function getPathType(path: string): PathType | undefined {
  for (const [t, p] of Object.entries(PATHS)) {
    const m = matchPath(path, { path: p });
    if (!!m && m.isExact) {
      return t as PathType;
    }
  }
  return undefined;
}

function navigate(path: string) {
  const curType = getPathType(getCurrentPath());
  const nextType = getPathType(path);

  let replace = false;
  if (curType && nextType && curType === nextType) {
    replace = true;
  }

  return replace ? routerActions.replace(path) : routerActions.push(path);
}