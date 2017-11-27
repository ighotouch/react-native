import { combineReducers } from 'redux';
import { NavigationActions } from 'react-navigation';
import actionConstants from './actions';
import { AppNavigator } from '../containers/navigationContainer';

// Start with two routes: The Main screen, with the Splash screen on top.
const firstAction = AppNavigator.router.getActionForPathAndParams('Splash');
const initialNavState = AppNavigator.router.getStateForAction(firstAction);

function nav(state = initialNavState, action) {
  let nextState;
  switch (action.type) {
    case 'Splash':
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'Splash' }),
        state,
      );
      break;
    case actionConstants.DISPLAY_LOGIN:
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'Registration' }),
        state,
      );
      break;
    case 'Logout':
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'Login' }),
        state,
      );
      break;
    case actionConstants.DISPLAY_SEARCH_PAGE:
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'Search' }),
        state,
      );
      break;
    default:
      nextState = AppNavigator.router.getStateForAction(action, state);
      break;
  }

  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
}

const initialAuthState = { isLoggedIn: false };


// auth reducer should not be here ever
function auth(state = initialAuthState, action) {
  switch (action.type) {
    case 'Login':
      return { ...state, isLoggedIn: true };
    case 'Logout':
      return { ...state, isLoggedIn: false };
    default:
      return state;
  }
}

const AppReducer = combineReducers({
  nav,
  auth,
});

export default AppReducer;
