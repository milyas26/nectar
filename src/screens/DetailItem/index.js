import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  Apple,
  BackArrow,
  DownArrow,
  FavouriteInactive,
  MinusIcon,
  Pluscon,
  RightArrow,
  StarIcon,
  UploadIcon,
} from '../../assets';
import {Button, Gap} from '../../components';
import {fonts} from '../../utils';

const DetailItem = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.imgWrapper}>
          <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <BackArrow />
            </TouchableOpacity>
            <TouchableOpacity>
              <UploadIcon />
            </TouchableOpacity>
          </View>
          <Image source={Apple} style={styles.img} />
        </View>
        <View style={styles.detail}>
          <View style={styles.label}>
            <View>
              <Text style={styles.titleItem}>Natural Red Apple</Text>
              <Text style={styles.unit}>1 Kg</Text>
            </View>
            <TouchableOpacity>
              <FavouriteInactive />
            </TouchableOpacity>
          </View>
          <View style={styles.unitWrapper}>
            <View style={styles.sum}>
              <TouchableOpacity>
                <MinusIcon />
              </TouchableOpacity>
              <View style={styles.numberWrapper}>
                <Text style={styles.number}>1</Text>
              </View>
              <TouchableOpacity>
                <Pluscon />
              </TouchableOpacity>
            </View>
            <Text style={styles.price}>$4.56</Text>
          </View>
        </View>
        <View style={styles.detailsWrapper}>
          <TouchableOpacity style={styles.itemDetail}>
            <View style={styles.itemHeader}>
              <Text style={styles.title}>Product Detail</Text>
              <DownArrow />
            </View>
            <Text style={styles.text}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
              quia ex. Architecto distinctio at dolorum, ipsa et cum cupiditate
              doloremque.
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.itemDetail}>
            <View style={styles.itemHeader}>
              <Text style={styles.title}>Nutritions</Text>
              <View style={styles.nutritionUnit}>
                <Text style={styles.sumNutritions}>100gr</Text>
                <RightArrow />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.itemDetail}>
            <View style={styles.itemHeader}>
              <Text style={styles.title}>Reviews</Text>
              <View style={styles.rating}>
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
              </View>
              <RightArrow />
            </View>
          </TouchableOpacity>
          <Gap height={60} />
        </View>
      </ScrollView>
      <View style={styles.button}>
        <Button label="Add to Basket" />
      </View>
    </View>
  );
};

export default DetailItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  imgWrapper: {
    backgroundColor: '#F2F3F2',
    padding: 20,
    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  img: {
    width: 320,
    height: 200,
    marginVertical: 20,
  },
  detail: {
    paddingHorizontal: 20,
  },
  label: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 30,
  },
  titleItem: {
    color: '#181725',
    fontSize: 20,
    fontFamily: fonts.primary[600],
  },
  unit: {
    color: '#7C7C7C',
    fontSize: 16,
    fontFamily: fonts.primary[600],
    lineHeight: 20,
  },
  unitWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sum: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  numberWrapper: {
    width: 45,
    height: 45,
    borderColor: '#E2E2E2',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
    borderRadius: 17,
  },
  number: {
    color: '#7C7C7C',
    fontSize: 16,
    fontFamily: fonts.primary[700],
  },
  price: {
    color: '#181725',
    fontSize: 24,
    fontFamily: fonts.primary[700],
  },
  detailsWrapper: {
    padding: 20,
  },
  itemDetail: {
    paddingVertical: 20,
    borderTopWidth: 1,
    borderTopColor: '#E2E2E2',
  },
  itemHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontFamily: fonts.primary[600],
    color: '#181725',
    fontSize: 16,
    flex: 2,
  },
  text: {
    fontFamily: fonts.primary[600],
    fontSize: 13,
    color: '#7C7C7C',
    textAlign: 'justify',
  },
  nutritionUnit: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sumNutritions: {
    marginRight: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: '#EBEBEB',
    color: '#7C7C7C',
    borderRadius: 5,
  },
  rating: {
    flexDirection: 'row',
    marginRight: 20,
  },
  button: {
    position: 'absolute',
    width: '100%',
    padding: 20,
    bottom: 0,
  },
});
