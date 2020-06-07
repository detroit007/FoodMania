import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import FilterStack from './FilterStack';
import HomeMealStack from './HomeMealStack';
import CustomDrawer from '../drawer/CustomDrawer';
import Color from '../constants/Color';
import BottomTabStack from './BottomTabStack';

const Drawer = createDrawerNavigator();

const DrawerNavStack = (props) =>{
    return(
        <NavigationContainer>
            <Drawer.Navigator 
                drawerContent={props => <CustomDrawer {...props} />}
                drawerStyle={{
                    marginTop: -4,
                }}
                drawerContentOptions={{
                    activeTintColor: Color.accentColor,
                    inactiveTintColor: "black"
                }}
            >
                <Drawer.Screen 
                    name='BottomTab' 
                    component={BottomTabStack} 
                    options={{
                        title: 'Meals'
                    }}
                />
                <Drawer.Screen 
                    name='FilterStack' 
                    component={FilterStack} 
                    options={{
                        title: 'Filter'
                    }}
                />



            </Drawer.Navigator>
            </NavigationContainer>

    );
}

export default DrawerNavStack;