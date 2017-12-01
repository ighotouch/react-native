import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  divider: {
    height: 0.4,
    backgroundColor: '#FFDBDB',
  },
  listContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#FCFCFC',
    height: null,
    width: null,
  },
  body: {
    flex: 1,
    flexDirection: 'column',
    marginTop: 4,
    padding: 10,
  },
});

export default props => (
  <View block transparent style={{ margin: 0 }}>
    <View style={styles.listContainer}>
      <View style={{ backgroundColor: '#F2F2F2', width: 70 }}>
        <View style={{ justifyContent: 'center', alignItems: 'center', padding: 10 }}>
          <Text style={{ backgroundColor: '#00000000', fontSize: 12, color: '#d30021' }}>{props.item.rate}</Text>
          <Text style={{ backgroundColor: '#00000000', fontSize: 10 }}>per</Text>
          <Text style={{ backgroundColor: '#00000000', fontSize: 10 }}>{props.item.unit}</Text>
        </View>
      </View>
      <View style={styles.body}>
        <Text style={styles.item}>{props.item.short_title} - N{props.item.rate}</Text>
        <Text note>{props.item.title}</Text>
      </View>
    </View>
    <View style={styles.divider} />
  </View>
);
