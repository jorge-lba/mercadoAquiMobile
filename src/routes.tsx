import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { Feather as Icon } from '@expo/vector-icons'

import Home from './pages/home'
import Categorys from './pages/Categorys'

const icon = (iconName:string) => {
  return(
    <Icon name={iconName} size={20} color={'#aaa'} />
  )
}

const AppStack = createBottomTabNavigator()

const Routes = () => {
  return(
    <NavigationContainer>
      <AppStack.Navigator >
        <AppStack.Screen name='Lojas' component={Home} options={{tabBarIcon: () => icon('shopping-bag') }} />
        <AppStack.Screen name='Categorias' component={Categorys} options={{tabBarIcon: () => icon('package'), }} />

      </AppStack.Navigator>
    </NavigationContainer>
  )
}

export default Routes