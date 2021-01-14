import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {Card, TitleCategory} from '../../atoms';
import {Banana, Apple, Melon, Watermelon} from '../.././../assets';

const Groceries = () => {
  return (
    <View style={styles.exclusive}>
      <TitleCategory title="Groceries" />
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.wrapper}>
        <Card img={Banana} title="Banana" unit="1 Kg" price="5.99" />
        <Card img={Apple} title="Red Apple" unit="1 Kg" price="4.56" />
        <Card img={Melon} title="Sweet Melon" unit="1 Kg" price="8.19" />
        <Card img={Watermelon} title="Watermelon" unit="1 Kg" price="3.99" />
      </ScrollView>
    </View>
  );
};

export default Groceries;

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
  },
});
