import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button, Thumbnail } from 'native-base';

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
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
  redText: {
    color: '#d30021',
  },
  darkRed: {
    color: '#b70000',
    backgroundColor: '#00000000',
  },
  textBlack: {
    color: '#747373',
    fontSize: 14,
    backgroundColor: '#00000000',
  },
});

export default props => (
  <Button style={{ flex: 1 }} transparent onPress={() => props.navigation.navigate(props.route)}>
    <View style={[styles.thumbnailBox, { flex: 1 }]}>
      <Thumbnail square small style={[styles.imageIcon]} source={props.icon} />
      <Text style={[styles.darkRed]}>{props.title}</Text>
      <Text style={[styles.textBlack]}>{props.subtitle}</Text>
    </View>
  </Button>
);

