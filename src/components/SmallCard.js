import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const SmallCard = (props) => {
	return (
		<View style={styles.card_main}>
		{props.child&&props.child}
		</View>
	);
}

const styles = StyleSheet.create({
card_main:{
padding:15,
borderRadius:10,
backgroundColor:'white',
}
})

export default SmallCard;

