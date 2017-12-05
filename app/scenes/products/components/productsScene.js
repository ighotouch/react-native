import React, { Component } from 'react';
import { View, Image, AsyncStorage, FlatList } from 'react-native';
import { Header, Right, Title, Body, Container, Text } from 'native-base';
import ArrowLeftButton from '../../../components/arrowBackButton';
import ProductItem from '../../../components/productItem';
import styles from '../styles';

const gasStationBackground = require('../../../assets/gas_station.png');

export default class ProductListScene extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

    async componentDidMount() {
        this.setState({loading:true})
        try {
            let data = await AsyncStorage.getItem('user');
                console.log(data)
                // user = JSON.parse(data);
                user = { token: 'test' };
                // console.log(user.token);
                if (user.token !== null) {
                    fetch('http://app.zeeoilgas.com/api/products', {
                        method: 'GET',
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json',
                            'Authorization':'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImEyMDBkYzZhYzE3YWZhMzI2NDRkMGI1MjQ1MzI0NmFjNzZmMWVkZjE5Nzg5YmUzNWMwYWVlNmRlNDQ0NGE1ODQwNjgwODc4ZDkxYzA2NmM4In0.eyJhdWQiOiIxIiwianRpIjoiYTIwMGRjNmFjMTdhZmEzMjY0NGQwYjUyNDUzMjQ2YWM3NmYxZWRmMTk3ODliZTM1YzBhZWU2ZGU0NDQ0YTU4NDA2ODA4NzhkOTFjMDY2YzgiLCJpYXQiOjE1MTIwMzU4NjQsIm5iZiI6MTUxMjAzNTg2NCwiZXhwIjoxNTQzNTcxODY0LCJzdWIiOiI2MiIsInNjb3BlcyI6W119.BHZoDfJcbofOFgqSkyopByB7SQYNrG2t_d9Mo4Vd7fFDqoeDfMKxGBlKNgM_Q3aL3JxVUv4RolKrN0h0Mp8nz1VCb2XHp29WsDXxfuHAGl_DmAugTga-XLJw2zQLfRXnjG4aOP6PAUdpPscMgim0wYXJl_usTmZySJP0dXXpqAmjg83acPp9bGJuj9PjAyYEtsHNGAA9vJA0bMPFVwrIHAHx1KBA0ux9usWP2VLhD5QpiHz__7jgyg0_x2aG48FP2IJ22mepeuKpAkNVFDdrLFYnSvA5nEwhN_bR5ChJ62U0fDKb3BeTR6bGjtUVbMDZT2njgsz8qStKlrebOmEpPlD-vZsbvSgbtDKOD7dz57hSl1V3KL5zDbikY-n_KP76HCirBWedIViMFX3gbQwSFWxkSOElEWG9fNd-vsjEKA02iZ1alrMN32eIBeVeeyvwziVCN9c0UVeqU49L_6bls5xRhLH_iGKynZrt4jhdM588A5_WIrJHFtP8xiNvg9kLVUudb2FUEQModyPNWK3QIt45rUP4-VKo-ZSBmEZfJHL42dVx8IQLDR1WqzqhHmhvihEJu4X5QvHQUJ17tpn8y23SXwFsV6oGheZqbvEDupor1cW-lCcFvw3yUbE56vlLrlxK93yAxnxjCkUgz1a2w1YLJsx12zxAGy2ihknrsn8',
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
          <ArrowLeftButton navigation={this.props.navigation} route='Main'/>
          <Body>
            <Title>Place an Order</Title>
          </Body>
          <Right />
        </Header>

        <Image
          style={styles.container}
          source={gasStationBackground}
        >
          <View style={styles.header}>
            <Text style={styles.headerText}>Select a product</Text>
          </View>
          <FlatList
            data={this.state.products}
            renderItem={({ item }) => (
              <ProductItem item={item} />
            )}
          />
        </Image>
      </Container>
    );
  }
}
