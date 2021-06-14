import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import colors from './utils/colors';

import Contacts from './screen/Contacts';
import Profile from './screen/Profile';
import Favorites from './screen/Favorites';
import User from './screen/User';

const Stack = createStackNavigator();

function ContactsScreen() {
  return (
      <Stack.Navigator>
        <Stack.Screen name="Contacts" component={Contacts} />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
  );
}
function FavoritesScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Favorites" component={Favorites} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  )
}

function UserScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Me" component={User} />
    </Stack.Navigator>
  )
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          showLabel: false,
          activeTintColor: colors.blue,
          inactiveTintColor: colors.gray
        }}
      >
        <Tab.Screen 
          name="Contacts" 
          component={ContactsScreen}
          options={{
            tabBarIcon: ({color}) => (
              <Icon name="list" size={40} color={color} />
            ),}
          }
        />
        <Tab.Screen 
          name="Favorites"
          component={FavoritesScreen}
          options={{
            tabBarIcon: ({color}) => (
              <Icon name="star" size={40} color={color} />
            )
          }}
        />
        <Tab.Screen 
          name="User"
          component={UserScreen}
          options={{
            tabBarIcon: ({color}) => (
              <Icon name="person" size={40} color={color} />
            )
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
