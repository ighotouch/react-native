import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';

import SlashScene from '../../scenes/splash/containers/splashContainer';
import LoginScene from '../../scenes/login/containers/loginContainer';
import RegistrationScene from '../../scenes/registration/components/registration';
import MainScene from '../../scenes/main/components/mainSceneDrawerNavigation';
import NetworkErrorScene from '../../scenes/networkErrorScene/components/networkError';

export const AppNavigator = StackNavigator({
  Splash: {
    screen: SlashScene,
    navigationOptions: {
      headerTitle: 'Home',
      header: null,
    },
  },
  Login: {
    screen: LoginScene,
    navigationOptions: {
      headerTitle: 'Home',
      header: null,
    },
  },
  Registration: {
    screen: RegistrationScene,
    navigationOptions: {
      headerTitle: 'Home',
      header: null,
    },
  },
  Main: {
    screen: MainScene,
  },
  Internet: {
    screen: NetworkErrorScene,
  },
}, { initialRouteName: 'Login', headerMode: 'none' });

const AppWithNavigationState = ({ dispatch, nav }) => (
  <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
);

AppWithNavigationState.propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  nav: state.NavigationReducer.nav,
});

export default connect(mapStateToProps)(AppWithNavigationState);
