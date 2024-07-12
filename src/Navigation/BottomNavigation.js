import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Screens/Home';
import Payment from '../Screens/Payment';
import Profile from '../Screens/Profile';
import Statistics from '../Screens/Statistics';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { primarycolor, secondarycolor } from '../utiliteis';

const Tab = createBottomTabNavigator();


export default function BottomNavigation() {
	return (
		<Tab.Navigator
			screenOptions={{
				tabBarActiveTintColor: secondarycolor,
				tabBarInactiveBackgroundColor: primarycolor,
				headerShown: false,
				tabBarStyle: {
					height: 60,
					paddingHorizontal: 5,
					paddingTop: 0,
					backgroundColor: primarycolor,
					position: 'absolute',
					borderTopWidth: 0,
					paddingBottom:4,
				},
			}}
		>
			<Tab.Screen
				name="Home"
				component={Home}
				options={{
					tabBarLabel: 'Home',
					tabBarIcon: ({ color, size }) => (
						<MaterialCommunityIcons name="home" color={color} size={size} />
					),
				}}
				header={false}
			/>
			<Tab.Screen
				name="Payment"
				component={Payment}
				options={{
					tabBarLabel: 'Payment',
					tabBarIcon: ({ color, size }) => (
						<MaterialCommunityIcons
							name="credit-card-outline"
							color={color}
							size={size}
						/>
					),
				}}
			/>
			<Tab.Screen
				name="Profile"
				component={Profile}
				options={{
					tabBarLabel: 'Profile',
					tabBarIcon: ({ color, size }) => (
						<AntDesign name="user" color={color} size={size} />
					),
				}}
			/>
			<Tab.Screen
				name="Statistics"
				component={Statistics}
				options={{
					tabBarLabel: 'Statistics',
					tabBarIcon: ({ color, size }) => (
						<MaterialCommunityIcons
							name="chart-bar"
							color={color}
							size={size}
						/>
					),
				}}
			/>
		</Tab.Navigator>
	);
}
