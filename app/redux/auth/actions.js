import { AsyncStorage } from 'react-native';
import { getToken } from '../../helpers/utility';
import navigationActions from '../../navigation/modules/actions';

const authActons = {
  LOGIN_REQUEST: 'LOGIN_REQUEST',
  LOGOUT: 'LOGOUT',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  INIT_SESSION_STATE: 'INIT_SESSION_STATE',
  LOGIN_ERROR: 'LOGIN_ERROR',
  login: () => ({
    type: authActons.LOGIN_REQUEST,
  }),
  logout: () => ({
    type: authActons.LOGOUT,
  }),
};

export const initSessionState = () => (dispatch) => {
  getToken().then(user => dispatch({
    type: authActons.INIT_SESSION_STATE,
    user,
  }));
};

export const launchApp = () => (dispatch) => {
  getToken().then((token) => {
    if(token) {
      dispatch({
        type: navigationActions.DISPLAY_MAIN_PAGE
      })
    }else{
      dispatch({
        type: navigationActions.DISPLAY_LOGIN
      })
    }
  });
}

export const loginUser = (userEmail, pass) => (dispatch) => {
  // dispatch({
  //   type: authActons.LOGIN_REQUEST,
  // });
  console.log('starting a fetch');
  fetch('http://app.zeeoilgas.com/api/user/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: userEmail,
      password: pass,
    }),
  })
    .then(response => response.json())
    .then((responseJson) => {
      if (responseJson.code === '302') {
        dispatch({
          type: authActons.LOGIN_ERROR,
          payload: responseJson.error_msg,
        });
      } else {
        try {
          AsyncStorage.setItem('user', JSON.stringify(responseJson.data), () => {
            dispatch({
              type: authActons.LOGIN_SUCCESS,
              payload: responseJson.data,
            });
          });
        } catch (error) {
          // Error saving data
        }
      }
      // this.setState({loading:false})
    })
    .catch((error) => {
      console.error(error);
      alert(error);
    });
};

export default authActons;
