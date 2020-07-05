import React, {useEffect, useState} from 'react'
import {View, StyleSheet} from 'react-native'
import MapView, { Marker } from 'react-native-maps'
import { requestPermissionsAsync, getCurrentPositionAsync } from 'expo-location'


function Map(props:any){
  const [geolocation, setGeolocation]:[any, any] = useState({})

  useEffect(() => {
    async function loadInitialPosition(){
      const { granted } = await requestPermissionsAsync()
      
      if(granted){
        const {coords} = await getCurrentPositionAsync({
          enableHighAccuracy: true,
        })

        setGeolocation({...coords, latitudeDelta: 0.010,
          longitudeDelta: 0.010})
      }
    
    } 

    loadInitialPosition()

  },[])

  return(
    <View style={styles.containerMap} >
      <MapView style={styles.mapStyle} 
        initialRegion={geolocation}
      >
        <Marker coordinate={{latitude: geolocation.latitude, longitude:geolocation.longitude}} />
      </MapView>
    </View>
  )
}

const styles = StyleSheet.create({

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


export default Map