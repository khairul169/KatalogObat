import React, { Component, useState } from 'react'
import { Text, View } from 'react-native'
import Menu, { MenuItem } from 'react-native-material-menu'
import { Icon, Button } from 'native-base'

export default class PopupMenu extends Component {
    btnPressed = () => {
        if (this.menu) {
            this.menu.show();
        }
    }

    itemPressed = (id) => {
        if (this.menu) {
            this.menu.hide();
        }
        this.props.onPress ? this.props.onPress(id) : null;
    }

    render() {
        return (
            <Menu ref={ref => this.menu = ref} button={
                <Button transparent onPress={this.btnPressed}>
                    <Icon name='md-list' style={this.props.iconStyle} />
                </Button>
            }>
                { this.props.items.map((item, index) => (
                    <MenuItem onPress={() => this.itemPressed(item.id)} style={{
                        flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start'
                    }}>
                        { item.icon && (
                            <Icon type='MaterialCommunityIcons' name={item.icon} style={{fontSize: 20}} />
                        ) }
                        <View style={{width: 10, height: 1}} />
                        <Text style={{fontSize: 16}}>{item.title}</Text>
                    </MenuItem>
                )) }
            </Menu>
        )
    }
}
