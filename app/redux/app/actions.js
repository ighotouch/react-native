import {StyleSheet,Alert, NetInfo } from 'react-native';

const appActons = {
  BUSY_CHANGE: 'BUSY_CHANGE',
  TOGGLE_NETWORK_STATE: 'TOGGLE_NETWORK_STATE',
  toggleBusyState: () => ({
    type: appActons.BUSY_CHANGE,
  }),
};

export const toggleNetworkState = () => (dispatch) => {
  NetInfo.addEventListener('connectionChange', (isConnected) => {
    console.log(isConnected);
    alert('netwk changed'+JSON.stringify(isConnected));
  });
};

export default appActons;
