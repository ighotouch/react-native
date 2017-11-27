import React, { Component } from 'react';
import { ActivityIndicator, Alert, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button, Input, Thumbnail, View, Text, Item } from 'native-base';
import { Facebook } from 'expo';

const emailIcon = require('../assets/ic_email.png');
const passwordIcon = require('../assets/ic_password.png');

const styles = StyleSheet.create({
  inputGroup: {
    backgroundColor: '#F8F8F8',
    borderColor: '#fff',
    height: 35,
    marginBottom: 10,
  },
  thumbnail: {
    width: 53,
    height: 32,
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
  button: {
    height: 30,
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 12,
  },
  buttonRedText: {
    color: '#d30021',
  },
  buttonWhite: {
    backgroundColor: '#fff',
  },
  buttonRed: {
    backgroundColor: '#d30021',
  },
  text: {
    color: '#898989',
    backgroundColor: '#00000000',
    fontSize: 14,
  },
  link: {
    color: '#0099CC',
  },
});


export default class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      loading: false,
    };

    this.launchRegistrationScene = this.launchRegistrationScene.bind(this);
    this.launchMainScene = this.launchMainScene.bind(this);
    this.signIn = this.signIn.bind(this);
  }

  _handleFacebookLogin = async () => {
    try {
      const { type, token } = await Facebook.logInWithReadPermissionsAsync(
        '1688998678069717', // Replace with your own app id in standalone app
        { permissions: ['public_profile'] },
      );

      switch (type) {
        case 'success': {
        // Get the user's name using Facebook's Graph API
          const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
          const profile = await response.json();
          Alert.alert(
            'Logged in!',
            `Hi ${profile.name}!`,
          );
          console.log(profile);
          break;
        }
        case 'cancel': {
          Alert.alert(
            'Cancelled!',
            'Login was cancelled!',
          );
          break;
        }
        default: {
          Alert.alert(
            'Oops!',
            'Login failed!',
          );
        }
      }
    } catch (e) {
      Alert.alert(
        'Oops!',
        'Login failed!',
      );
    }
  };

  updateEmail(email) { this.setState({ email }); }

  updatePass(password) { this.setState({ password }); }

  signIn() {
    if (this.state.email.length < 3 || this.state.password.length < 4) {
      alert('Please provide valid credentials');
    } else {
      this.setState({ loading: true });
      this.props.loginUser(this.state.email, this.state.password);
    }
  }

  launchRegistrationScene() {
    this.props.navigation.navigate('Registration')
  }

  launchMainScene(){
    //this.props.navigation.navigate('Main')
  }

  render() {
    const { loading } = this.state;
    return (
      <View>
        <Item regular style={styles.inputGroup}>
          <Input
            style={styles.input}
            placeholder="E-mail"
            placeholderTextColor="#898989"
            keyboardType="email-address"
            onChangeText={(email) => { this.updateEmail(email); }}
          />
          <Thumbnail style={styles.thumbnail} square small source={emailIcon} />
        </Item>
        <Item regular style={styles.inputGroup} >
          <Input
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#898989"
            secureTextEntry={true}
            onChangeText={(pass)=>{this.updatePass(pass)}}
          />
          <Thumbnail style={styles.thumbnail} square small source={passwordIcon} />
        </Item>
        <ActivityIndicator animating={this.state.loading} />
        <View style={styles.buttonBox}>
          <Button
            danger
            small
            style={[styles.button, styles.buttonRed, { marginRight: 10 }]}
            onPress={this.signIn}
          >
            <Text style={[styles.buttonText]}>Login</Text>
          </Button>
          <Button
            small
            style={[styles.button, styles.buttonWhite]}
            onPress={this.launchRegistrationScene}
          >
            <Text style={[styles.buttonRedText, styles.buttonText]}>Register</Text>
          </Button>
        </View>
        <View style={[styles.buttonBox, { marginTop: 20 }]}>
          <Text style={styles.text}>Forgotten your password? </Text>
          <Text style={[styles.text, styles.link]}> Reset</Text>
        </View>
        <View style={styles.buttonBox}>
          <Text style={[styles.text, { margin: 10 }]}>OR</Text>
        </View>
        <View style={styles.buttonBox}>
          <Icon.Button onPress={this._handleFacebookLogin} name="facebook" backgroundColor="#3b5998">
            <Text style={{ fontSize: 14, color: '#fff' }}>Continue with Facebook</Text>
          </Icon.Button>
        </View>
      </View>
    );
  }
}

