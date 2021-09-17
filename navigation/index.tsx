import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Home from '../screens/Home'
import Suggestion from '../screens/Suggestion'
import Profile from '../screens/Profile'
import Society from '../screens/Society'
import Class from '../screens/Class'
import Tithe from '../screens/Tithe'
import Hymns from '../screens/Hymns'
import Bulletin from '../screens/Bulletin'
import Service from '../screens/Service'

const Stack = createNativeStackNavigator()

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{headerShown: false}}
          name='Home'
          component={Home}
        />
        <Stack.Screen name='Profile' component={Profile} />
        <Stack.Screen name='Society' component={Society} />
        <Stack.Screen name='Class' component={Class} />
        <Stack.Screen name='Tithe' component={Tithe} />
        <Stack.Screen name='Hymns' component={Hymns} />
        <Stack.Screen name='Service' component={Service} />
        <Stack.Screen
          name='Bulletin'
          component={Bulletin}
        />
        <Stack.Screen
          name='Suggestion'
          component={Suggestion}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation
