import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MealList from '../components/MealList'

import { useSelector } from 'react-redux';

const FavouriteScreen = ({navigation, route}) =>{

  const FavItems = useSelector(state => state.meals.favoriteMeal);

    if(FavItems.length == 0 || !FavItems ){
        return(
            <View style={styles.content}>
                <Text>
                    No favorite meals found.Try to add some.
                </Text>
            </View>
        )
    }else{
        return(
            <MealList listData={FavItems} navigation={navigation} />
        )
}
};

const styles = StyleSheet.create({
    content :{
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default FavouriteScreen;