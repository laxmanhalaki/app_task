import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const StatisticsCard = () => {
	return (
		<View
			style={{
				paddingHorizontal: 20,
				paddingVertical: 15,
				borderRadius: 15,
				backgroundColor: 'white',
				display: 'flex',
				flexDirection: 'row',
				justifyContent: 'space-between',
			}}
		>
			<View style={{ paddingHorizontal: 3 ,alignItems:'center',gap:4}}>
				<FontAwesome name="coffee" color="grey" size={30} />
				<Text style={{ color: 'grey', fontSize: 12 }}>Restaurent</Text>
			</View>
			<View style={{justifyContent:'end',display:'flex',alignItems:'flex-end',gap:4}}>
				<Text style={{ color: 'grey', fontSize: 14 }}>25%</Text>
				<Text style={{ color: 'grey', fontSize: 18 ,fontWeight:'600'}}>$2356.43</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({})

export default StatisticsCard;
