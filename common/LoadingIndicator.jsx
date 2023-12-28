import { ActivityIndicator, View } from 'react-native';
import React from 'react';

const LoadingIndicator = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <ActivityIndicator size='large' color='#22092C' />
    </View>
  );
};

export default LoadingIndicator;
