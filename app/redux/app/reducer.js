import { Map } from 'immutable';
import actions from './actions';


const initState = new Map({
  busy: false,
  isConnected: true,
});

export default function AppReducer(state = initState, action) {
  switch (action.type) {
    case actions.BUSY_CHANGE:
      return state.set('busy', !state.get('busy'));
    case actions.TOGGLE_NETWORK_STATE_TO_AVAILABLE:
      return state.set('isConnected', true);
    case actions.TOGGLE_NETWORK_STATE_TO_UNAVAILABLE:
      return state.set('isConnected', false);
    default:
      return state;
  }
}
