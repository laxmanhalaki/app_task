import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { primarycolor,card_bg } from '../utiliteis';
import Header from '../components/Header';
import AccessBar from '../components/AccessBar';
import LinearGradient from 'react-native-linear-gradient';
import SmallCard from '../components/SmallCard';
import { FlatList } from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';


const Payment = () => {
		const staticData = [
			{
				name: 'EMI',
				image: require('../assets/folder_3767084.png'),
			},
			{
				name: 'Subscrion',
				image: require('../assets/pencil_227877.png'),
			},
			{
				name: 'Group',
				image: require('../assets/folder_3767084.png'),
			},
			{
				name: 'Internet',
				image: require('../assets/pencil_227877.png'),
			},
			{
				name: 'Banking',
				image: require('../assets/folder_3767084.png'),
			},
			{
				name: 'Store',
				image: require('../assets/pencil_227877.png'),
			},
		];
	return (
		<View style={{ backgroundColor: primarycolor, flex: 1 }}>
			<Header title="Payment" />
			<AccessBar />
			<View
				style={{
					backgroundColor: card_bg,
					borderRadius: 20,
					padding: 20,
					width: '90%',
					display: 'flex',
					alignSelf: 'center',
				}}
			>
				<View
					style={{
						display: 'flex',
						justifyContent: 'space-between',
						flexDirection: 'row',
						alignItems: 'center',
					}}
				>
					<Text
						style={{
							color: 'rgba(0,0,0,0.8)',
							fontSize: 14,
							fontWeight: '600',
						}}
					>
						Recents
					</Text>
					<View
						style={{
							display: 'flex',
							justifyContent: 'space-between',
							flexDirection: 'row',
							alignItems: 'center',
							gap: 10,
						}}
					>
						<Fontisto name="nav-icon-grid" color="rgba(0,0,0,0.8)" size={16} />
						<Fontisto name="nav-icon-grid" color="rgba(0,0,0,0.8)" size={16} />
					</View>
				</View>

				<FlatList
					data={staticData}
					style={{ marginTop: 20 }}
					numColumns={3}
					renderItem={({ item }) => {
						return (
							<View style={{ flex: 1, padding: 4, alignItems: 'center' }}>
								<SmallCard
									child={
										<Image
											source={item.image}
											style={{ width: 40, height: 40 }}
										/>
									}
								/>
								<Text
									style={{
										fontSize: 12,
										fontWeight: '500',
										paddingTop: 4,
									}}
								>
									{item.name}
								</Text>
							</View>
						);
					}}
				/>
			</View>

			<View
				style={{
					paddingHorizontal: 20,
					marginTop: 10,
					flex: 1,
					justifyContent: 'space-between',
					flexDirection: 'row',
				}}
			>
				<LinearGradient
					colors={['rgb(23,25,61)', 'rgba(48, 50, 97,0.8)']}
					style={{
						borderBottomRightRadius: 15,
						borderBottomLeftRadius: 15,
						width: 40,
						borderWidth: 1,
						borderColor: 'grey',
						backgroundColor: 'white',
						height: '60%',
					}}
				>
					<Text style={{ color: 'white', textAlign: 'center' }}>15</Text>
				</LinearGradient>
				<LinearGradient
					colors={['rgb(23,25,61)', 'rgba(48, 50, 97,0.8)']}
					style={{
						borderBottomRightRadius: 15,
						borderBottomLeftRadius: 15,
						width: 40,
						borderWidth: 1,
						borderColor: 'grey',
						backgroundColor: 'white',
						height: '50%',
					}}
				>
					<Text style={{ color: 'white', textAlign: 'center' }}>14</Text>
				</LinearGradient>
				<LinearGradient
					colors={['rgb(23,25,61)', 'rgba(48, 50, 97,0.8)']}
					style={{
						borderBottomRightRadius: 15,
						borderBottomLeftRadius: 15,
						width: 40,
						borderWidth: 1,
						borderColor: 'grey',
						backgroundColor: 'white',
						height: '40%',
					}}
				>
					<Text style={{ color: 'white', textAlign: 'center' }}>13</Text>
				</LinearGradient>
				<LinearGradient
					colors={['rgb(23,25,61)', 'rgba(48, 50, 97,0.8)']}
					style={{
						borderBottomRightRadius: 15,
						borderBottomLeftRadius: 15,
						width: 40,
						borderWidth: 1,
						borderColor: 'grey',
						backgroundColor: 'white',
						height: '40%',
					}}
				>
					<Text style={{ color: 'white', textAlign: 'center' }}>12</Text>
				</LinearGradient>
				<LinearGradient
					colors={['rgb(23,25,61)', 'rgba(48, 50, 97,0.8)']}
					style={{
						borderBottomRightRadius: 15,
						borderBottomLeftRadius: 15,
						width: 40,
						borderWidth: 1,
						borderColor: 'grey',
						backgroundColor: 'white',
						height: '35%',
					}}
				>
					<Text style={{ color: 'white', textAlign: 'center' }}>11</Text>
				</LinearGradient>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({})

export default Payment;
