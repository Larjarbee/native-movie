import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import React from 'react';
import MovieCard from './MovieCard';
import useSWR from 'swr';
import { baseUrl, fetcher } from '../../common/fetcher';
import { MOVIE_API_KEY } from '@env';
import LoadingIndicator from '../../common/LoadingIndicator';

const movieApiKey = MOVIE_API_KEY;

const TopRatedMovie = () => {
  const { data, error, isLoading } = useSWR(
    `${baseUrl}/movie/top_rated?api_key=${movieApiKey}`,
    fetcher
  );

  return (
    <View style={{ marginHorizontal: 10, marginVertical: 20 }}>
      <Text style={{ fontFamily: 'DMMedium', color: 'white', fontSize: 20 }}>
        Top Rated
      </Text>

      <View>
        {isLoading ? (
          <LoadingIndicator />
        ) : error ? (
          <Text style={{ color: 'white' }}>Something went wrong</Text>
        ) : (
          <FlatList
            data={data?.results}
            renderItem={({ item }) => (
              <MovieCard
                item={item}
                // handleCardPress={handleCardPress}
              />
            )}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item?.id}
            contentContainerStyle={{ columnGap: 16 }}
            horizontal
          />
        )}
      </View>
    </View>
  );
};

export default TopRatedMovie;
