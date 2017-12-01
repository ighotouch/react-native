import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, Image } from 'react-native';
import styles from '../styles';

const splashLogo = require('../../../assets/splash_logo.png');
const bg = require('../../../assets/red_bk.png');

export default class SplashScene extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
    };
  }
  componentDidMount() {
    console.log('did mount');
    this.props.actions.getInitSessionState();
  }

  shouldComponentUpdate(nextProps) {
    return this.props.user !== nextProps.user;
  }
  componentDidUpdate() {
    console.log('update');
    setTimeout(() => {
      this.launchApp();
    }, 3000);
  }

  launchApp() {
    this.setState({
      user: JSON.parse(this.props.user),
    });

    console.log(this.state.user);
    if (this.state.user.token !== undefined) {
      // display main scene
      console.log('user is logged in');
      this.props.actions.navigationActions.displayMainPage();
      return;
    }
    this.props.actions.navigationActions.displayLoginPage();
  }
  render() {
    return (
      <Image
        style={styles.container}
        source={bg}
      >
        <Image
          source={splashLogo}
          style={styles.logo}
        />

        <Text style={styles.paragraph}>
            Smart Energy Solutions
        </Text>

      </Image>
    );
  }
}

SplashScene.propTypes = {
  actions: PropTypes.objectOf(PropTypes.any).isRequired,
 // user: PropTypes.objectOf(PropTypes.any).isRequired,
};

