import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';

const ScreenHeaderBtn = ({ iconUrl }) => {
  return <TouchableOpacity>{iconUrl}</TouchableOpacity>;
};

export default ScreenHeaderBtn;
