import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import {
    Container, Content, Text, Icon, Card
} from 'native-base'
import Header from './components/header'

export default class Beranda extends Component {
    render() {
        return (
            <Container>
                <Header title="Katalog Obat" searchBar
                    left={<Icon type='FontAwesome5' name='pills' size={18} style={styles.icon} />}/>
                <Content>
                    <Card>
                        <Text>Beranda</Text>
                    </Card>
                </Content>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
})
