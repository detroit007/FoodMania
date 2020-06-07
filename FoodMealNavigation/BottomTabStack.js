import React from 'react';
import { Platform } from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import  Icon  from 'react-native-vector-icons/FontAwesome5';
import Color from '../constants/Color';
import FavouriteStack from './FavouriteStack';
import DrawerNavStack from './DrawerNavStack';
import HomeMealStack from './HomeMealStack';

const Tab =  createMaterialBottomTabNavigator();

const BottomTabStack = () =>{

    return(
            <Tab.Navigator
                activeColor={Color.accentColor}
                barStyle={{
                    backgroundColor: 'white',
                }}
                labeled={false}
            >

                <Tab.Screen name='HomeMeals' 
                    component={HomeMealStack}
                    options={{
                        tabBarIcon: ({color})=> <Icon color={color} name='utensils' size={23} />
                    }}
                />
                
                <Tab.Screen name='Favourites!' 
                    component={FavouriteStack} 
                    options={{
                        tabBarIcon: ({color})=> <Icon name='star' color={color} size={22} /> 
                    }
                }
                />

            </Tab.Navigator>
    );
}



export default BottomTabStack;