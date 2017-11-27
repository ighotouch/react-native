import React, { Component } from 'react';
import {
  Content,
  Text,
  List,
  ListItem,
  Container,
  Left,
  Right,
  Badge,
  View,
} from 'native-base';
import { Constants } from 'expo';
import { Image, StyleSheet } from 'react-native';

const orderWhiteIcon = require('../assets/ic_order_white.png');
const walletWhiteIcon = require('../assets/ic_wallet_white.png');
const nairaIcon = require('../assets/naira.png');
const tankWhiteIcon = require('../assets/ic_tank_white.png');
const energyManagerWhiteIcon = require('../assets/ic_energy_manager_white.png');
const loyaltyIcon = require('../assets/ic_loyalty.png');
const orderHistoryIcon = require('../assets/ic_order_history.png');
const profileIcon = require('../assets/ic_profile.png');
const enquiriesIcon = require('../assets/enquiries.png');
const redBk = require('../assets/red_bk.png');

const datas = [
  {
    name: 'Place Order',
    route: 'Order',
    icon: orderWhiteIcon,
    bg: '#C5F442',
  },
  {
    name: 'Wallet',
    route: 'Wallet',
    icon: walletWhiteIcon,
    bg: '#C5F442',
  },
  {
    name: 'Current Rate',
    route: 'Rate',
    icon: nairaIcon,
    bg: '#477EEA',
    types: '8',
  },
  {
    name: 'Tank Meter',
    route: 'Footer',
    icon: tankWhiteIcon,
    bg: '#DA4437',
    types: '4',
  },
  {
    name: 'Energy Manager',
    route: 'NHBadge',
    icon: energyManagerWhiteIcon,
    bg: '#4DCAE0',
  },
  {
    name: 'Loyalty Reward',
    route: 'NHButton',
    icon: loyaltyIcon,
    bg: '#1EBC7C',
    types: '9',
  },
  {
    name: 'Order History',
    route: 'NHCard',
    icon: orderHistoryIcon,
    bg: '#B89EF5',
    types: '5',
  },
  {
    name: 'Account Profile',
    route: 'NHCheckbox',
    icon: profileIcon,
    bg: '#EB6B23',
  },
  {
    name: 'Contact Us',
    route: 'Contact',
    icon: enquiriesIcon,
    bg: '#3591FA',
    types: '2',
  },
];

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    height: Constants.statusBarHeight,
  },
  text: {
    color: '#fff',
    fontSize: 14,
    backgroundColor: '#00000000',
  },
  textBlack: {
    color: '#747373',
    fontSize: 14,
    backgroundColor: '#00000000',
  },
  menuHeader: {
    paddingTop: 10,
    paddingLeft: 20,
    paddingBottom: 5,
  },
  menuHeaderText: {
    color: '#fff',
    fontSize: 19,
    fontWeight: 'bold',
  },
  menuSubTitle: {
    fontSize: 13,
    color: '#fff',
  },
  horizontalLine: {
    height: 1,
    backgroundColor: '#fff',
    marginBottom: 10,
  },
  redhorizontalLine: {
    height: 1.5,
    backgroundColor: '#d30021',
  },
  statusBar: {
    backgroundColor: '#000',
    height: Constants.statusBarHeight,
  },
  sliderLogo: {
    width: 300,
  },
  sliderLogoContainer: {
    alignItems: 'center',
  },
  redText: {
    color: '#d30021',
  },
  darkRed: {
    color: '#b70000',
    backgroundColor: '#00000000',
  },
  mainStatusBarTextContainer: {
    paddingTop: 5,
  },
  title: {
    fontSize: 20,
  },
  subtitle: {
    fontSize: 15,
  },
  thumbnailBox: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageIcon: {
    marginBottom: 10,
  },
  image: {
    width: 20,
    height: 20,
  },
  ListItem: {
    backgroundColor: '#00000000',
  },
});
export default class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <Container style={styles.container}>
        <View style={styles.statusBar} />
        <Content bounces={false} >
          <Image
            style={{
            flex: 1,
            }}
            source={redBk}
          >
            <View style={styles.menuHeader}>
              <Text style={styles.menuHeaderText}>MobileZee</Text>
              <Text style={styles.menuSubTitle}>Smart Energy  Solutions</Text>
            </View>
            <View style={styles.horizontalLine} />
            <List
              dataArray={datas}
              renderRow={data => (
                <ListItem
                  style={styles.ListItem}
                  button
                  noBorder
                  onPress={() => this.props.navigation.navigate(data.route)}
                >
                  <Left>
                    <Image
                      active
                      source={data.icon}
                      style={styles.image}
                    />
                    <Text style={styles.text}>
                      {data.name}
                    </Text>
                  </Left>
                  {data.types &&
                  <Right style={{ flex: 1 }}>
                    <Badge
                      style={{
                      borderRadius: 3,
                      height: 25,
                      width: 72,
                      backgroundColor: data.bg,
                      }}
                    >
                      <Text style={styles.badgeText}>{`${data.types} Types`}</Text>
                    </Badge>
                  </Right>}
                </ListItem>
              )}
            />
          </Image>
        </Content>
      </Container>
    );
  }
}
