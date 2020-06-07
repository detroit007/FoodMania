import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import FiltersScreen from '../screens/FiltersScreen';

import Icon from 'react-native-vector-icons/FontAwesome5'
import Color from '../constants/Color';
import { Alert } from 'react-native';

const Stack = createStackNavigator();

const FilterStack = () =>{


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
            },
          }}
        >

            <Stack.Screen 
                name='FilterScreen' 
                component={FiltersScreen}
                options={({navigation, route})=>({
                    title: 'Filter Meals',
                    headerLeft: ()=> <Icon name="bars"
                                       color='white' 
                                       style={{paddingLeft: 5}}
                                       size={22}
                                       onPress={()=> navigation.toggleDrawer()}
                                        />,
                    headerRight: ()=> <Icon name="save"
                    color='white' 
                    style={{paddingRight: 15}}
                    size={22}
                    onPress={()=>{
                        route.params.save()}}
                    />
              })
            }
            />
        </Stack.Navigator>
    )
}

export default FilterStack;