import React from 'react';
import {View, Text, Button, StyleSheet, FlatList, TouchableOpacity} from 'react-native';

import {CATEGORIES} from '../data/dummy-data'
import CategoryGridTile from '../components/CategoryGridTile';

const CategoryScreen = ({navigation}) =>{

    const renderGridItem = (itemData) =>{
        return(
            <CategoryGridTile
                title={itemData.item.title}
                color={itemData.item.color}
                onSelect={()=>{
                    navigation.navigate('CategoryMeal',{
                        CategoryId: itemData.item.id,
                        CategoryTitle: itemData.item.title,
                    })
                }}
            />
        )
    }

 return(
    <FlatList
        numColumns={2}
        data={CATEGORIES}
        renderItem={renderGridItem}
    />
 );
}

const styles = StyleSheet.create({
    container :{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    
});

export default CategoryScreen;