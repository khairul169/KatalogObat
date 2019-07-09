import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { Header, Item, Input, Left, Body, Title, Right, Icon, Button } from 'native-base'

export default class AppHeader extends Component {
	statusBarColor = '#fff';
	iosBarStyle = 'dark-content';

	state = {
		searchBar: false,
		searchText: ''
	}

	toggleSearchBar = (visible) => {
		this.setState({
			searchBar: visible,
			searchText: ''
		});

		if (this.props.onSearchChanged) {
			this.props.onSearchChanged('');
		}
	}

	searchTextChanged = (text) => {
		this.setState({searchText: text});

		if (this.props.onSearchChanged) {
			this.props.onSearchChanged(text);
		}
	}

	render() {
		if (this.state.searchBar) {
			return (
				<Header searchBar style={styles.header}
					androidStatusBarColor={this.statusBarColor}
					iosBarStyle={this.iosBarStyle}>

					<Item>
						<Icon name='ios-search' style={styles.icon} />
						<Input autoFocus placeholder="Cari Obat..."
						value={this.state.searchText}
						onChangeText={this.searchTextChanged} />
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
				iosBarStyle={this.iosBarStyle}
				noLeft={!this.props.left}>
				
				<Left style={[{paddingLeft: 8}, this.props.left ? {flex: 1} : null]}>
					{ this.props.left ? this.props.left : null }
				</Left>

				<Body style={{flex: 5}}>
					<Title style={styles.title}>{this.props.title}</Title>
				</Body>

				<Right style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
					{ this.props.right ? this.props.right : null }

					{ this.props.searchBar && (
						<Button transparent onPress={() => this.toggleSearchBar(true)}>
							<Icon name='ios-search' style={styles.icon} />
						</Button>
					) }
				</Right>
			</Header>
		)
	}
}

const styles = StyleSheet.create({
	header: {
		backgroundColor: '#fff'
	},

	title: {
		color: '#333',
	},

	icon: {
		color: '#333',
		fontSize: 22
	}
})
