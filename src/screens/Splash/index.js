import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {Logo} from '../../assets';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('GetStarted');
    }, 500);
  }, []);
  return (
    <View style={styles.container}>
      <Logo />
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#53B175',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
