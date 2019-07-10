import React, { Component } from 'react'
import { View, Linking } from 'react-native'
import Header from './components/header'
import { Content, Text, Icon, Card, Button } from 'native-base';
import Image from 'react-native-scalable-image';
import { displayName as appName, version as appVersion } from '../app.json'

export default class Tentang extends Component {
	linkList = [
		{
			icon: {
				name: 'logo-github'
			},
			label: 'khairul169',
			url: 'https://github.com/khairul169'
		},
		{
			icon: {
				type: 'Octicons',
				name: 'repo-forked'
			},
			label: 'KatalogObat',
			url: 'https://github.com/khairul169/KatalogObat'
		},
		{
			icon: {
				type: 'MaterialCommunityIcons',
				name: 'web'
			},
			label: 'khairul.my.id/katalogobat',
			url: 'http://khairul.my.id/katalogobat'
		},
		{
			icon: {
				type: 'Entypo',
				name: 'email'
			},
			label: 'contact@khairul.my.id'
		}
	]

	render() {
		return (
			<View style={{flex: 1, backgroundColor: '#f7f7f7'}}>
				<Header title='Tentang Aplikasi' />

				<Content>
					<Image
						source={require('../assets/app-icon.png')}
						height={150}
						style={{alignSelf: 'center', marginVertical: 20}} />
					
					<Text style={{textAlign: 'center', fontSize: 20, color: '#333'}}>
						{appName} v{appVersion}
					</Text>

					<Text style={{marginTop: 10, textAlign: 'center', fontSize: 14,
						color: '#424242', lineHeight: 20}}>
						Developed by Khairul Hidayat and Contributors
					</Text>

					<View style={{marginVertical: 16, padding: 16, paddingHorizontal: '10%',
						backgroundColor: '#fff', elevation: 2}}>
						{ this.linkList.map((item, index) => (
							<View key={index} style={{flexDirection: 'row', alignItems: 'center',
								marginTop: index === 0 ? 0 : 10}}>
								<Icon key={index} type={item.icon.type} name={item.icon.name}
									style={{width: 32, fontSize: 16}} />
								<Text style={{fontSize: 14}}
									onPress={() => item.url && Linking.openURL(item.url)}>
									{item.label}
								</Text>
							</View>
						)) }
					</View>
				</Content>

				<View>
					<Button success full onPress={() => Linking.openURL('https://github.com/khairul169/KatalogObat/issues')}>
						<Text>Berikan Kritik atau Saran</Text>
					</Button>
				</View>
			</View>
		)
	}
}
