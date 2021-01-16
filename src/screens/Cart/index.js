import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {Button, CartItem} from '../../components';
import {fonts} from '../../utils';

const Cart = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Cart</Text>
      <ScrollView style={styles.items} showsVerticalScrollIndicator={false}>
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
      </ScrollView>
      <View style={styles.button}>
        <Button label="Go to Checkout" />
      </View>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  title: {
    textAlign: 'center',
    fontFamily: fonts.primary[700],
    fontSize: 18,
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#E2E2E2',
  },
  items: {
    padding: 20,
    paddingTop: 0,
  },
  button: {
    paddingHorizontal: 20,
    position: 'absolute',
    bottom: 20,
    width: '100%',
  },
});
