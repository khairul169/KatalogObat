import { createAppContainer, createStackNavigator } from 'react-navigation'

// pages
import Beranda from './beranda'
import LihatObat from './lihat-obat'

const routes = createStackNavigator({
    beranda: Beranda,
    lihatObat: LihatObat
}, {
    headerMode: 'none'
});

export default createAppContainer(routes);
