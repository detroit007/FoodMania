import React, {useState, useEffect, useCallback} from 'react';
import {View, Text, StyleSheet, Switch} from 'react-native';

import { setFilters } from '../store/actions/meals'

import { useDispatch } from 'react-redux';

import Color from '../constants/Color';

const FiltersScreen = ({navigation, route}) =>{

    const dispatch = useDispatch()

    const [isGlutenFree, setIsGlutenFree] = useState(false);
    const [IsLactoseFree, SetIsLactoseFree] = useState(false);
    const [IsVegan, SetIsVegan] = useState(false);
    const [IsVegetarian, SetIsVegetarian] = useState(false);

    const myFilterFn = useCallback(() =>{

        const filterValues = {
            isGluten: isGlutenFree,
            isLactose: IsLactoseFree,
            isVegan: IsVegan,
            isVegetarian: IsVegetarian
        }
        dispatch(setFilters(filterValues));
    },[isGlutenFree, IsLactoseFree, IsVegan, IsVegetarian, dispatch])

    useEffect(()=>{
        navigation.setParams({ save: myFilterFn })
    },[myFilterFn])

    const CustomSwitch = (props) =>{
        return(
            <View style={styles.switchStyle}>
                <Text style={{fontSize: 18}}>{props.label}</Text>
                <Switch value={props.value} onValueChange={props.onChange}
                    thumbColor={Color.primaryColor}
                    trackColor={{ true: Color.primaryAccent}}
                />
            </View>
        )
    }

    return(
        <View style={styles.screen}>
            <Text style={styles.headTitle}>Available Filters/ Restrictions</Text>

            <View>
                <CustomSwitch 
                    label='Gluten Free'
                    value={isGlutenFree} 
                    onChange={newVal=>setIsGlutenFree(newVal)}
                />

                <CustomSwitch 
                    label='Lactose Free'
                    value={IsLactoseFree} 
                    onChange={newVal=>SetIsLactoseFree(newVal)}
                />

                <CustomSwitch 
                    label='Vegan'
                    value={IsVegan} 
                    onChange={newVal=>SetIsVegan(newVal)}
                />

                <CustomSwitch 
                    label='Vegetarian'
                    value={IsVegetarian} 
                    onChange={newVal=>SetIsVegetarian(newVal)}
                />

            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    screen :{
        flex: 1
    },
    headTitle :{
        paddingVertical: 10,
        fontSize: 22,
        textAlign: 'center',
    },
    switchStyle :{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 5,
        marginVertical: 15,

    }
});

export default FiltersScreen;