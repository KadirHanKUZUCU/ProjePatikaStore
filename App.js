import React from 'react';
import {
  Text,
  View,
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  TextInput,
} from 'react-native';
import StoreCard from './StoreCards';
import store_data from './store_data.json';

const App = () => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View>
        <Text style={styles.storeTitle}>PATIKASTORE</Text>
        <TextInput style={styles.searchBox} placeholder="Ara..." />
      </View>
      <View>
        <FlatList
          numColumns={2}
          style={styles.storeListe}
          data={store_data}
          renderItem={({item}) => <StoreCard store={item} 
          />}
        />
      </View>
    </SafeAreaView>
  );
};
export default App;

const styles = StyleSheet.create({
  mainContainer: {
    padding: 5,
    flex:1,
    marginBottom:10
  },
  storeTitle: {
    color: '#800080',
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  searchBox: {
    height: 40,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#dee2e6',
  },
});
