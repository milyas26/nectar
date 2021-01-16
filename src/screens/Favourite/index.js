import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {Button, CartItem, FavItem} from '../../components';
import {fonts} from '../../utils';

const Favourite = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Favourite</Text>
      <ScrollView style={styles.items} showsVerticalScrollIndicator={false}>
        <FavItem />
        <FavItem />
        <FavItem />
        <FavItem />
        <FavItem />
        <FavItem />
      </ScrollView>
      <View style={styles.button}>
        <Button label="Add All to Cart" />
      </View>
    </View>
  );
};

export default Favourite;

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
