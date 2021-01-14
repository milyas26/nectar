import React from 'react';
import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
import {BGBlur, BrandIconColor} from '../../assets';
import {Button, Gap, InputText} from '../../components';
import {fonts} from '../../utils/fonts';

const Register = ({navigation}) => {
  return (
    <ImageBackground source={BGBlur} style={styles.container}>
      <Gap height={15} />
      <View style={styles.icon}>
        <BrandIconColor />
      </View>
      <Gap height={50} />
      <View style={styles.desc}>
        <Text style={styles.register}>Register</Text>
        <Text style={styles.enter}>Enter your credentials to continue</Text>
      </View>

      <Gap height={30} />
      <View>
        <InputText label="Username" />
        <Gap height={30} />
        <InputText label="Email" />
        <Gap height={30} />
        <InputText label="Password" />
      </View>
      <Gap height={20} />
      <Text style={styles.agree}>
        By continuing you agree to our Terms of Service and Privacy Policy.
      </Text>
      <Button label="Sign Up" />
      <Gap height={15} />
      <View style={styles.signupWrapper}>
        <Text style={styles.new}>Already have an account? </Text>
        <Text
          style={styles.signUp}
          onPress={() => navigation.navigate('Login')}>
          Sign In
        </Text>
      </View>
    </ImageBackground>
  );
};

export default Register;

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
  register: {
    color: '#181725',
    fontFamily: fonts.primary[600],
    fontSize: 26,
  },
  enter: {
    color: '#7C7C7C',
    fontSize: 16,
    fontFamily: fonts.primary[400],
  },
  agree: {
    textAlign: 'left',
    color: '#7C7C7C',
    marginBottom: 10,
    fontSize: 12,
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
