import React, {useEffect, useState} from 'react'
import {View, Image, StyleSheet, TouchableOpacity, ScrollView, Text, Linking, TextInput, KeyboardAvoidingView, Platform} from 'react-native'
import { Feather as Icon } from '@expo/vector-icons'
import MapView, { Marker } from 'react-native-maps'
import { requestPermissionsAsync, getCurrentPositionAsync } from 'expo-location'
import iconsCategory from '../utils/iconsCategory'

import Map from '../components/map'

import axios from 'axios'

const iconsOption = [
  {
    title: 'Produtos',
    uri: require('../../assets/options/package.png')
  },
  {
    title: 'Supermercado',
    uri:  require('../../assets/options/shopping-cart.png')
  },
  {
    title: 'Serviços',
    uri:  require('../../assets/options/users.png')
  }
]

const Home = () => {
  const [itens, setItens] = useState([])
  const [search, setSearch] = useState('celular')

  const [geolocation, setGeolocation] = useState({
    latitude: -8.2701297,
    longitude: -35.9696649,
    latitudeDelta: 0.04,
    longitudeDelta: 0.04
  })

  const nameUser = 'Edu'
  const distance = 50

  useEffect(() => {
    async function loadInitialPosition(){
      const { granted } = await requestPermissionsAsync()
      
      if(granted){
        const {coords} = await getCurrentPositionAsync({
          enableHighAccuracy: true,
        })

        setGeolocation({...coords, latitudeDelta: 0.014,
          longitudeDelta: 0.014})
      }
    
    } 

    loadInitialPosition()

  },[])

  useEffect( () => {
      axios.get(`https://mercadoaqui.herokuapp.com/search/sort/${search}?latitude=${geolocation.latitude}&longitude=${geolocation.longitude}`)
        .then( response => setItens(response.data) )
  }, [geolocation])

  const topCards = (item:any, index:number) => (
    <TouchableOpacity key={index} style = {styles.cards} onPress = { () => {} }>
      <Image source={ {uri:iconsCategory[0].iconUri}} style = {{height: 200, resizeMode : 'contain', margin: 5 }}/>
    </TouchableOpacity>
  )

  const categorys = (item:any, index:number) => (
    <View key={index} style={{justifyContent:'center', alignContent:'center'}} >
      <TouchableOpacity key={index} style = {styles.categorys} onPress = { () => {} }>
        <Image source={ item.uri} style = {{...styles.categorysImage, resizeMode : 'contain'}}/>
      </TouchableOpacity>
      <Text style={{textAlign:'center', fontSize: 16, alignContent:'center'}} > {item.title} </Text>
    </View>
  )

  const items = (title:string, iconUri:any, index:number) => {
    
    return( 
    <View key={index} style={{justifyContent:'center'}} >  
      <TouchableOpacity style = {styles.itens} onPress = { () => {} }>
        <Image source={ iconUri } style = {{...styles.itensImage, resizeMode : 'contain'}}/>
      </TouchableOpacity>
      <Text style={{textAlign:'center'}}>{ title }</Text>
    </View>
    )
  }

  const products = (item: any, index:any) => (
    <View key={index} style = {styles.cardList} >
      <TouchableOpacity style={styles.cardImage} onPress = { () => Linking.openURL(item.permalink) }>
        <Image source={ {uri:item.thumbnail}} style = {{height: '100%', resizeMode : 'contain'}}/>
      </TouchableOpacity>
      <View style={styles.cardText}>
        <Text style={{fontWeight:'bold', fontSize:16}} >{item.title.slice(0, 24) + ' ...'}</Text>
        <Text style={{marginTop:5}}>{item.address.city_name + (item.address.state_id.replace('BR-',' - '))}</Text>
        <Text style={{marginTop:5}}>Os melhores produtos perto de você</Text>
        <Text style={{marginTop:5, fontSize:14}}>#CompreLocal</Text>
        <Text style={{marginTop:5, fontSize:14}}>{(item.geolocation.distance/1000).toFixed(0) + ' Km de distância'}</Text>

      </View>
    </View>
  )

  const callSearch = () => {
    axios.get(`https://mercadoaqui.herokuapp.com/search/sort/${search}?latitude=${geolocation.latitude}&longitude=${geolocation.longitude}`)
        .then( response => setItens(response.data) )
  }

  return (
    <>
      <KeyboardAvoidingView style={{flex:1}} behavior={ Platform.OS === 'ios' ? 'padding' : undefined } >

        <View style={{paddingVertical: 10, paddingHorizontal:20 , flexDirection:'row', alignItems:'center', backgroundColor:'#fff'}}>
              <TouchableOpacity >
                <Icon name='shopping-cart' color='#333' size={25} />
              </TouchableOpacity>
            
              <TextInput
                  style={{
                    height: 40,
                    width: '78%',
                    borderRadius:20,
                    marginHorizontal:10,
                    textAlign:"center",
                    backgroundColor:'#f6f6f6'
                  }}
                  placeholder={'Buscar'}
                  returnKeyType='go'
                  onSubmitEditing={() => callSearch() }
                  onChangeText={text => setSearch(text)}
              />
              <TouchableOpacity onPress={callSearch} >
                <Icon name='search' color='#333' size={25} />
              </TouchableOpacity>
        </View>
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>

            <View style={{flexDirection:'row'}}>
              <TouchableOpacity style={{backgroundColor: '#3982F3', width:125, height: 30, borderRadius: 10, marginHorizontal: 20, alignItems: 'center', justifyContent:'center'}} >
                <Text style={{color:'#fff', fontWeight: '600'}} >
                  Enviar para {nameUser}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={{alignItems:'flex-end', marginLeft: 60}} >
                <Text style={{fontSize: 10}}>
                  (alterar)
                </Text>
                <Text>
                  {distance}Km de distância 
                </Text>
              </TouchableOpacity>
            </View>
                  {/* <Map /> */}
            <View style={styles.containerMap} >
              <MapView style={styles.mapStyle} 
                initialRegion={geolocation}
              >
               {[geolocation].map((coords, index) => <Marker key={index} coordinate={coords} />)}
              </MapView>
            </View>

            {/* <View style={styles.cardsContainer} >
              <ScrollView horizontal showsHorizontalScrollIndicator={false} >
                {[1,2,3,4,5].map((item, index) => topCards(item ,index))}
              </ScrollView>
            </View> */}

            <View style={styles.categoryContainer}>
              <ScrollView horizontal showsHorizontalScrollIndicator={false} >
                {iconsOption.map((item, index) => categorys(item, index))}    
              </ScrollView>
            </View>

            <View style={styles.itemContainer}>
              <ScrollView horizontal showsHorizontalScrollIndicator={false} >
                {iconsCategory.map((item, index) => items(item.title, item.iconUri, index))}
              </ScrollView>
            </View>

            {itens.map((item, index) => products(item, index))}

        </ScrollView>
      </KeyboardAvoidingView>

    </>
  ) 
}
export default Home

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fff'
  },

  main:{
    flex:1,
    justifyContent:'center'
  },

  cardsContainer:{
    height:230,
    width:'100%',
    marginTop:10
  },

  cards:{
    marginLeft: 10,
    width:320,
    height:'90%',
    borderRadius: 8,
    backgroundColor: '#fff',
    shadowColor:'#000',
    shadowOffset:{
      width:0,
      height:1
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },

  itemContainer: {
    height: 110,
    width: '100%',
    backgroundColor: '#fff',
    marginTop:10,
    paddingTop:10,
  },

  itens:{
    height:60,
    width:60,
    borderRadius: 50,
    marginHorizontal: 11,
    backgroundColor:'#fff',
    alignItems:'center',
    justifyContent:'center',
    shadowColor:'#000',
    shadowOffset:{
      width:0,
      height:1
    },
    shadowOpacity: 0.12,
    shadowRadius: 2.22,

    elevation: 10,
  },

  itensImage:{
    height:40,
    width:40,
  },

  categoryContainer: {
    height: 130,
    width: '100%',
    // backgroundColor: '#fff',
    alignItems:'center',
  },

  categorys:{
    height:76,
    width:76,
    borderRadius: 50,
    marginHorizontal:20,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#fff',
    shadowColor:'#000',
    shadowOffset:{
      width:5,
      height:5
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 10,
  },

  categorysImage:{
    height:45,
    width:45,
    // borderRadius: 25,
    // marginHorizontal: 5,
    // alignItems:'center',
    // marginTop:5
  },

  cardList:{
    height:200,
    width:'90%',
    marginHorizontal: 20,
    marginBottom: 10,
    marginTop: 10,
    padding:5,
    borderRadius: 8,
    backgroundColor:'#fff',
    flexDirection:'row',
    shadowColor:'#000',
    shadowOffset:{
      width:0,
      height:1
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 5,
  },

  cardImage:{
    height: 200,
    width:'50%',
    borderRadius:8,
    padding:5,
  },

  cardText:{
    height:200,
    width: '45%',
    padding:5
  },

  title:{
    color:'#2D3277',
    fontSize: 32,
    fontFamily: 'Ubuntu_700Bold',
    maxWidth: 200
  },

  description:{
    color: '#fff',
    fontSize: 16,
    marginTop: 16,
    fontFamily: 'Roboto_400Regular',
    maxWidth: 260,
    lineHeight: 24
  },
  containerMap: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:10
  },
  mapStyle: {
    width: 332,
    height: 360,
    borderRadius: 8
  },
})