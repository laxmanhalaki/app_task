import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { primarycolor } from '../utiliteis';
import Header from '../components/Header';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import TransactionCard from '../components/TransactionCard';
import { FlatList } from 'react-native';

const Profile = () => {
	const transactions = [
		{
			name: 'Amazon',
			image:
				'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Amazon_icon.svg/2500px-Amazon_icon.svg.png',
			date: '22 may 2024',
			price: '$234.4',
		},
		{
			name: 'Zomato',
			image:
				'https://w7.pngwing.com/pngs/176/785/png-transparent-zomato-thumbnail-review-platforms-logos-thumbnail.png',
			date: '02 june 2024',
			price: '$454.4',
		},
		{
			name: 'Mec Donalds',
			image:
				'https://e7.pngegg.com/pngimages/242/522/png-clipart-mcdonald-s-logo-mcdonalds-miscellaneous-angle.png',
			date: '05 April 2024',
			price: '$324.5',
		},
		{
			name: 'Apple',
			image:
				'https://static.vecteezy.com/system/resources/previews/019/766/198/non_2x/apple-logo-apple-icon-transparent-free-png.png',
			date: '05 July 2024',
			price: '$500.27',
		},
	];
	return (
		<View style={{ backgroundColor: primarycolor, flex: 1,paddingBottom:60 }}>
			<Header title="Profile" />
			<View
				style={{
					display: 'flex',
					flexDirection: 'row',
					padding: 10,
					justifyContent: 'space-between',
				}}
			>
				<View
					style={{
						display: 'flex',
						flexDirection: 'row',
						alignItems: 'center',
					}}
				>
					<Image
						source={{
							uri: 'https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1720742400&semt=ais_user',
						}}
						style={{ height: 40, width: 40, borderRadius: 25 }}
					/>
					<View style={{ paddingLeft: 6 }}>
						<Text
							style={{ color: 'lightgrey', fontSize: 16, fontWeight: '500' }}
						>
							Welcome Back!
						</Text>
						<Text style={{ color: 'lightgrey', fontSize: 14 }}>
							Sandy Chungus
						</Text>
					</View>
				</View>
				<View style={{ display: 'flex', flexDirection: 'row', gap: 14 }}>
					<FontAwesome name="bell-o" color="white" size={22} />
					<FontAwesome name="ellipsis-v" color="white" size={22} />
				</View>
			</View>
			<View
				style={{
					width: 180,
					height: 180,
					borderRadius: 120,
					backgroundColor: 'rgba(105, 103, 100,0.8)',
					alignSelf: 'center',
					padding: 20,
				}}
			>
				<View
					style={{
						width: '100%',
						height: '100%',
						backgroundColor: primarycolor,
						borderRadius: 100,
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<Text style={{ fontSize: 18, fontWeight: '600', color: 'white' }}>
						$ 543,643.50
					</Text>
					<Text style={{ color: 'lightgrey' }}>Available Balance</Text>
				</View>
			</View>
			{/* transaction section */}
			<View style={{ paddingHorizontal: 10,flex:1 }}>
				<Text
					style={{
						color: 'white',
						fontWeight: '600',
						paddingVertical: 14,
						fontSize: 18,
					}}
				>
					My Transactions
				</Text>
				<FlatList style={{flex:1}} data={transactions} renderItem={({item})=>{
return <TransactionCard item={item} />;
				}}/>
				
			</View>
		</View>
	);
}

const styles = StyleSheet.create({})

export default Profile;
