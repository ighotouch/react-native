import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Splash from '../components/splash';
import { initSessionState } from '../../../redux/auth/actions';
import { launchApp } from '../../../redux/auth/actions';
import navigationActions from '../../../navigation/modules/actions';

console.log(initSessionState);
const mapStateToProps = (state) => {
  const user = state.AuthReducer.get('user');
  const idToken = state.AuthReducer.get('idToken');
  return {
    user,
    idToken,
  };
};

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getInitSessionState: bindActionCreators(initSessionState, dispatch),
      launchApp: bindActionCreators(launchApp, dispatch),
      launchLoginScene: bindActionCreators(navigationActions, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Splash);
