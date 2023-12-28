import { Stack } from 'expo-router';
import { useFonts } from 'expo-font';
import { AntDesign } from '@expo/vector-icons';
import ScreenHeaderBtn from '../components/ScreenHeaderBtn';
import { Text } from 'react-native';

export default function Layout() {
  const [fontsLoaded] = useFonts({
    DMBold: require('../assets/fonts/PlusJakartaSans-Bold.ttf'),
    DMMedium: require('../assets/fonts/PlusJakartaSans-Medium.ttf'),
    DMRegular: require('../assets/fonts/PlusJakartaSans-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Stack>
      <Stack.Screen
        name='(tabs)'
        options={{
          headerTransparent: true,
          headerBlurEffect: true,
          headerShadowVisible: false,
          headerLeft: () => (
            <Text
              style={{ fontFamily: 'DMBold' }}
              className='text-white text-lg'
            >
              Welcome Abiodun
            </Text>
          ),
          headerRight: () => (
            <ScreenHeaderBtn
              iconUrl={<AntDesign name='search1' size={24} color='white' />}
            />
          ),
          headerTitle: '',
        }}
      />
    </Stack>
  );
}
