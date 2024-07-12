import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { primarycolor, secondarycolor } from '../utiliteis';
import { TouchableOpacity } from 'react-native';
data=['Access','Consent','Approve']
const AccessBar = () => {
const [activebtn, setActiveBtn] = useState('Access');
	return (
		<View style={styles.access_main}>
		{
			data.map((item)=>{
				return (
					<TouchableOpacity
						onPress={() => {
							setActiveBtn(item);
						}}
						style={{ flex: 1 }}
					>
						<View
							style={[
								{
									paddingHorizontal: 15,
									paddingVertical: 15,
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'space-between',
									backgroundColor:
										activebtn == item ? secondarycolor : 'rgb(23,25,61)',
									borderRadius: 15,
								},
							]}
						>
							<Text style={{ color: 'white' }}>{item}</Text>
						</View>
					</TouchableOpacity>
				);

			})
		}
			
		</View>
	);
}

const styles = StyleSheet.create({
	access_main:{
		display:'flex',
		flexDirection:'row',
		borderRadius:15,
		marginVertical:30,
		marginHorizontal:10,
	height:50,
	borderWidth:1,
	backgroundColor:'rgb(23,25,61)'
	}
})

export default AccessBar;
