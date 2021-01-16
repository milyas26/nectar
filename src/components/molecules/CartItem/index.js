import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Melon, Minus, Plus, Remove} from '../../../assets';
import {fonts} from '../../../utils';

const CartItem = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image source={Melon} style={styles.img} />
      <View style={styles.detail}>
        <View style={styles.item}>
          <View>
            <Text style={styles.title}>Sweet Melon</Text>
            <Text style={styles.unit}>1 Kg</Text>
          </View>
          <TouchableOpacity>
            <Remove />
          </TouchableOpacity>
        </View>
        <View style={styles.priceWrapper}>
          <View style={styles.price}>
            <TouchableOpacity>
              <Minus />
            </TouchableOpacity>
            <Text style={styles.number}>1</Text>
            <TouchableOpacity>
              <Plus />
            </TouchableOpacity>
          </View>
          <Text style={styles.total}>$40</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 20,
    borderBottomColor: '#E2E2E2',
    borderBottomWidth: 1,
    alignItems: 'center',
  },
  img: {
    width: '100%',
    height: '60%',
    flex: 1,
  },
  detail: {
    flex: 3,
    marginLeft: 30,
  },
  item: {
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontFamily: fonts.primary[700],
    fontSize: 16,
    color: '#181725',
    lineHeight: 18,
  },
  unit: {
    fontFamily: fonts.primary[600],
    fontSize: 14,
    color: '#7C7C7C',
  },
  priceWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  price: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  number: {
    fontFamily: fonts.primary[600],
    paddingHorizontal: 10,
    fontSize: 16,
  },
  total: {
    fontFamily: fonts.primary[600],
    fontSize: 16,
  },
});
