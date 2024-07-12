import React, { useState } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native';
import { StyleSheet, View } from 'react-native';
import { secondarycolor } from '../utiliteis';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const EnterMobile = ({ setStep, mobileNumber, setMobileNumber }) => {
	const [error,setError]=useState(false);
	const handleInputChange = (text) => {
		setError(false);
		setMobileNumber(text.replace(/[^0-9]/g, '').slice(0, 10));
	};

	const handleSubmit = () => {
		mobileNumber.length !== 10 ? setError(true) : setStep(3);
		
		console.log('Mobile Number:', mobileNumber);
	};
	return (
		<>
			<FontAwesome
				name="arrow-left"
				color="white"
				size={18}
				style={{ position: 'absolute', top: 20, left: 20 }}
				onPress={() => setStep(1)}
			/>
			<View style={{ alignItems: 'center' }}>
				<Text
					style={{
						fontWeight: '600',
						fontSize: 14,
						color: 'white',
						paddingVertical: 15,
					}}
				>
					Please Enter Your Mobile Number
				</Text>

				<TextInput
					style={styles.input}
					placeholder="Enter your mobile number"
					keyboardType="phone-pad"
					value={mobileNumber}
					onChangeText={handleInputChange}
				/>
				{error && (
					<Text
						style={{ color: 'yellow' }}
					>
						Please Enter Valid Number
					</Text>
				)}
				<TouchableOpacity
					style={{
						paddingHorizontal: 15,
						paddingVertical: 10,
						borderRadius: 15,
						width: 150,
						marginTop:30,
						backgroundColor:
							mobileNumber.length == 10 ? secondarycolor : 'grey',
					}}
					onPress={handleSubmit}
				>
					<Text
						style={{ color: 'white', fontWeight: '600', textAlign: 'center' }}
					>
						Submit
					</Text>
				</TouchableOpacity>
			</View>
		</>
	);
};

const styles = StyleSheet.create({
	input: {
		height: 40,
		width: '90%',
		borderColor: '#ccc',
		borderWidth: 1,
		borderRadius: 10,
		paddingHorizontal: 10,
		backgroundColor: 'white',
	},
});

export default EnterMobile;
