import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import { Button, Icon, Content, Text, Card } from 'native-base'
import Header from './components/header'
import Image from 'react-native-scalable-image'

export default class LihatObat extends Component {
    render() {
        const obat = this.props.navigation.getParam('obat', null);
        const dataObat = [
            {
                title: 'Golongan',
                value: obat.golongan
            },
            {
                title: 'Manfaat',
                value: obat.manfaat
            },
            {
                title: 'Penggunaan Pada',
                value: obat.penggunaan
            },
            {
                title: 'Sediaan',
                value: obat.sediaan
            }
        ];

        return (
            <View style={{flex: 1}}>
                <Header title={obat.nama}
                left={<Button transparent onPress={() => this.props.navigation.goBack()}>
                    <Icon name='ios-arrow-back' style={{fontSize: 20, color: '#333'}} />
                </Button>} />

                <Content style={{zIndex: -1}} padder>
                    <View style={{alignItems: 'center', marginBottom: 16}}>
                        <Image source={obat.gambar} height={150} />
                    </View>

                    <Card style={styles.dataObat}>
                        { dataObat.map((item, index) => item.value && (
                        <View key={index} style={[styles.dataItem, index === 0 ? {
                            marginTop: 0, paddingTop: 0, borderTopWidth: 0
                        } : null]}>
                            <Text style={styles.dataItemKey}>{item.title}</Text>
                            <Text style={styles.dataItemValue}>{item.value}</Text>
                        </View>
                        )) }
                    </Card>

                    <Card>
                        <Text style={styles.descObat}>
                            {obat.deskripsi}
                        </Text>
                    </Card>

                    { obat.referensi && (
                        <Card style={{padding: 16}}>
                            <Text style={{fontWeight: 'bold'}}>Referensi:</Text>
                            { obat.referensi.map((item, index) => (
                                <Text key={index} style={{color: '#525252', fontSize: 14, marginTop: 8}}>{item}</Text>
                            )) }
                        </Card>
                    ) }
                </Content>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    dataObat: {
        flex: 1, flexDirection: 'column',
        padding: 16
    },

    dataItem: {
        flexDirection: 'row', alignItems: 'flex-start',
        borderTopWidth: 1, borderTopColor: '#ddd',
        paddingTop: 8, marginTop: 8
    },

    dataItemKey: {
        flex: 1, fontSize: 14, fontWeight: 'bold', color: '#333'
    },

    dataItemValue: {
        flex: 2, fontSize: 14, color: '#424242'
    },
    
    descObat: {
        lineHeight: 28, fontSize: 15, color: '#484848', padding: 16
    }
})
