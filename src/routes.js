import React from 'react'
import { View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'

const { Screen, Navigator } = createBottomTabNavigator()

import Following from './pages/Following'
import CommingSoon from './pages/CommingSoon'
import colors from './styles/colors'

export default function Routes() {
  return (
    <NavigationContainer>
      <Navigator 
        tabBarOptions={{
          style: {
            height: 60,
            backgroundColor: colors.primary,
            borderTopWidth: 0,
          },
          tabStyle: {
            alignItems: 'center',
            justifyContent: 'center'
          },
          iconStyle: {
            flex: 1,
            width: 20,
            height: 20,
          },
          labelStyle: {
            fontSize: 10,
            marginTop: 5
          },
          inactiveTintColor: colors.black,
          activeTintColor: colors.purple
        }}
      >
        <Screen name='Following' component={Following} options={{
          tabBarIcon: ({size, focused}) => {
            return (
              <Ionicons 
                name='md-heart'
                size={size}
                color={focused ? colors.purple : colors.black}
              />
            )
          }
        }} />
        <Screen name='Discover' component={CommingSoon} options={{
          tabBarIcon: ({size, focused}) => {
            return (
            <MaterialCommunityIcons
              name='compass-outline'
              size={size}
              color={focused ? colors.purple : colors.black}
            /> 
          )}
        }}
        />
        <Screen name='Browse' component={CommingSoon} options={{
          tabBarIcon: ({size, focused}) => {
            return (
            <Ionicons
              name='md-browsers'
              size={size}
              color={focused ? colors.purple : colors.black}
            /> 
          )}
        }}/>
        <Screen name="Esports" component={CommingSoon} options={{
          tabBarIcon: ({size, focused}) => {
            return (
            <MaterialCommunityIcons
              name='trophy-outline'
              size={size}
              color={focused ? colors.purple : colors.black}
            /> 
          )}
        }}/>
      </Navigator>
    </NavigationContainer>
  )
}
