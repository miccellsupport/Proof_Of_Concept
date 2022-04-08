import React from 'react';
import { enableScreens } from 'react-native-screens';
enableScreens();
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/pages/Login';
import Menu from './src/pages/Menu';
import Profile from './src/pages/Profile';
import ListData from './src/pages/menus/ListData';
import Scanbarcode from './src/pages/scanbarcode';

// Screen support
// import PMS1 from './src/pages/menus/pms/PMS1';
// import PMS2 from './src/pages/menus/pms/PMS2';
// import SBM1 from './src/pages/menus/sbm/SBM1';
// import SBM2 from './src/pages/menus/sbm/SBM2';
// import WMS1 from './src/pages/menus/wms/WMS1';
// import WMS2 from './src/pages/menus/wms/WMS2';
// import WMS3 from './src/pages/menus/wms/WMS3';
// import WMS4 from './src/pages/menus/wms/WMS4';
// import WMS5 from './src/pages/menus/wms/WMS5';
// import WMS6 from './src/pages/menus/wms/WMS6';
// import OTH1 from './src/pages/menus/other/OTH1';

const Stack = createNativeStackNavigator();
const screenOptionStyle = { headerShown: false };
export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator screenOptions={screenOptionStyle}>
				<Stack.Screen name="Login" component={Login} />
				<Stack.Screen name="Menu" component={Menu} />
				<Stack.Screen name="Profile" component={Profile} />
				<Stack.Screen name="ListData" component={ListData}/>
				<Stack.Screen name="Scanbarcode" component={Scanbarcode} />

				{/* Screen support */}
				{/* <Stack.Screen name="PMS1" component={PMS1} />
				<Stack.Screen name="PMS2" component={PMS2} />
				<Stack.Screen name="SBM1" component={SBM1} />
				<Stack.Screen name="SBM2" component={SBM2} />
				<Stack.Screen name="WMS1" component={WMS1} />
				<Stack.Screen name="WMS2" component={WMS2} />
				<Stack.Screen name="WMS3" component={WMS3} />
				<Stack.Screen name="WMS4" component={WMS4} />
				<Stack.Screen name="WMS5" component={WMS5} />
				<Stack.Screen name="WMS6" component={WMS6} />
				<Stack.Screen name="OTH1" component={OTH1} /> */}
			</Stack.Navigator>
		</NavigationContainer>
	);
}
