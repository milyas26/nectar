import React from 'react';
import {Image, ScrollView, StyleSheet} from 'react-native';
import {Banner} from '../../assets';
import {
  BestSelling,
  ExclusiveOffer,
  Gap,
  Groceries,
  Search,
} from '../../components';

const Home = () => {
  return (
    <ScrollView style={styles.container}>
      <Search />
      <Gap height={20} />
      <Image source={Banner} style={styles.banner} />
      <Gap height={20} />
      <ExclusiveOffer />
      <Gap height={20} />
      <BestSelling />
      <Gap height={20} />
      <Groceries />
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    paddingVertical: 20,
  },
  banner: {
    width: '90%',
    height: 114,
    borderRadius: 15,
    alignSelf: 'center',
  },
});
