import { createAppContainer, createStackNavigator } from 'react-navigation'

// pages
import Beranda from './beranda';

const routes = createStackNavigator({
    beranda: Beranda
}, {
    headerMode: 'none',
    headerTransitionPreset: 'uikit'
});

export default createAppContainer(routes);
