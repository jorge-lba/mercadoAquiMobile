import React from 'react';
import {StatusBar, View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native'
import {AppLoading} from 'expo'
import { Feather as Icon } from '@expo/vector-icons'

import {Roboto_400Regular, Roboto_500Medium} from '@expo-google-fonts/roboto'
import {Ubuntu_700Bold, useFonts} from '@expo-google-fonts/ubuntu'

import Routes from './src/routes'

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Ubuntu_700Bold
  })

  if(!fontsLoaded){
    return <AppLoading/>
  }

  return (
    <>
      <StatusBar barStyle='dark-content' backgroundColor='transparent' translucent />
        <View style={styles.top} >
          <TouchableOpacity style={{paddingTop:40, marginLeft: 20}} >
            <Icon name='menu' color='#333' size={25} />
          </TouchableOpacity>
          <Image source={require('./src/assets/logohorizontal.png')} style={styles.logo} />
        </View>
      <Routes />
    </>
  );
}

const styles = StyleSheet.create({
  top:{
    height:70,
    backgroundColor:'#FFE600',
    flexDirection:'row',
    shadowColor:'#000',
    shadowOffset:{
      width:0,
      height:1
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },

  topBar:{
    height:36,
    marginTop:5,
    justifyContent:'center',
    flexDirection:'row',
    // marginTop: 18
  },

  logo:{
    resizeMode: 'contain',
    marginTop:40,
    marginHorizontal: '25%',
    height: 24
    
  },

  button:{
    backgroundColor:'#333',
    height:20,
    width:97,
    marginHorizontal: 20,
    borderRadius:10,
    alignItems:'center'
  }
})