import React from 'react';
import {View, Text} from 'react-native';
import TextStyle from './style';

const TitleText = props => {
  return (
    <View>
      <Text
        style={[
          TextStyle.textFont,
          {fontWeight: props.fontWeight, marginTop: props.marginTop},
        ]}>
        {props.title}
      </Text>
    </View>
  );
};
export default TitleText;
