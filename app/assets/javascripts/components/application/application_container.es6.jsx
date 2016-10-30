import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actions from '../../actions/test.es6';
import Layout from './layout.es6.jsx';

function mapStateToProps(state) {
  return {
    test: state.test
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch)
}

const ApplicationContainer = connect(mapStateToProps, mapDispatchToProps)(Layout);

export default ApplicationContainer;
