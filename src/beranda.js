import React, { Component } from 'react'
import { StyleSheet, View, TouchableOpacity } from 'react-native'
import {
    Content, Text, Icon
} from 'native-base'
import Image from 'react-native-scalable-image'
import Header from './components/header'
import PopupMenu from './components/popup-menu'
import { listObat } from './daftar-obat'

const ORDER_BY_ALPHABET = 0;
const ORDER_BY_CATEGORY = 1;

class ItemObat extends Component {
    render() {
        const item = this.props.item;

        return (
            <TouchableOpacity style={styles.obatItem}
            onPress={this.props.onItemPressed ? this.props.onItemPressed : null}>
                <View style={{flex: 1, alignItems: 'center'}}>
                    { item.gambar && (
                        <Image source={item.gambar} height={48} />
                    ) }
                </View>

                <View style={{flex: 2}}>
                    <View style={{flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'space-between'}}>
                        <Text style={styles.obatTitle}>
                            {item.nama}
                        </Text>

                        <Text style={styles.obatCat}>
                            {item.golongan}
                        </Text>
                    </View>
                    
                    <Text style={styles.obatDesc}>
                        {item.manfaat}
                    </Text>
                </View>
            </TouchableOpacity>
        )
    }
}

class ListObat extends Component {
    itemList = [];

    sortItems = (items) => {
        const ordering = this.props.ordering ? this.props.ordering : null;

        switch (ordering) {
            case ORDER_BY_CATEGORY:
                return items.sort((a, b) => a.golongan && b.golongan
                    && a.golongan.localeCompare(b.golongan));
            default:
                return items.sort((a, b) => a.nama && b.nama
                    && a.nama.localeCompare(b.nama));
        }
        return items;
    }

    filterItem = (items) => {
        const query = this.props.searchQuery ? this.props.searchQuery.toLowerCase() : null;
        if (!query || query.trim() === '') {
            return items;
        }

        return items.filter(item => {
            const nama = item.nama ? item.nama.toLowerCase() : null;
            const golongan = item.golongan ? item.golongan.toLowerCase() : null;
            const manfaat = item.manfaat ? item.manfaat.toLowerCase() : null;
            const deskripsi = item.deskripsi ? item.deskripsi.toLowerCase() : null;

            return (nama && nama.includes(query))
                || (golongan && golongan.includes(query))
                || (manfaat && manfaat.includes(query))
                || (deskripsi && deskripsi.includes(query));
        });
    }

    itemPressed = (index) => {
        this.props.navigation.navigate('lihatObat', {
            obat: this.itemList[index]
        });
    }

    render() {
        this.itemList = [...listObat];
        this.itemList = this.filterItem(this.itemList);
        this.itemList = this.sortItems(this.itemList);

        return (
            <View>
                { this.itemList.map((item, index) => (
                    <ItemObat key={index} item={item}
                    onItemPressed={() => this.itemPressed(index)} />
                )) }
            </View>
        )
    }
}

export default class Beranda extends Component {
    state = {
        ordering: null,
        searchQuery: ''
    }

    render() {
        return (
            <View style={styles.container}>
                <Header
                title="Katalog Obat" searchBar
                left={<Icon type='FontAwesome5' name='pills' size={18} style={styles.icon} />}
                right={
                    <PopupMenu iconStyle={styles.icon}
                    items={[
                        {
                            id: ORDER_BY_ALPHABET,
                            icon: 'alphabetical',
                            title: 'Abjad'
                        },
                        {
                            id: ORDER_BY_CATEGORY,
                            icon: 'apps',
                            title: 'Golongan Obat'
                        }
                    ]}
                    onPress={(id) => {
                        this.setState({ordering: id})
                    }} />
                }
                onSearchChanged={query => {
                    this.setState({searchQuery: query});
                }} />

                <Content style={{zIndex: -1}}>
                    <ListObat
                    navigation={this.props.navigation}
                    ordering={this.state.ordering}
                    searchQuery={this.state.searchQuery} />
                </Content>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#efefef'
    },
    
    icon: {
        fontSize: 22,
        color: '#333',
    },

    obatItem: {
        flex: 1,
        paddingVertical: 16,
        backgroundColor: '#fff',
        marginBottom: 10,
        paddingRight: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
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
