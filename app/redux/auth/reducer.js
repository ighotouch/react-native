import { Map } from 'immutable';
import actions from './actions';

const initState = new Map({
  idToken: 'secret token',
  user: {},
});
// initState.merge(getToken()),
export default function authReducer(
  state = initState,
  action,
) {
  switch (action.type) {
    case actions.LOGIN_SUCCESS:
      return state.set('user', action.payload);
    case actions.INIT_SESSION_STATE:
      return state.set('user', action.user);
    case actions.LOGOUT:
      return initState;
    default:
      return state;
  }
}
