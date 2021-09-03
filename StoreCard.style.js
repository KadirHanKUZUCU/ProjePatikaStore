import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  storeContainer: { 
    flex:1,
    borderRadius:5,
    backgroundColor: '#dee2e6',
    marginTop:10,
    marginRight:10,
    justifyContent:'space-around'
    
  },
  storeImage: {

   height:Dimensions.get('window').height /4,
    margin:10
  },
  storeTitle: {
    fontWeight:'bold',
    fontSize:18,
    marginLeft:10
      
  },
  storePrice: {
    fontSize:15,
    marginLeft:10

  },
  storeStock: {
    color:'red',
    fontSize:20,
    fontWeight:'bold',
    marginLeft:10,
    marginBottom:10
  },
});
