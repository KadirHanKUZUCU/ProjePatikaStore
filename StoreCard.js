import React from 'react';
import {SafeAreaView, View, Text, Image,} from 'react-native';
import styles from './StoreCard.style';

const StoreCard = ({store}) => {
    return (
    <SafeAreaView style={styles.storeContainer}>
      <Image style={styles.storeImage} source={{uri:store.imgURL}} />
        <Text style={styles.storeTitle}>{store.title}</Text>
        <Text style={styles.storePrice}>{store.price}</Text>
        <Text style={styles.storeStock}>{store.inStock === true ? '' : 'Stokta Yok'}</Text>  
    </SafeAreaView>
  );
};
export default StoreCard;
