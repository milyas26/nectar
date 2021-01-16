import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import CardCategory from '../../components/atoms/CardCategory';
import {
  Bakery,
  Beverages,
  CookingOil,
  Dairy,
  FreshFruits,
  Meat,
} from '../../assets';
import {Gap, Search} from '../../components';
import {fonts} from '../../utils';
import {Dimensions} from 'react-native';

const Explore = () => {
  return (
    <View style={styles.main}>
      <Text style={styles.title}>Find Products</Text>
      <Search />
      <View style={styles.container}>
        <CardCategory
          color="#E8F8EE"
          borderColor="#9FD3B2"
          label="Fresh Fruit & Vegetables"
          img={FreshFruits}
        />
        <CardCategory
          color="#FDE3C8"
          borderColor="#ECDECF"
          label="Cooking Oil & Ghee"
          img={CookingOil}
        />
        <CardCategory
          color="#FFDFD8"
          borderColor="#F7A593"
          label="Meat & Fish"
          img={Meat}
        />
        <CardCategory
          color="#F0E3F4"
          borderColor="#D3B0E0"
          label="Bakery & Snacks"
          img={Bakery}
        />
        <CardCategory
          color="#FEF6DE"
          borderColor="#FDE598"
          label="Dairy & Eggs"
          img={Dairy}
        />
        <CardCategory
          color="#DCF3FF"
          borderColor="#B7DFF5"
          label="Beverages"
          img={Beverages}
        />
      </View>
      <Gap height={60} />
    </View>
  );
};

export default Explore;

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#fff',
    height: Dimensions.get('window').height,
  },
  title: {
    padding: 20,
    paddingBottom: 10,
    fontFamily: fonts.primary[700],
    fontSize: 18,
    textAlign: 'center',
  },
  container: {
    padding: 20,
    paddingTop: 15,
    flex: 1,
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
});
