import React from 'react';
import { StyleSheet } from 'react-native';
import { Button, Left, Icon } from 'native-base';

const styles = StyleSheet.create({
  leftButton: {
    padding: 10,
  },
});


export default props => (
  <Left>
    <Button
      small
      style={styles.leftButton}
      transparent
      onPress={() => props.navigation.navigate(props.route)}
    >
      <Icon small name="arrow-back" style={{ fontSize: 18, color: '#d30021' }} />
    </Button>
  </Left>
);

