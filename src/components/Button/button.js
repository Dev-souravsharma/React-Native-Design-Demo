import React from 'react';
import {Button, View} from 'react-native';
import buttonStyle from './buttonStyle';
const CustomButton = props => {
  return (
    <View style={buttonStyle.container}>
      <Button title={props.title} color="#4CAF50" />
    </View>
  );
};
export default CustomButton;
