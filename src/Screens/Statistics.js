
import React from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import { card_bg, primarycolor } from '../utiliteis';
import Header from '../components/Header';
import AccessBar from '../components/AccessBar';
import StatisticsCard from '../components/StatisticsCard';


const Staistics = () => {

	return (
		<View style={{ backgroundColor: primarycolor, flex: 1 }}>
			<Header title="Statistics" />
			<AccessBar />
			<StatisticsCard />

		</View>
	);
};

const styles = StyleSheet.create({});

export default Staistics;