import React, { useState, useRef, useContext } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet,Text } from 'react-native';
import { secondarycolor } from '../utiliteis';
import { accessContext } from '../../App';
import { getOtp } from '../API/ApiHandler';


const OtpVerify = ({mobileNumber,setStep}) => {
	const {setValidUser}=useContext(accessContext);
	const [otp, setOTP] = useState(['', '', '', '']);
	const otpTextInput = useRef([]);
	const [error,setError]=useState(false);


	const handleOTPInputChange = (index, value) => {
		setError(false);
	
		const newOTP = [...otp];
		newOTP[index] = value;
		setOTP(newOTP);


		if (value && index < otp.length - 1) {
			otpTextInput.current[index + 1].focus();
		}
	};


	const handleSubmit = async () => {
		const enteredOTP = otp.join('');
const response = await getOtp()
console.log('response i got',response)
let serverOTP=response.data.otp;

		console.log('Entered OTP:', enteredOTP);
		if (enteredOTP == serverOTP) {
			setOTP(['', '', '', '']);
			setValidUser(true);

			otpTextInput.current.forEach((ref) => ref.blur());
		} else {
			setError(true);
			setOTP(['', '', '', '']);

			otpTextInput.current.forEach((ref) => ref.blur());
		}
		
		
	};

	return (
		<View style={styles.container}>
			<View style={{ paddingVertical: 10 }}>
				<Text style={{ color: 'white', fontWeight: '600' }}>
					OTP is sent to {mobileNumber} please verify
				</Text>
				<TouchableOpacity
					onPress={() => {
						setStep(2);
					}}
				>
					<Text
						style={{
							color: 'white',
							fontWeight: '600',
							color: 'yellow',
							paddingVertical: 10,
						}}
					>
						Mobile Number is Incorrect ?
					</Text>
				</TouchableOpacity>
			</View>
			<View style={styles.otpContainer}>
				{otp.map((value, index) => (
					<TextInput
						key={index}
						style={styles.input}
						keyboardType="numeric"
						maxLength={1}
						onChangeText={(text) => handleOTPInputChange(index, text)}
						value={value}
						ref={(ref) => (otpTextInput.current[index] = ref)}
					/>
				))}
			</View>
			{error&&<Text style={{color:'yellow'}}>Invalid OTP</Text>}
			<TouchableOpacity
				style={{
					paddingHorizontal: 15,
					paddingVertical: 15,
					marginTop:20,
					borderRadius: 10,
					backgroundColor: otp.some((value) => !value)
						? 'grey'
						: secondarycolor,
				}}
				onPress={handleSubmit}
			>
				<Text style={{ color: 'white', fontWeight: '600' }}>Submit Data</Text>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		paddingHorizontal: 20,
	},
	otpContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		width: '60%',
		marginBottom: 20,
	},
	input: {
		height: 50,
		width: 50,
		borderColor: '#ccc',
		borderWidth: 1,
		borderRadius: 5,
		textAlign: 'center',
		fontSize: 20,
		marginLeft:6,
		color:'white'
	},
});

export default OtpVerify;
