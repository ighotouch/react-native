import React, { Component } from 'react';
import { View, Image, AsyncStorage } from 'react-native';
import { Container, Text } from 'native-base';
import PropTypes from 'prop-types';
import LoginFormField from '../../../components/loginForm';
import styles from '../styles';

const launcherIcon = require('../../../assets/ic_launcher.png');
const gasStationBackground = require('../../../assets/gas_station.png');

export default class LoginScene extends Component {
  componentDidMount() {
    //AsyncStorage.clear();
   // this.props.loginUser('test', 'terer');
  }

  render() {
    return (
      <Container>
        <Image
          style={styles.container}
          source={gasStationBackground}
        >
          <View style={styles.logoContainer}>
            <Image
              source={launcherIcon}
              style={{ height: 130, width: 130 }}
            />
            <Text style={styles.title}>Zee Oil &amp; Gas</Text>
          </View>
          <LoginFormField navigation={this.props.navigation} loginUser={this.props.loginUser} style={{ width: '75%', borderWidth: 1, marginTop: 221 }} />
        </Image>
      </Container>
    );
  }
}
