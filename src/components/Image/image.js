import React from 'react';
import {View, Image} from 'react-native';
import imageStyle from './style';

const ImageLogo = () => {
  return (
    <View style={imageStyle.container}>
      <Image
        source={require('../../assets/logo.png')}
        style={imageStyle.imageSize}
      />
    </View>
  );
};
export default ImageLogo;
