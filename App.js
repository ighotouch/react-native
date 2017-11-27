import React from 'react';
import { Provider } from 'react-redux';
import createStore from './app/store';
import AppNavigation from './app/navigation/containers/navigationContainer';


const initialState = window._INITIAL_STATE_;
const store = createStore(initialState);


export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isReady: false,
      fontLoaded:false
    };
  }

  async componentDidMount() {
    await Expo.Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    });

    this.setState({ fontLoaded: true });
  }

  render() {
    return (
      <Provider store={store}>
        <AppNavigation />
      </Provider>
    );
  }
}

