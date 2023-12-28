import {
  View,
  Text,
  TouchableWithoutFeedback,
  Image,
  ImageBackground,
  Dimensions,
} from 'react-native';
import React from 'react';
import useSWR from 'swr';
import { baseUrl, fetcher } from '../../common/fetcher';
import { MOVIE_API_KEY } from '@env';
import Carousel from 'react-native-snap-carousel';
import LoadingIndicator from '../../common/LoadingIndicator';

const movieApiKey = MOVIE_API_KEY;

var { width, height } = Dimensions.get('window');

const Carousels = () => {
  const { data, error, isLoading } = useSWR(
    `${baseUrl}/trending/all/day?api_key=${movieApiKey}`,
    fetcher
  );

  return (
    <View>
      {isLoading ? (
        <LoadingIndicator />
      ) : error ? (
        <Text style={{ color: 'white' }}>Something went wrong</Text>
      ) : (
        <Carousel
          data={data?.results || []}
          renderItem={({ item }) => <MovieCard item={item} />}
          firstItem={1}
          autoplay={true}
          loop={true}
          inactiveSlideOpacity={0.06}
          sliderWidth={width}
          itemWidth={width * 0.62}
          slideStyle={{ display: 'flex', alignItems: 'center' }}
        />
      )}
    </View>
  );
};

export default Carousels;

const MovieCard = ({ item, handleClick }) => {
  const url = 'https://image.tmdb.org/t/p//w500';
  return (
    <TouchableWithoutFeedback>
      <ImageBackground
        resizeMode='cover'
        style={{ width: 420, height: height * 0.45 }}
        source={{ uri: url + item?.backdrop_path }}
      >
        <View
          style={{
            width: 420,
            height: height * 0.5,
            backgroundColor: '#000000c0',
          }}
        >
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              gap: 5,
              paddingVertical: 150,
              paddingHorizontal: 30,
            }}
          >
            <Image
              style={{ width: 150, height: 200, borderRadius: 10 }}
              source={{ uri: `${url + item?.poster_path}` }}
            />
            <Text
              style={{
                fontFamily: 'DMBold',
              }}
              className='text-white text-3xl w-52'
            >
              {item?.title || item?.name}
            </Text>
          </View>
        </View>
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
};
