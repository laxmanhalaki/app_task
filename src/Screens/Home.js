import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import SmallCard from '../components/SmallCard';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AccessBar from '../components/AccessBar';
import { card_bg_dark, primarycolor } from '../utiliteis';
import Header from '../components/Header';


const cardData = [
	{
		name: 'home',
		icon: <FontAwesome name="home" size={20} />,
	},
	{
		name: 'plus',
		icon: <FontAwesome name="plus" size={20} />,
	},
	{
		name: 'home',
		icon: <FontAwesome name="credit-card" size={20} />,
	},
	{
		name: 'home',
		icon: <FontAwesome name="gear" size={20} />,
	},
];

const Home = () => {
	return (
		<View style={{ backgroundColor: primarycolor, flex: 1 }}>
			<Header title="Home" />
			<AccessBar />
			<View
				style={{
					display: 'flex',
					justifyContent: 'space-between',
					flexDirection: 'row',
					paddingHorizontal: 15,
				}}
			>
				{cardData.map((item) => {
					return <SmallCard child={item.icon} />;
				})}
			</View>
			<View
				style={{
					backgroundColor: card_bg_dark,
					borderRadius: 20,
					flex: 1,
					justifyContent: 'center',
					alignItems: 'center',
					marginTop: 20,
				}}
			>
				<Image
					source={require('../assets/chart.png')}
					style={{ height: 300, width: 250 }}
					resizeMode="contain"
				/>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({})

export default Home;
