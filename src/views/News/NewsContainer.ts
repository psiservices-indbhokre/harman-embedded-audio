import { connect } from 'react-redux';
import { RootState } from '@src/modules/store';
import { actions } from '@src/modules/news';
import News from './News';
import { NewsItemType } from '@src/modules/news/models';

const mapStateToProps = (state: RootState) => ({
  hasMoreNews: state.news.hasMoreNews,
  news: state.news.filteredNews,
  filter: state.news.filter,
  main: state.news.main
});

export default connect(mapStateToProps, {
  cleanup: () => actions.cleanup(),
  applyFilter: (type?: NewsItemType) => actions.filter(type)
})(News);