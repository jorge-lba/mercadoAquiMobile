import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

import Home from './pages/home'
import Stores from './pages/Stores'

const AppStack = createStackNavigator()

const Routes = () => {
  return(
    <NavigationContainer>
      <AppStack.Navigator 
        headerMode='none' 
        screenOptions={{
          cardStyle:{
            backgroundColor: '#f5f5f5'
          }
        }}  
      >
        <AppStack.Screen name='Home' component={Home} />
        <AppStack.Screen name='Stores' component={Stores} />

      </AppStack.Navigator>
    </NavigationContainer>
  )
}

export default Routes