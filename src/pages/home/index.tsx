import React from 'react'
import {View, Image, StyleSheet} from 'react-native'

const Home = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../../../assets/logo.png') } />
    </View>
  ) 
}
export default Home

const styles = StyleSheet.create({
  container:{
    flex:1,
    padding:32,
    backgroundColor:'#f5f5f5'
  },

  main:{
    flex:1,
    justifyContent:'center'
  },

  title:{
    color:'#2D3277',
    fontSize: 32,
    fontFamily: 'Ubuntu_700Bold',
    maxWidth: 200
  },

  description:{
    color: '#6c6c80',
    fontSize: 16,
    marginTop: 16,
    fontFamily: 'Roboto_400Regular',
    maxWidth: 260,
    lineHeight: 24
  }

})