import React, { Component } from 'react';
import { View, StatusBar, Image } from 'react-native';
import { Container, Text, Button, Header, Left, Right, Title, Icon, Body } from 'native-base';
import styles from '../styles';
import Registration from '../../../components/registrationForm';

const bg = require('../../../assets/gas_station.png');

export default props => (
  <Container>
    <StatusBar style={styles.statusBar} />
    <Header style={{ backgroundColor: '#fff' }}>
      <Left>
        <Button
          small
          style={styles.leftButton}
          transparent
          onPress={() => props.navigation.navigate("Login")}
        >
          <Icon small name="arrow-back" style={{ fontSize: 18, color: '#d30021' }} />
        </Button>
      </Left>
      <Body>
        <Text style={styles.title}>Registration</Text>
      </Body>
      <Right>
        <Button transparent title="Info"><Text style={styles.submitButton}>Submit</Text></Button>
      </Right>
    </Header>
    <Image
      style={styles.container}
      source={bg}
    >
      <Registration navigation={() => props.navigation} style={{width: '75%', borderWidth: 1, marginTop:221}}/>
    </Image>
  </Container>
);

