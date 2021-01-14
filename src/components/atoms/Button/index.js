import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {fonts} from '../../../utils/fonts';

const Button = ({label, type, onPress}) => {
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
    paddingVertical: 13,
    borderRadius: 20,
  }),

  text: (type) => ({
    color: type === 'secondary' ? '#000' : '#fff',
    textAlign: 'center',
    fontFamily: fonts.primary[600],
    fontSize: 18,
  }),
});
