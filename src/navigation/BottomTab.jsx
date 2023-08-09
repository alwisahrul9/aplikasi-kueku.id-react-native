import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../layout/Home';
import Shop from '../layout/Shop';
import Favorite from '../layout/Favorite';
import Profile from '../layout/Profile';

import HomeActive from './../asset/NavIcon/homeActive.png'
import ShopActive from './../asset/NavIcon/shopActive.png'
import FavoriteActive from './../asset/NavIcon/favoriteActive.png'
import ProfileActive from './../asset/NavIcon/profileActive.png'

import HomeIcon from './../asset/NavIcon/home.png'
import ShopIcon from './../asset/NavIcon/shop.png'
import FavoriteIcon from './../asset/NavIcon/favorite.png'
import ProfileIcon from './../asset/NavIcon/profile.png'

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
      <Tab.Navigator screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 70,
          paddingBottom: 10,
          paddingTop: 10,
        },
        tabBarHideOnKeyboard: true
      }}>
        <Tab.Screen name="Home" component={Home} 
          options={{
            tabBarIcon: ({focused}) => {
              if(focused){
                return (
                  <Image source={HomeActive}/>
                )
              } else {
                return (
                  <Image source={HomeIcon}/>
                )
              }
            },
            tabBarActiveTintColor: '#ED517D'
          }}
        />
        <Tab.Screen name="Shop" component={Shop}
          options={{
            tabBarIcon: ({focused}) => {
              if(focused){
                return (
                  <Image source={ShopActive}/>
                )
              } else {
                return (
                  <Image source={ShopIcon}/>
                )
              }
            },
            tabBarActiveTintColor: '#ED517D'
          }}
        />
        <Tab.Screen name="Favorite" component={Favorite}
          options={{
            tabBarIcon: ({focused}) => {
              if(focused){
                return (
                  <Image source={FavoriteActive}/>
                )
              } else {
                return (
                  <Image source={FavoriteIcon}/>
                )
              }
            },
            tabBarActiveTintColor: '#ED517D'
          }}
        />
        <Tab.Screen name="Profile" component={Profile}
          options={{
            tabBarIcon: ({focused}) => {
              if(focused){
                return (
                  <Image source={ProfileActive}/>
                )
              } else {
                return (
                  <Image source={ProfileIcon}/>
                )
              }
            },
            tabBarActiveTintColor: '#ED517D'
          }}
        />
      </Tab.Navigator>
  );
}

const styles = StyleSheet.create({})

export default BottomTab;
