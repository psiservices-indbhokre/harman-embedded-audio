import { connect } from 'react-redux';
import { goto } from '@src/modules/navigation/navigation'; 

import Search from './Search';

const mapDispatchToProps = {
  search: (query: string) => goto.search(query)
};
export default connect(null, mapDispatchToProps)(Search)