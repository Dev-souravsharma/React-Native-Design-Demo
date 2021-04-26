import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import CustomButton from './src/components/Button/button';
import ImageLogo from './src/components/Image/image';
import InputText from './src/components/Input/input';
import TitleText from './src/components/Text/text';
class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageLogo />
        <TitleText title="Username" fontWeight="bold" marginTop={10} />
        <InputText placeholder="Enter Username" />
        <TitleText title="Password" fontWeight="bold" marginTop={10} />
        <InputText placeholder="Enter Password" />
        <CustomButton title="Sign in" />
        <TitleText title="forgot password?" marginTop={20} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eaeaea',
    padding: 24,
  },
});
export default App;
