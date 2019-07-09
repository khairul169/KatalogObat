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
                value: obat.category
            },
            {
                title: 'Manfaat',
                value: obat.desc
            },
            {
                title: 'Penggunaan Pada',
                value: 'Dewasa'
            }
        ];

        return (
            <View style={{flex: 1}}>
                <Header title={obat.name}
                left={<Button transparent onPress={() => this.props.navigation.goBack()}>
                    <Icon name='ios-arrow-back' style={{fontSize: 20, color: '#333'}} />
                </Button>} />

                <Content style={{zIndex: -1}} padder>
                    <View style={{alignItems: 'center', marginBottom: 16}}>
                        <Image source={obat.img} height={150} />
                    </View>

                    <Card style={styles.dataObat}>
                        { dataObat.map((item, index) => (
                        <View key={index} style={[styles.dataItem, index >= dataObat.length-1 ? {
                            marginBottom: 0, paddingBottom: 0, borderBottomWidth: 0
                        } : null]}>
                            <Text style={styles.dataItemKey}>{item.title}</Text>
                            <Text style={styles.dataItemValue}>{item.value}</Text>
                        </View>
                        )) }
                    </Card>

                    <Card>
                        <Text style={styles.descObat}>
                            {obat.fullDesc}
                        </Text>
                    </Card>
                </Content>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    dataObat: {
        flex: 1, flexDirection: 'column',
        padding: 16, marginBottom: 16
    },

    dataItem: {
        flexDirection: 'row', alignItems: 'flex-start',
        borderBottomWidth: 1, borderBottomColor: '#ddd',
        paddingBottom: 8, marginBottom: 8
    },

    dataItemKey: {
        flex: 1, fontSize: 16, fontWeight: 'bold', color: '#333'
    },

    dataItemValue: {
        flex: 2, fontSize: 16, color: '#424242'
    },
    
    descObat: {
        lineHeight: 28, fontSize: 15, color: '#484848', padding: 16
    }
})
