import React, { Component } from 'react';
import { View, Image, Dimensions } from 'react-native';
import { Container, Text, Button, Icon, Thumbnail } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import GridButton from '../../../components/gridNavButton';
import styles from './styles';

const slideOne = require('../../../assets/slide_one.png');
const redLogo = require('../../../assets/red_logo.png');
const orderIcon = require('../../../assets/ic_order.png');
const tankIcon = require('../../../assets/ic_tank.png');
const walletIcon = require('../../../assets/ic_wallet.png');
const energyManagerIcon = require('../../../assets/ic_energy_manager.png');

export default class MainScene extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
    return (
      <Container style={styles.container}>
        <View style={styles.statusBar} />
        <Grid>
          <Row style={{ flex: 4.7 }} >
            <View >
              <Image style={{ flex: 1 }} source={slideOne}>
                <View style={{ backgroundColor: '#00000000', flexDirection: 'row' }}>
                  <Button
                    style={styles.drawerButton}
                    transparent
                    onPress={() => this.props.navigation.navigate("DrawerOpen")}
                  >
                    <Icon name="menu" style={{ color: '#d30021' }} />
                  </Button>
                  <View style={[styles.mainStatusBarTextContainer]}>
                    <Text style={[styles.redText, styles.title]}>Welcome Matthew</Text>
                    <Text style={[styles.redText, styles.subtitle]}>Valued customer  since Aug, 2017</Text>
                  </View>
                  <View style={{ width: 10 }} />
                </View>
                <View style={[styles.sliderLogoContainer, { width: Dimensions.get('window').width }]}>
                  <Image style={styles.sliderLogo} maintainAspectRatio ={true} source={redLogo} resizeMode ='contain' />
                </View>
              </Image>
            </View>
          </Row>
          <View style={styles.redhorizontalLine} />
          <Row style={{ flex: 3.7 }} >
            <Col style={{ flex: 1 }}>
              <Row style={[styles.thumbnailBox, { flex: 1 }]} >
                <GridButton icon={orderIcon} title="New Order" subtitle="Place order" navigation={this.props.navigation} />
              </Row>
              <Row style={[styles.thumbnailBox, { flex: 1, borderTopColor: '#EBEBEB', borderTopWidth: 1 }]}>
                <GridButton icon={tankIcon} title="Tank Meter" subtitle="Monitor your tank" navigation={this.props.navigation} />
              </Row>
            </Col>
            <Col style={{ flex: 1, borderColor: '#EBEBEB', borderLeftWidth: 1 }}>
              <Row style={[styles.thumbnailBox, { flex: 1 }]}>
                <GridButton icon={walletIcon} title="Mobile Wallet" subtitle="fund wallet" navigation={this.props.navigation} />
              </Row>
              <Row style={[styles.thumbnailBox, { flex: 1, borderTopColor: '#EBEBEB', borderTopWidth: 1 }]}>
                <GridButton icon={energyManagerIcon} title="Energy Manager" subtitle="Usage analysis" navigation={this.props.navigation} />
              </Row>
            </Col>
          </Row>
        </Grid>
      </Container>
    );
  }
}
