import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { StoreContext } from '@/hooks/useStore';
import { stores } from '@/stores';

SplashScreen.preventAutoHideAsync();

const Layout = () => {
	useEffect(() => {
		SplashScreen.hideAsync();
	}, []);

	return (
		<StoreContext.Provider value={stores}>
			<Stack>
				<Stack.Screen name='index' options={{ headerShown: false }} />
			</Stack>

			<StatusBar style='auto' />
		</StoreContext.Provider>
	);
};

export default Layout;
