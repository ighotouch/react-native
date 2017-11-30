import React, { Component } from 'react';
import { InputGroup,Input,Spinner, View, StyleSheet,Image,ActivityIndicator ,AsyncStorage,FlatList} from 'react-native';
import { Constants } from 'expo';
import {Button,Header,Left,Right,Title,Icon,Body,List,ListItem} from 'native-base';

import Registration from '../components/Registration';
import {Container,Text} from 'native-base';

export default class ProductListScene extends React.Component {
    static navigationOptions = {
      title: 'Order',
    }

    constructor(props) {
      super(props)
      this.state={
        email:'',
        products:[],
        loading:false,
        navigation: props.navigation
      }
    }

    async componentDidMount(){
        this.setState({loading:true})
        try {
            let data = await AsyncStorage.getItem('user');
                console.log(data)
                user = JSON.parse(data);
                console.log(user.token);
                if (user.token !== null) {
                    fetch('http://app.zeeoilgas.com/api/products', {
                        method: 'GET',
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json',
                            'Authorization':'Bearer '+ user.token,
                        }
                    })
                    .then((response) => response.json())
                    .then((responseJson) => {
                        if(responseJson.code == "302"){
                            alert(responseJson.error_msg)
                        }else{
                            this.setState({products:responseJson.data})
                        }
                        this.setState({loading:false})
                    })
                    .catch((error) => {
                        console.error(error);
                        alert(error)
                    });

                }
            } catch (error) {
            // Error retrieving data
            console.log(error)
            }
           }
    render() {
      return (
        <Container>
          <Header>
          <Left>
            <Button transparent>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>Place an Order</Title>
          </Body>
          <Right>
           
          </Right>
        </Header>

          
        <Image style={styles.container}
          source={require('../gas_station.png')} >
            <View style={styles.header}>
              <Text style={styles.headerText}>Select a product</Text>
            </View>
            <FlatList
              data={this.state.products}
              renderItem={({item}) => 
                <View block transparent style={{margin:0}}>
                <View style={styles.listContainer}>
                  <View style={{backgroundColor:'#F2F2F2',width:70}}>
                    <View style={{justifyContent:'center',alignItems:'center',padding:10}}>
                    <Text style={{backgroundColor:'#00000000',fontSize:12,color:'#d30021'}}>{item.rate}</Text>
                    <Text style={{backgroundColor:'#00000000',fontSize:10}}>per</Text>
                    <Text style={{backgroundColor:'#00000000',fontSize:10}}>{item.unit}</Text>
                    </View>
                  </View>
                  <View style={styles.body}>
                    <Text style={styles.item}>{item.short_title} - N{item.rate}</Text>
                    <Text note>{item.title}</Text>
                  </View>
                </View>
                  <View style={styles.divider}></View>
                </View>
              }
            />
        </Image>
        </Container>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff', height: null, width: null 
    },
    listContainer: {
      flex: 1,
      flexDirection:'row',
      backgroundColor: '#FCFCFC', height: null, width: null 
    },
    statusBar:{
      backgroundColor:'#000',
      height: Constants.statusBarHeight,
    },
    divider:{
      height:0.4,
      backgroundColor:'#FFDBDB'
    },
    logoContainer:{
      marginTop:20,
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom:35,
    },
    title:{
      fontSize: 18,
      color:'#d30021',
    },
    paragraph: {
      margin: 24,
      fontSize: 12,
      backgroundColor:'#00000000',
      marginTop:30,
      fontWeight: 'bold',
      textAlign: 'center',
      color: '#fff',
    },
    header:{
      padding:15,
      
    },
    item:{
      fontSize: 14,
    },
    headerText:{
      color:'#D3D3D3',
      fontSize: 14,
    },
    body:{
      flex: 1,
      flexDirection:'column',
      marginTop:4,
      padding:10
    }
  });

  
 
  