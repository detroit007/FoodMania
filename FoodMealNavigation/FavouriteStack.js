import React from 'react';
import {Text} from 'react-native'

import { createStackNavigator } from '@react-navigation/stack';
import FavouriteScreen from '../screens/FavouriteScreen';
import MealDetailsScreen from '../screens/MealDetailsScreen';

import Icon from 'react-native-vector-icons/FontAwesome5'
import Color from '../constants/Color'

const Stack = createStackNavigator();

const FavouriteStack = () => {
    return(
        <Stack.Navigator
          screenOptions={{
            headerStyle:{
              backgroundColor: Platform.OS === 'android' ? Color.primaryColor : '',
            },
            headerTintColor : Platform.OS === 'android' ? 'white' : Color.primaryColor,
            headerTitleAlign: 'center',
            headerTitleStyle: {
                width: 170
            }
          }}
        >
            <Stack.Screen 
              name='Favourite' 
              component={FavouriteScreen} 
              options={({navigation})=>({
                title: <Text numberOfLines={1} >Favourites</Text>,
                  headerLeft: ()=> <Icon name="bars" onPress={()=>{navigation.toggleDrawer()}}
                  color={Platform.OS === 'android' ? 'white' : Color.primaryColor} 
                 style={{paddingLeft: 5}} size={22}/>,
                })   }
            />
            <Stack.Screen name='MealDetail' component={MealDetailsScreen} />
        </Stack.Navigator>
    );
}

export default FavouriteStack;