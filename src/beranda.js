import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import {
    Content, Text, Icon, Button
} from 'native-base'
import Image from 'react-native-scalable-image'
import Header from './components/header'
import PopupMenu from './components/popup-menu'

const ORDER_BY_ALPHABET = 0;
const ORDER_BY_CATEGORY = 1;

class ItemObat extends Component {
    render() {
        const item = this.props.item;

        return (
            <View style={styles.obatItem}>
                <View style={{flex: 1, alignItems: 'center'}}>
                    <Image
                    source={item.img}
                    height={48} />
                </View>

                <View style={{flex: 2}}>
                    <View style={{flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'space-between'}}>
                        <Text style={styles.obatTitle}>
                            {item.name}
                        </Text>

                        <Text style={styles.obatCat}>
                            {item.category}
                        </Text>
                    </View>
                    
                    <Text style={styles.obatDesc}>
                        {item.desc}
                    </Text>
                </View>
            </View>
        )
    }
}

class ListObat extends Component {
    items = [
        {
            name: 'Ibuprofen',
            img: require('../assets/obat-img/ibuprofen.jpg'),
            category: 'Analgesik, Antipiretik',
            desc: 'Mengurangi rasa sakit akibat artritis.'
        },
        {
            name: 'Cetirizine',
            img: require('../assets/obat-img/cetirizine.jpg'),
            category: 'Antihistamin',
            desc: 'Mengatasi gejala-gejala alergi, seperti pilek dan bersin-bersin.'
        },
        {
            name: 'Test',
            img: require('../assets/obat-img/ibuprofen.jpg'),
            category: 'Analgesik, Antipiretik',
            desc: 'Mengurangi rasa sakit akibat artritis.'
        }
    ]

    sortItems = (items) => {
        switch (this.props.ordering) {
            case ORDER_BY_CATEGORY:
                return items.sort((a, b) => a.category.localeCompare(b.category));
            default:
                return items.sort((a, b) => a.name.localeCompare(b.name));
        }
        return items;
    }

    filterItem = (items) => {
        let query = '';
        if (!query || query.trim() === '') {
            return items;
        }

        query = query.toLowerCase();

        return items.filter(item => {
            const name = item.name.toLowerCase();
            const category = item.category.toLowerCase();
            const desc = item.desc.toLowerCase();
            return name.includes(query) || category.includes(query) || desc.includes(query);
        });
    }

    render() {
        let itemList = [...this.items];
        itemList = this.filterItem(itemList);
        itemList = this.sortItems(itemList);

        return (
            <View>
                { itemList.map((item, index) => (
                    <ItemObat key={index} item={item} />
                )) }
            </View>
        )
    }
}

export default class Beranda extends Component {
    state = {
        ordering: null
    }

    render() {
        return (
            <View style={styles.container}>
                <Header
                title="Katalog Obat Generik" searchBar
                left={<Icon type='FontAwesome5' name='pills' size={18} style={styles.icon} />}
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
                    <ListObat ordering={this.state.ordering} />
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
    },

    obatItem: {
        flex: 1,
        paddingVertical: 16,
        backgroundColor: '#fff',
        marginBottom: 16,
        paddingRight: 16,
        elevation: 1,
        flexDirection: 'row',
        alignItems: 'flex-start'
    },

    obatTitle: {
        fontWeight: 'bold', fontSize: 16, color: '#424242'
    },

    obatCat: {
        flex: 1, fontSize: 12, color: '#626262', marginLeft: 8, textAlign: 'right'
    },

    obatDesc: {
        flex: 2,
        fontSize: 14, color: '#333', marginTop: 4
    }
})
