import React, {Component} from 'react';
import {StyleSheet,Alert, NetInfo } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  Input,
  Thumbnail,
  View,
  Item,
  Container,
} from 'native-base';

import { Constants, Facebook } from 'expo';


const styles = StyleSheet.create({
  inputGroup: {
    backgroundColor: '#f7f6f6',
    borderColor: '#fff',
    height: 45,
    marginBottom: 8,
  },
  thumbnail: {
    width: 66,
    height: 44,
  },
  input: {
    color: '#000',
    padding: 0,
    fontSize: 16,
  },
  buttonBox: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  text: {
    color: '#898989',
    fontSize: 14,
    backgroundColor: '#00000000',
  },
  link: {
    color: '#0099CC',
  },
});

const phoneNumberIcon = require('../assets/ic_phone_number.png');
const emailIcon = require('../assets/ic_email.png');
const nameIcon = require('../assets/ic_name.png');
const passwordIcon = require('../assets/ic_password.png');
const passwordRetypeIcon = require('../assets/ic_password_retype.png');

export default class Registration extends Component {
    constructor(props){
        super(props)
        this.state={
            email:'',
            password:'',
            loading:null
        }
    
        this.launchRegistrationScene = this.launchRegistrationScene.bind(this)
    }

    onComponentDidMount(){
        NetInfo.addEventListener('change',() =>{
            alert('netwk changed');
        })
    }

  updateEmail(email) { this.setState({ email }); }

  signIn() {
    this.setState({ loading: true });
  }

  launchRegistrationScene() {
    // this.props.navigation.navigate('Login')
  }

  render() {
        const{ loading } = this.state
        return(
            <Container>
            <View>  
                <Item regular style={styles.inputGroup}>
                    <Input style={styles.input}
                        placeholder="Phone Number"
                        placeholderTextColor="#898989"
                        keyboardType="numeric"
                        onChangeText={(email)=>{this.updateEmail(email)}}
                    />
                    <Thumbnail style={styles.thumbnail} square small source={phoneNumberIcon} />
                </Item>

                <Item regular style={styles.inputGroup}>
                    <Input style={styles.input}
                        placeholder="E-mail"
                        placeholderTextColor="#898989"
                        keyboardType="email-address"
                        onChangeText={(email)=>{this.updateEmail(email)}}
                    />
                    <Thumbnail style={styles.thumbnail} square small source={emailIcon} />
                </Item>

                <Item regular style={styles.inputGroup}>
                    <Input style={styles.input}
                        placeholder="First Name"
                        placeholderTextColor="#898989"
                        onChangeText={(email)=>{this.updateEmail(email)}}
                    />
                    <Thumbnail style={styles.thumbnail} square small source={nameIcon} />
                </Item>

                <Item regular style={styles.inputGroup}>
                    <Input style={styles.input}
                        placeholder="Last Name"
                        placeholderTextColor="#898989"
                        onChangeText={(email)=>{this.updateEmail(email)}}
                    />
                    <Thumbnail style={styles.thumbnail} square small source={nameIcon} />
                </Item>

                <Item regular style={styles.inputGroup} >
                    <Input style={styles.input}
                    placeholder="Password"
                    placeholderTextColor="#898989"
                    secureTextEntry={true}
                    onChangeText={(pass)=>{this.updateEmail(pass)}}
                    />
                    <Thumbnail style={styles.thumbnail} square small source={passwordIcon} />
                </Item>
                
                <Item regular style={styles.inputGroup} >
                    <Input style={styles.input}
                    placeholder="Password"
                    placeholderTextColor="#898989"
                    secureTextEntry={true}
                    onChangeText={(pass)=>{this.updateEmail(pass)}}
                    />
                    <Thumbnail style={styles.thumbnail} square small source={passwordRetypeIcon} />
                </Item>
               
                
            </View>
            </Container>
        )
    }
}
