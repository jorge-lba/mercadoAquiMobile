import React from 'react';
import {StatusBar, View, Image, StyleSheet, Text} from 'react-native'
import {AppLoading} from 'expo'

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
        <Image source={require('./assets/logo.png')} style={styles.logo} />
        <View style={styles.topBar} >
          <Text>Teste</Text>
        </View>
        <View style={styles.topBar}>
          <Text>Localização</Text>
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
    justifyContent:'center'
  },

  topBar:{
    height:30,
    justifyContent:'center'
  },

  logo:{
    resizeMode: 'contain',
    marginTop:20,
    paddingLeft:360,
    height: 45
    
  }
})