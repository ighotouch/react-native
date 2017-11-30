import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Login from '../components/login';
import { loginUser } from '../../../redux/auth/actions';
import { toggleNetworkState } from '../../../redux/app/actions';
import navigationActions from '../../../navigation/modules/actions';

const mapStateToProps = (state) => {
  const isConnected = state.AppReducer.get('isConnected');
  const user = state.AuthReducer.get('user');
  return {
    isConnected,
    user,
  };
};

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loginUser: bindActionCreators(loginUser, dispatch),
      toggleNetworkState: bindActionCreators(toggleNetworkState, dispatch),
      navigationActions: bindActionCreators(navigationActions, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
