import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import React from 'react';
import MovieCard from './MovieCard';
import useSWR from 'swr';
import { baseUrl, fetcher } from '../../common/fetcher';
import { MOVIE_API_KEY } from '@env';
import LoadingIndicator from '../../common/LoadingIndicator';

const movieApiKey = MOVIE_API_KEY;

const LatestMovie = () => {
  const { data, error, isLoading } = useSWR(
    `${baseUrl}/movie/popular?api_key=${movieApiKey}`,
    fetcher
  );

  return (
    <View style={{ marginHorizontal: 10, marginVertical: 20 }}>
      <Text style={{ fontFamily: 'DMMedium', color: 'white', fontSize: 20 }}>
        Latest
      </Text>

      <View>
        {isLoading ? (
          <LoadingIndicator />
        ) : error ? (
          <Text style={{ color: 'white' }}>Something went wrong</Text>
        ) : (
          //   <FlatList
          //     data={data?.results}
          //     renderItem={({ item }) => (
          //
          //     )}
          //     showsHorizontalScrollIndicator={false}
          //     keyExtractor={(item) => item?.id}
          //     contentContainerStyle={{ columnGap: 16 }}
          //     horizontal
          //   />,
          <View className='flex flex-row flex-wrap'>
            {data?.results?.map((item) => (
              <MovieCard
                key={item?.id}
                item={item}
                // handleCardPress={handleCardPress}
              />
            ))}
          </View>
        )}
      </View>
    </View>
  );
};

export default LatestMovie;
