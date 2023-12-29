import { StatusBar } from 'expo-status-bar';
import { ScrollView, View, Text, SafeAreaView, TextInput } from 'react-native';
import Carousels from '../../components/carousel/Carousels';
import TopRatedMovie from '../../components/movies/TopRatedMovie';
import LatestMovie from '../../components/movies/LatestMovie';
import ScreenHeaderBtn from '../../components/ScreenHeaderBtn';
const profileImg = require('../../assets/pic.jpg');

export default function Home() {
  return (
    <View style={{ flex: 1, backgroundColor: '#040D12' }}>
      <SafeAreaView className='absolute z-10 flex flex-row items-center justify-between w-full'>
        <View className='border border-red-50 w-[83%] py-3 px-1 rounded-lg ml-2'>
          <TextInput
            // value={searchTerm}
            // onChangeText={(text) => setSearchTerm(text)}
            placeholder='What are you looking for?'
            placeholderTextColor='white'
            className='text-white'
          />
        </View>
        <ScreenHeaderBtn iconUrl={profileImg} />
      </SafeAreaView>
      <ScrollView>
        <Carousels />
        <TopRatedMovie />
        <LatestMovie />
      </ScrollView>
      <StatusBar style='auto' />
    </View>
  );
}
