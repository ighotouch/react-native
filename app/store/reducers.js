import { combineReducers } from 'redux';
import NavigationReducer from '../navigation/modules/reducer';
import AppReducer from '../redux/app/reducer';
import AuthReducer from '../redux/auth/reducer';


export default combineReducers({
  NavigationReducer,
  AppReducer,
  AuthReducer,
});


// - App: isBusy
// - Navigation
// - Auth : isLogin, token, user ( loginUser)
// - Products: {}
// - Payment:
// - Order:
// - Addresse
