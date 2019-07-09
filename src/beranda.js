import React, { Component } from 'react'
import { StyleSheet, View, Image } from 'react-native'
import {
    Content, Text, Icon, Button
} from 'native-base'
import Header from './components/header'
import PopupMenu from './components/popup-menu'

const ORDER_BY_ALPHABET = 0;
const ORDER_BY_CATEGORY = 1;

export default class Beranda extends Component {
    state = {
        ordering: null
    }

    render() {
        const items = [];
        for (let i=0; i<10; i++) {
            items.push(i+1);
        }

        return (
            <View style={styles.container}>
                <Header title="Katalog Obat Generik" searchBar
                    left={
                        <Icon type='FontAwesome5' name='pills' size={18} style={styles.icon} />
                    }
                    right={
                        <PopupMenu iconStyle={styles.icon}
                        items={[
                            {
                                id: ORDER_BY_ALPHABET,
                                title: 'Berdasarkan Abjad'
                            },
                            {
                                id: ORDER_BY_CATEGORY,
                                title: 'Berdasarkan Kategori Obat'
                            }
                        ]}
                        onPress={(id) => {
                            this.setState({ordering: id})
                        }} />
                    } />
                
                <Content style={{zIndex: -1}} contentContainerStyle={styles.contentContainer}>
                    {items.map((item, index) => (
                        <View key={index} style={{
                            padding: 40,
                            backgroundColor: '#fff',
                            marginBottom: 16,
                            elevation: 1,
                            flex: 1,
                            flexDirection: 'row',
                            alignItems: 'flex-start'
                        }}>
                            <View style={{flex: 1, alignItems: 'center'}}>
                                <Image source={require('../assets/obat-img/ibuprofen.jpg')}
                                style={{flex: 1, width: null, height: '100%'}} />
                            </View>

                            <View style={{flex: 2}}>
                                <Text>{item}</Text>
                            </View>
                        </View>
                    ))}
                </Content>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    contentContainer: {
        backgroundColor: '#efefef',
    },
    
    icon: {
        fontSize: 22,
        color: '#333',
    }
})
