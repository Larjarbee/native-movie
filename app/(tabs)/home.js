import { StatusBar } from 'expo-status-bar';
import { ScrollView, View } from 'react-native';
import Carousels from '../../components/carousel/Carousels';
import TopRatedMovie from '../../components/movies/TopRatedMovie';
import LatestMovie from '../../components/movies/LatestMovie';

export default function Home() {
  return (
    <View style={{ flex: 1, backgroundColor: '#040D12' }}>
      <ScrollView>
        <Carousels />
        <TopRatedMovie />
        <LatestMovie />
      </ScrollView>
      <StatusBar style='auto' />
    </View>
  );
}
