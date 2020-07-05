import React, {useEffect, useState} from 'react'
import {View, Image, StyleSheet, TouchableOpacity, ScrollView, Text} from 'react-native'
import { Feather as Icon } from '@expo/vector-icons'

import axios from 'axios'

const Home = () => {
  const [initItems, setInitItems] = useState([])

  const nameUser = 'Edu'
  const distance = 50

  useEffect( () => {

  }, [])

  const topCards = (item:any, index:number) => (
    <TouchableOpacity key={index} style = {styles.cards} onPress = { () => {} }>
      <Image source={ {uri:"http://mlb-s2-p.mlstatic.com/687012-MLA41826108211_052020-I.jpg"}} style = {{height: 200, resizeMode : 'contain', margin: 5 }}/>
    </TouchableOpacity>
  )

  const categorys = (item:any, index:number) => (
    <TouchableOpacity key={index} style = {styles.categorys} onPress = { () => {} }>
      <Image source={ {uri:"http://mlb-s2-p.mlstatic.com/687012-MLA41826108211_052020-I.jpg"}} style = {{...styles.categorysImage, resizeMode : 'contain'}}/>
      <Text>Test</Text>
    </TouchableOpacity>
  )

  const items = (item:any, index:number) => (
    <TouchableOpacity key={index} style = {styles.itens} onPress = { () => {} }>
      <Image source={ {uri:"http://mlb-s2-p.mlstatic.com/687012-MLA41826108211_052020-I.jpg"}} style = {{...styles.itensImage, resizeMode : 'contain'}}/>
      <Text>Test</Text>
  </TouchableOpacity>
  )

  const products = (item: any, index:any) => (
    <View key={index} style = {styles.cardList} >
      <TouchableOpacity style={styles.cardImage} onPress = { () => {} }>
        <Image source={ {uri:"http://mlb-s2-p.mlstatic.com/687012-MLA41826108211_052020-I.jpg"}} style = {{height: '100%', resizeMode : 'contain'}}/>
      </TouchableOpacity>
      <View style={styles.cardText}>
        <Text>Titulo</Text>
        <Text>Estado</Text>
        <Text>Descrição</Text>
        <Text>Tags</Text>
      </View>
    </View>
  )

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>

      <View style={{marginVertical: 10}}>
        <TouchableOpacity style={{marginLeft:'88%' }} >
          <Icon name='shopping-cart' color='#333' size={25} />
        </TouchableOpacity>
      </View>
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

      <View style={styles.cardsContainer} >
        <ScrollView horizontal showsHorizontalScrollIndicator={false} >
          {[1,2,3,4,5].map((item, index) => topCards(item ,index))}
        </ScrollView>
      </View>

      <View style={styles.categoryContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} >
          {[1,2,3].map((item, index) => categorys(item, index))}    
        </ScrollView>
      </View>

      <View style={styles.itemContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} >
          {[1,2,3,4,5,6,7,8,9,10].map((item, index) => items(item, index))}
        </ScrollView>
      </View>

      {[0,1,2,3,4,5,6,7,8,9,10].map((item, index) => products(item, index))}

    </ScrollView>
  ) 
}
export default Home

const styles = StyleSheet.create({
  container:{
    flex:1,
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
    borderRadius: 25,
    marginHorizontal: 5,
    alignItems:'center',
    marginTop:5,
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
    height:60,
    width:60,
    borderRadius: 50,
    marginHorizontal: 5,
    alignItems:'center',
    marginTop:5,
  },

  categoryContainer: {
    height: 130,
    width: '100%',
    backgroundColor: '#f0f0f0',
    alignItems:'center',
  },

  categorys:{
    height:90,
    width:90,
    borderRadius: 50,
    marginHorizontal: 5,
    alignItems:'center',
    marginTop:5,
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
    height:90,
    width:90,
    borderRadius: 25,
    marginHorizontal: 5,
    alignItems:'center',
    marginTop:5
  },

  cardList:{
    height:200,
    width:'90%',
    marginHorizontal: 20,
    marginBottom: 10,
    marginTop: 10,
    borderRadius: 8,
    backgroundColor:'#d7d7d8',
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
    backgroundColor:'#fff',
  },

  cardText:{
    height:200,
    width: 200
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