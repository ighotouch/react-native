import React from 'react';
import { DrawerNavigator } from 'react-navigation';
import MainScene from './mainScene';
import SideBar from '../../../components/sideBar';

export default DrawerNavigator({
  Main: {
    screen: MainScene,
  },
}, {
  initialRouteName: 'Main',
  contentOptions: {
    activeTintColor: '#fff',
  },
  contentComponent: props => <SideBar {...props} />,
});
