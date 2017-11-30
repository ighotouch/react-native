import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import NetworkErrorScene from '../components/networkError';
import navigationActions from '../../../navigation/modules/actions';

const mapStateToProps = (state) => {
  const isConnected = state.AppReducer.get('isConnected');
  return {
    isConnected,
  };
};

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      navigationActions: bindActionCreators(navigationActions, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NetworkErrorScene);
