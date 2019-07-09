import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { Button, Icon } from 'native-base'
import Header from './components/header'

export default class LihatObat extends Component {
    render() {
        const obat = this.props.navigation.getParam('obat', null);

        return (
            <View>
                <Header title={obat.name}
                left={<Button transparent onPress={() => this.props.navigation.goBack()}>
                    <Icon name='ios-arrow-back' style={{fontSize: 20, color: '#333'}} />
                </Button>} />
                <Text>{obat.desc}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({})
