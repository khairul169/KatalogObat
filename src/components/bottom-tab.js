import React, { Component } from 'react'
import { StyleSheet, View, TouchableOpacity } from 'react-native'
import { Icon } from 'native-base'

const TabButtonIcon = props => {
	return (
		<TouchableOpacity style={styles.tabButton} onPress={props.onPress}>
			<Icon name={props.icon} style={[styles.tabIcon, props.active ? styles.tabIconActive : null]} />
		</TouchableOpacity>
	)
}

export default class BottomTabBar extends Component {
	tabBarIcon = {
		beranda: 'ios-home',
		tentang: 'ios-person'
	}

	tabPressed = (route) => {
		this.props.navigation.navigate(route);
	}

	render() {
		const navState = this.props.navigation.state;

		return (
			<View style={styles.container}>
				{ navState.routes.map((item, index) => (
					<TabButtonIcon
						key={index}
						active={navState.index === index}
						icon={this.tabBarIcon[item.routeName]}
						onPress={() => this.tabPressed(item.routeName)} />
				)) }
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		height: 40, backgroundColor: '#fff', elevation: 5,
		flexDirection: 'row', alignItems: 'stretch'
	},
	tabButton: {
		flex: 1, alignItems: 'center', justifyContent: 'center'
	},
	tabIcon: {
		fontSize: 18, color: '#727272'
	},
	tabIconActive: {
		color: '#333'
	}
})
