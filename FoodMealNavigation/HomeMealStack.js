import React from 'react';
import { Platform, Text, Dimensions, Alert } from 'react-native';



import {createStackNavigator} from '@react-navigation/stack'

import CategoryScreen from '../screens/CategoriesScreen';
import CategoryMealScreen from '../screens/CategoryMealScreen';
import MealDetailsScreen from '../screens/MealDetailsScreen';

import { enableScreens } from 'react-native-screens'

import Icon from 'react-native-vector-icons/FontAwesome5';
import Icons from 'react-native-vector-icons/Entypo';

import Color from '../constants/Color'

enableScreens();
const Stack = createStackNavigator();

const HomeMealStack = () =>{

  return(
      <Stack.Navigator
        screenOptions={{
          headerStyle:{
            backgroundColor: Platform.OS === 'android' ? Color.primaryColor : '',
          },
          headerTintColor : Platform.OS === 'android' ? 'white' : Color.primaryColor,
          headerTitleAlign: 'center',
        }}
      >

        <Stack.Screen 
          name='Category' 
          component={CategoryScreen}
          options={({navigation})=>({
          title: <Text numberOfLines={1} >Meals</Text>,
            headerLeft: ()=> <Icon name="bars" onPress={()=>{navigation.toggleDrawer()}}
            color={Platform.OS === 'android' ? 'white' : Color.primaryColor} 
           style={{paddingLeft: 5}} size={22}/>,
          })   }
        />
        <Stack.Screen
          name='CategoryMeal'
          component={CategoryMealScreen}
          options={({route})=>({title: <Text  numberOfLines={1}>{route.params.CategoryTitle}</Text>})}
        />
        <Stack.Screen
          name='MealDetail'
          component={MealDetailsScreen}
          options={
            ({route})=>({title: <Text  numberOfLines={1} >{route.params.mealTitle}</Text>,
              headerRight: ()=>
                    <Icons  name= { route.params.isFav ? 'star' : 'star-outlined'} style={{paddingRight: 10}} size={18} 
                        color={ Platform.OS === 'android' ? 'white' : 
                        Color.primaryColor} 
                        size={23}
                        onPress={()=>{
                        route.params.toggleMeal()}}
                    />
             })
            }
        />
      </Stack.Navigator>
  );
}

export default HomeMealStack;