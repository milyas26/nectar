import React from 'react';
import {Image, ScrollView, StyleSheet} from 'react-native';
import {Banner} from '../../assets';
import {BestSelling, ExclusiveOffer, Gap, Groceries} from '../../components';

const Home = ({navigation}) => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* <Search /> */}
      <Gap height={20} />
      <Image source={Banner} style={styles.banner} />
      <Gap height={20} />
      <ExclusiveOffer />
      <Gap height={20} />
      <BestSelling />
      <Gap height={20} />
      <Groceries />
      <Gap height={115} />
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  banner: {
    width: '90%',
    height: '10%',
    alignSelf: 'center',
    borderRadius: 18,
  },
});
