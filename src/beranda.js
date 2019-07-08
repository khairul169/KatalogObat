import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import {
    Container, Content, Text
} from 'native-base'
import Header from './components/header'

export default class Beranda extends Component {
    render() {
        return (
            <Container>
                <Header title="Katalog Obat" />
                <Content padder>
                    <Text>Beranda</Text>
                </Content>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
})
