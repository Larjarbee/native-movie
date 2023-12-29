import { TouchableOpacity, Image } from 'react-native';
import React from 'react';

const ScreenHeaderBtn = ({ iconUrl }) => {
  return (
    <TouchableOpacity>
      <Image source={iconUrl} className='w-10 h-10 rounded-full mr-2' />
    </TouchableOpacity>
  );
};

export default ScreenHeaderBtn;
