import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { card_bg, popup_bg, secondarycolor } from '../utiliteis';
import Entypo from 'react-native-vector-icons/Entypo';import { TextInput } from 'react-native';
import OtpVerify from './OtpVerify';
import EnterMobile from './EnterMobile';
;

const SecurePopup = () => {
	const [mobileNumber, setMobileNumber] = useState('');
const [step,setStep]=useState(1);  

	return (
		<View
			style={{
				position: 'absolute',
				flex: 1,
				backgroundColor: 'rgba(0,0,0,0.5)',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				top: 0,
				bottom: 0,
				right: 0,
				left: 0,
			}}
		>
			<View
				style={{
					height: 300,
					width: '70%',
					backgroundColor: popup_bg,
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					borderRadius: 25,
					zIndex: 2,
				}}
			>
				{step == 1 && (
					<>
						<Entypo name="shield" size={200} color={'darkblue'} />
						<TouchableOpacity
							style={{
								paddingHorizontal: 20,
								paddingVertical: 10,
								borderRadius: 8,
								shadowColor: '#000',
								shadowOffset: { width: 0, height: 4 },
								shadowOpacity: 0.8,
								shadowRadius: 2,
								backgroundColor: 'rgb(130, 130, 250)',
								shadowOpacity: 0.4,
								width: '60%',
							}}
							onPress={() => setStep(2)}
						>
							<Text
								style={{
									color: 'white',
									fontWeight: '500',
									fontSize: 18,
									textAlign: 'center',
								}}
							>
								Access
							</Text>
						</TouchableOpacity>
					</>
				)}
				{step == 2 && (
					<EnterMobile
						setStep={setStep}
						mobileNumber={mobileNumber}
						setMobileNumber={setMobileNumber}
					/>
				)}
				{step == 3 && <OtpVerify setStep={setStep} mobileNumber={mobileNumber} />}
			</View>

			{/* user mob no */}
		</View>
	);
}

const styles = StyleSheet.create({
	
});

export default SecurePopup;
