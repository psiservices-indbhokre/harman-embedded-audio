import { connect } from 'react-redux';

import Search from './Search';
import { RootState } from '@src/modules/store';
import { goto } from '@src/modules/navigation/navigation';
import { actions } from '@src/modules/search';

const mapStateToProps = (state: RootState) => ({
  searchResults: state.search.searchResult
});
const mapDispatchToProps = {
  init: () => actions.init(),
  search: (query: string) => goto.search(query),
  performSearch: (query: string) => actions.search(query)
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);