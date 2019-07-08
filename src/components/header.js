import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { Header, Item, Input, Left, Body, Title, Right, Icon, Button } from 'native-base'

export default class AppHeader extends Component {
    statusBarColor = '#fff';
    iosBarStyle = 'dark-content';

    state = {
        searchBar: false
    }

    toggleSearchBar = (visible) => {
        this.setState({searchBar: visible});
    }

    render() {
        if (this.state.searchBar) {
            return (
                <Header searchBar style={styles.header}
                    androidStatusBarColor={this.statusBarColor}
                    iosBarStyle={this.iosBarStyle}>

                    <Item>
                        <Icon name='ios-search' style={styles.icon} />
                        <Input autoFocus placeholder="Cari Obat..." />
                        <Button transparent onPress={() => this.toggleSearchBar(false)}>
                            <Icon name='ios-close' style={styles.icon} />
                        </Button>
                    </Item>
                </Header>
            )
        }

        return (
            <Header style={styles.header}
                androidStatusBarColor={this.statusBarColor}
                iosBarStyle={this.iosBarStyle}>
                
                <Left style={{paddingLeft: 8}}>
                    <Icon type='FontAwesome5' name='pills' size={18} style={styles.icon} />
                </Left>

                <Body style={styles.titleBody}>
                    <Title style={styles.title}>{this.props.title}</Title>
                </Body>

                <Right>
                    <Button transparent onPress={() => this.toggleSearchBar(true)}>
                        <Icon name='ios-search' style={styles.icon} />
                    </Button>
                </Right>
            </Header>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        elevation: 2,
        backgroundColor: '#fff',
    },

    title: {
        color: '#333',
    },

    icon: {
        color: '#333',
        fontSize: 24
    }
})
