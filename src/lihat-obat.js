import React, { Component } from 'react'
import { StyleSheet, View, Linking } from 'react-native'
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
					{ obat.gambar && (
						<View style={{alignItems: 'center', marginTop: 2, marginBottom: 10}}>
							<Image source={obat.gambar} height={150} />
						</View>
					) }

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

					{ obat.deskripsi && (
						<Card style={{padding: 16}}>
							<Text style={styles.descObat}>
								{obat.deskripsi}
							</Text>
						</Card>
					) }

					{ obat.kontraindikasi && (
						<Card style={{padding: 16}}>
							<Text style={styles.cardTitle}>Kontraindikasi</Text>
							{ obat.kontraindikasi.map((item, index) => (
							   <View style={{flexDirection: 'row', alignItems: 'flex-start'}}>
								   <Text style={styles.dotList}>{'\u2022'}</Text>
								   <Text style={styles.descObat}>{item}</Text>
								</View>
							)) }
						</Card>
					) }

					{ obat.efekSamping && (
						<Card style={{padding: 16}}>
							<Text style={styles.cardTitle}>Efek Samping</Text>
							{ obat.efekSamping.map((item, index) => (
							   <View style={{flexDirection: 'row', alignItems: 'flex-start'}}>
								   <Text style={styles.dotList}>{'\u2022'}</Text>
								   <Text style={styles.descObat}>{item}</Text>
								</View>
							)) }
						</Card>
					) }

					{ obat.referensi && (
						<Card style={{padding: 16}}>
							<Text style={styles.cardTitle}>Referensi</Text>
							{ obat.referensi.map((item, index) => (
								<Text key={index}
								style={[
									styles.itemReferensi,
									item.startsWith('http') ? {color: '#54a632'} : null
								]}
								onPress={() => item.startsWith('http') && Linking.openURL(item)}>
									{item}
								</Text>
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

	dotList: {
		marginRight: 10, color: '#727272', fontSize: 15, paddingTop: 3
	},
	
	descObat: {
		flex: 1, lineHeight: 28, fontSize: 15, color: '#484848'
	},

	cardTitle: {
		fontWeight: 'bold', marginBottom: 5
	},

	itemReferensi: {
		color: '#484848', fontSize: 14, marginTop: 6
	}
})
