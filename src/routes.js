import React from 'react'
import { createAppContainer, createStackNavigator, createMaterialTopTabNavigator } from 'react-navigation'
import getSlideFromRightTransition from 'react-navigation-slide-from-right-transition'
import BottomTabBar from './components/bottom-tab'

// pages
import Beranda from './beranda'
import LihatObat from './lihat-obat'
import Tentang from './tentang'

const berandaRoute = createMaterialTopTabNavigator({
	beranda: Beranda,
	tentang: Tentang
}, {
	tabBarPosition: 'bottom',
	tabBarComponent: (props) => <BottomTabBar {...props} />
});

const stackContainer = createStackNavigator({
	beranda: berandaRoute,
	lihatObat: LihatObat
}, {
	headerMode: 'none',
	transitionConfig: getSlideFromRightTransition
});

export default createAppContainer(stackContainer);
