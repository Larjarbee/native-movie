import { Stack } from 'expo-router';
import { useFonts } from 'expo-font';

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
          headerShown: false,
        }}
      />
    </Stack>
  );
}
