import React, {useEffect, useState} from 'react'
import {View, Image, StyleSheet, TouchableOpacity, ScrollView, Text} from 'react-native'
import axios from 'axios'

const Home = () => {
  const [initItems, setInitItems] = useState([])

  useEffect( () => {

  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.cardsContainer} >
        <ScrollView horizontal >
          <TouchableOpacity style = {styles.cards} onPress = { () => {} }>
            <Image source={ {uri:"http://mlb-s2-p.mlstatic.com/687012-MLA41826108211_052020-I.jpg"}} style = {{height: 200, resizeMode : 'contain', margin: 5 }}/>
          </TouchableOpacity>
          <TouchableOpacity style = {styles.cards} onPress = { () => {} }>
            <Image source={ {uri:"http://mlb-s2-p.mlstatic.com/687012-MLA41826108211_052020-I.jpg"}} style = {{height: 200, resizeMode : 'contain', margin: 5 }}/>
          </TouchableOpacity>
          <TouchableOpacity style = {styles.cards} onPress = { () => {} }>
            <Image source={ {uri:"http://mlb-s2-p.mlstatic.com/687012-MLA41826108211_052020-I.jpg"}} style = {{height: 200, resizeMode : 'contain', margin: 5 }}/>
          </TouchableOpacity>
          <TouchableOpacity style = {styles.cards} onPress = { () => {} }>
            <Image source={ {uri:"http://mlb-s2-p.mlstatic.com/687012-MLA41826108211_052020-I.jpg"}} style = {{height: 200, resizeMode : 'contain', margin: 5 }}/>
          </TouchableOpacity>
          <TouchableOpacity style = {styles.cards} onPress = { () => {} }>
            <Image source={ {uri:"http://mlb-s2-p.mlstatic.com/687012-MLA41826108211_052020-I.jpg"}} style = {{height: 200, resizeMode : 'contain', margin: 5 }}/>
          </TouchableOpacity>
        </ScrollView>
      </View>
      <View style={styles.itemContainer}>
        <ScrollView horizontal >
            <TouchableOpacity style = {styles.itens} onPress = { () => {} }>
              <Image source={ {uri:"http://mlb-s2-p.mlstatic.com/687012-MLA41826108211_052020-I.jpg"}} style = {{...styles.itens, resizeMode : 'contain'}}/>
              <Text>Test</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.itens} onPress = { () => {} }>
              <Image source={ {uri:"http://mlb-s2-p.mlstatic.com/687012-MLA41826108211_052020-I.jpg"}} style = {{...styles.itens, resizeMode : 'contain'}}/>
              <Text>Test</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.itens} onPress = { () => {} }>
              <Image source={ {uri:"http://mlb-s2-p.mlstatic.com/687012-MLA41826108211_052020-I.jpg"}} style = {{...styles.itens, resizeMode : 'contain'}}/>
              <Text>Test</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.itens} onPress = { () => {} }>
              <Image source={ {uri:"http://mlb-s2-p.mlstatic.com/687012-MLA41826108211_052020-I.jpg"}} style = {{...styles.itens, resizeMode : 'contain'}}/>
              <Text>Test</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.itens} onPress = { () => {} }>
              <Image source={ {uri:"http://mlb-s2-p.mlstatic.com/687012-MLA41826108211_052020-I.jpg"}} style = {{...styles.itens, resizeMode : 'contain'}}/>
              <Text>Test</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.itens} onPress = { () => {} }>
              <Image source={ {uri:"http://mlb-s2-p.mlstatic.com/687012-MLA41826108211_052020-I.jpg"}} style = {{...styles.itens, resizeMode : 'contain'}}/>
              <Text>Test</Text>
            </TouchableOpacity>
          </ScrollView>
      </View>
      <View>
        
      </View>
    </View>
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
    backgroundColor: '#fff'
  },

  itemContainer: {
    height: 110,
    width: '100%',
    backgroundColor: '#f0f0f0',
  },

  itens:{
    height:70,
    width:70,
    borderRadius: 25,
    marginHorizontal: 5,
    alignItems:'center',
    marginTop:5
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