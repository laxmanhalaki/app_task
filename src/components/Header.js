import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { primarycolor } from '../utiliteis';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Header = (props) => {
	return (
		<View
			style={{
				padding: 10,
				backgroundColor: primarycolor,
				display: 'flex',
				flexDirection:'row',
				alignItems: 'center',
				borderBottomWidth:1,
				borderBottomColor:'black'
			}}
		>
			<FontAwesome name="chevron-left" color="white" size={20}/>
			<Text style={{color:'white',fontSize:20,marginLeft:15}}>{props.title}</Text>
		</View>
	);
}

const styles = StyleSheet.create({})

export default Header;
