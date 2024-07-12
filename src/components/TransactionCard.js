import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

const TransactionCard = (props) => {
	return (
		<View
			style={{
				padding: 20,
				borderRadius: 30,
				backgroundColor: 'rgb(23,25,61)',
				display: 'flex',
				flexDirection: 'row',
				justifyContent: 'space-between',
				alignItems:'center',
				marginBottom:10,
			}}
		>
			<View
				style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}
			>
				<Image
					source={{
						uri: props.item.image,
					}}
					style={{ height: 50, width: 50, borderRadius: 30 }}
					resizeMode="cover"
				/>
				<View style={{ paddingLeft: 10 }}>
					<Text
						style={{
							color: 'white',
							fontWeight: '600',
							fontSize: 18,
							paddingBottom: 4,
						}}
					>
						{props.item.name}
					</Text>
					<Text style={{ color: 'lightgrey', fontWeight: '400', fontSize: 12 }}>
						{props.item.date}
					</Text>
				</View>
			</View>

			<Text
				style={{
					color: 'lightgrey',
					fontSize: 14,
					textAlign: 'center',
					paddingHorizontal: 20,
					paddingVertical: 4,
					borderWidth:1,
					borderColor:'grey',
					borderRadius:10
				}}
			>
				{props.item.price}
			</Text>
		</View>
	);
}

const styles = StyleSheet.create({})

export default TransactionCard;
