import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Splash from '../components/splash';
import { initSessionState, launchApp } from '../../../redux/auth/actions';
import { toggleNetworkState } from '../../../redux/app/actions';
import navigationActions from '../../../navigation/modules/actions';

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
      toggleNetworkState: bindActionCreators(toggleNetworkState, dispatch),
      navigationActions: bindActionCreators(navigationActions, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Splash);
