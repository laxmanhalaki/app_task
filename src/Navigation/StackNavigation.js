import { createStackNavigator } from '@react-navigation/stack';
import Home from '../Screens/Home';
import Payment from '../Screens/Payment';
import Profile from '../Screens/Profile';
import Statistics from '../Screens/Statistics';

const Stack = createStackNavigator();

export default function StackNavigation() {
	return (
		<Stack.Navigator>
			<Stack.Screen name="Home" component={Home} />
			<Stack.Screen name="Payment" component={Payment} />
			<Stack.Screen name="Profile" component={Profile} />
			<Stack.Screen name="Statistics" component={Statistics} />
		</Stack.Navigator>
	);
}
