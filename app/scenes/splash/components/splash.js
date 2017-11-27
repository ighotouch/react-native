import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, Image } from 'react-native';
import styles from '../styles';

const splashLogo = require('../../../assets/splash_logo.png');
const bg = require('../../../assets/red_bk.png');

export default class SplashScene extends Component {
  componentDidMount() {
    //this.props.actions.getInitSessionState();
    setTimeout(() => {
      this.props.actions.launchApp(); 
    }, 3000);
    
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.props.idToken != nextProps.idToken;
  }
  componentDidUpdate() {
      
    
  }
  launchApp() {
    if (this.props.user.token !== undefined) {
      // display main scene
      console.log(this.props.navigationActions());
      this.props.launchApp();
      return;
    }
    this.props.actions.launchLoginScene.displayLoginPage();
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
  user: PropTypes.objectOf(PropTypes.any).isRequired,
};

