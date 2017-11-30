import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Text } from 'native-base';
import PropTypes from 'prop-types';
import styles from '../styles';

const networkIcon = require('../../../assets/ic_network.png');

export default class LoginScene extends Component {
  componentDidMount() {
    console.log(this.props.isConnected);
  }

  componentDidUpdate() {
    console.log(this.props.isConnected);
    if (this.props.isConnected) {
      this.props.actions.navigationActions.back();
    }
  }

  render() {
    return (
      <Container
        style={styles.container}
      >
        <Image
          source={networkIcon}
          style={styles.logo}
        />

        <Text style={styles.text}>
            No internet connection!!
        </Text>
      </Container>
    );
  }
}
