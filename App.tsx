import React from 'react';
import {StatusBar, View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native'
import {AppLoading} from 'expo'
import { Feather as Icon } from '@expo/vector-icons'

import {Roboto_400Regular, Roboto_500Medium} from '@expo-google-fonts/roboto'
import {Ubuntu_700Bold, useFonts} from '@expo-google-fonts/ubuntu'

import Routes from './src/routes'
import { RectButton } from 'react-native-gesture-handler';

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
        <Image source={require('./assets/logo.png')} style={styles.logo} />
        <View style={styles.topBar} >
          <TouchableOpacity style={{position:'relative'}} >
            <Icon name='menu' color='#333' size={25} />
          </TouchableOpacity>
          <TouchableOpacity style={{marginLeft:'65%'}} >
            <Icon name='search' color='#333' size={25} /> 
          </TouchableOpacity>
          <TouchableOpacity style={{marginHorizontal:10}} >
            <Icon name='shopping-cart' color='#333' size={25} />
          </TouchableOpacity>
  
        </View>
        <View style={styles.topBar}>
          <Text style={{marginHorizontal: 10}}>
            <Icon name='map-pin' color='#333' size={18} /> 
          </Text>
          <Text >Enviar para Edu - Rua 9 435</Text>
          <RectButton style={styles.button} >
            <Text style={{color:'#fff'}}>Localizar</Text>
          </RectButton>

        </View>
      </View>
      <Routes />
    </>
  );
}

const styles = StyleSheet.create({
  top:{
    height:150,
    backgroundColor:'#FFE600',
    justifyContent:'center',
  },

  topBar:{
    height:40,
    justifyContent:'center',
    flexDirection:'row',
    // marginTop: 18
  },

  logo:{
    resizeMode: 'contain',
    marginTop:20,
    paddingLeft:360,
    height: 45
    
  },
  input:{
    backgroundColor:'#f5f5f5',
    width:'80%'
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