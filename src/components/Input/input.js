import React from 'react';
import {View, TextInput} from 'react-native';
import TextInputStyle from './inputstyle';
const InputText = props => {
  return (
    <View>
      <TextInput
        style={TextInputStyle.textInput}
        placeholder={props.placeholder}
        placeholderTextColor="grey"
      />
    </View>
  );
};
export default InputText;
