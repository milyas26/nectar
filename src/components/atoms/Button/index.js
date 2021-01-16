import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {IconLogout} from '../../../assets';
import {fonts} from '../../../utils/fonts';

const Button = ({label, type, onPress}) => {
  if (label === 'Go to Checkout') {
    return (
      <TouchableOpacity style={styles.container(type)} onPress={onPress}>
        <Text style={styles.text(type)}>{label}</Text>
        <Text style={styles.price}>$12</Text>
      </TouchableOpacity>
    );
  }

  if (label === 'Logout') {
    return (
      <TouchableOpacity style={styles.container(type)} onPress={onPress}>
        <Text style={styles.text(type)}>{label}</Text>
        <View style={styles.logout}>
          <IconLogout />
        </View>
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity style={styles.container(type)} onPress={onPress}>
      <Text style={styles.text(type)}>{label}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: (type) => ({
    backgroundColor: type === 'secondary' ? '#E7E7E7' : '#53B175',
    paddingVertical: 16,
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  }),

  text: (type) => ({
    color: type === 'secondary' ? '#53B175' : '#fff',
    textAlign: 'center',
    fontFamily: fonts.primary[600],
    fontSize: 18,
    marginRight: 10,
  }),
  price: {
    fontFamily: fonts.primary[600],
    fontSize: 14,
    backgroundColor: '#489E67',
    paddingVertical: 5,
    paddingHorizontal: 20,
    position: 'absolute',
    right: 20,
    borderRadius: 4,
    color: '#fff',
  },

  logout: {
    position: 'absolute',
    left: 20,
    borderRadius: 4,
    color: '#fff',
  },
});
