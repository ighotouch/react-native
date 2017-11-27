import actions from './actions';

const initState = {
  busy: false,
};

export default function AppReducer(state = initState, action) {
  switch (action.type) {
    case actions.BUSY_CHANGE:
      return state.set('busy', !state.get('busy'));
    default:
      return state;
  }
}
