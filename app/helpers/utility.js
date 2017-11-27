import { Map } from 'immutable';
import { AsyncStorage } from 'react-native';

export function clearToken() {
  // localStorage.removeItem('id_token');
}
export function getToken() {
  try {
    const idToken = AsyncStorage.getItem('token');
    return idToken;
  } catch (err) {
    clearToken();
    return new Map();
  }
}

export function setToken($token) {
  try {
    AsyncStorage.setItem('@MySuperStore:key', 'I like to save it.');
  } catch (error) {
    // Error saving data
  }
}
