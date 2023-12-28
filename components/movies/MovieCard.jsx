import { View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { AntDesign } from '@expo/vector-icons';

const MovieCard = ({ item }) => {
  const url = 'https://image.tmdb.org/t/p//w500';
  return (
    <TouchableOpacity style={{ marginVertical: 5, padding: 1 }}>
      <View>
        <Image
          source={{ uri: url + item?.poster_path }}
          style={{ width: 195, height: 300, borderRadius: 10 }}
        />
      </View>
    </TouchableOpacity>
  );
};

export default MovieCard;
