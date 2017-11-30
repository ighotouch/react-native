import { NetInfo } from 'react-native';
import navigationActions from '../../navigation/modules/actions';

const appActons = {
  BUSY_CHANGE: 'BUSY_CHANGE',
  TOGGLE_NETWORK_STATE_TO_UNAVAILABLE: 'TOGGLE_NETWORK_STATE_TO_UNAVAILABLE',
  TOGGLE_NETWORK_STATE_TO_AVAILABLE: 'TOGGLE_NETWORK_STATE_TO_AVAILABLE',
  toggleBusyState: () => ({
    type: appActons.BUSY_CHANGE,
  }),
};

export const toggleNetworkState = () => (dispatch) => {
  NetInfo.addEventListener('connectionChange', (isConnected) => {
    if (isConnected.type === 'none' || isConnected.type === 'unknown') {
      console.log('network unavailable');
      dispatch({
        type: appActons.TOGGLE_NETWORK_STATE_TO_UNAVAILABLE,
      });

      // dispatch(navigationActions.displayInternetErrorPage());
      return;
    }
    console.log('network available');
    dispatch({
      type: appActons.TOGGLE_NETWORK_STATE_TO_AVAILABLE,
    });

    // dispatch(navigationActions.back());
  });
};

export default appActons;
