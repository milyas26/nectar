import React from 'react';
import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
import {BGBlur, BrandIconColor} from '../../assets';
import {Button, Gap, InputText} from '../../components';
import {fonts} from '../../utils/fonts';

const Login = ({navigation}) => {
  return (
    <ImageBackground source={BGBlur} style={styles.container}>
      <Gap height={15} />
      <View style={styles.icon}>
        <BrandIconColor />
      </View>
      <Gap height={100} />
      <View style={styles.desc}>
        <Text style={styles.login}>Login</Text>
        <Text style={styles.enter}>Enter your email and password</Text>
      </View>

      <Gap height={40} />
      <View>
        <InputText label="Email" />
        <Gap height={40} />
        <InputText label="Password" />
      </View>
      <Text style={styles.forgot}>Forgot Password</Text>
      <Button label="Sign In" onPress={() => navigation.replace('MainApp')} />
      <Gap height={25} />
      <View style={styles.signupWrapper}>
        <Text style={styles.new}>Dont have an account? </Text>
        <Text
          style={styles.signUp}
          onPress={() => navigation.navigate('Register')}>
          Sign Up
        </Text>
      </View>
    </ImageBackground>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: '#fff',
    padding: 30,
  },
  blur: {
    width: '100%',
    height: '200',
  },
  icon: {
    alignItems: 'center',
  },
  login: {
    color: '#181725',
    fontFamily: fonts.primary[600],
    fontSize: 26,
  },
  enter: {
    color: '#7C7C7C',
    fontSize: 16,
    fontFamily: fonts.primary[400],
  },
  forgot: {
    textAlign: 'right',
    color: '#181725',
    marginTop: 20,
    marginBottom: 30,
    fontSize: 14,
    fontFamily: fonts.primary[400],
  },
  signupWrapper: {
    justifyContent: 'center',
    flexDirection: 'row',
  },
  new: {
    color: '#181725',
    fontSize: 14,
    fontFamily: fonts.primary[600],
  },
  signUp: {
    color: '#53B175',
    fontSize: 14,
    fontFamily: fonts.primary[600],
  },
});
