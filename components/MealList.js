import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import { useSelector } from 'react-redux';
 
import MealItem from '../components/MealItem';

const MealList = (props) =>{

    const favoriteMeal = useSelector(state=>  state.meals.favoriteMeal);

    const renderMealItem = itemData =>{

        const isFavorite = favoriteMeal.some(meal=> meal.id === itemData.item.id);

        return(
            <MealItem
                title={itemData.item.title}
                image={itemData.item.imageUrl}
                duration={itemData.item.duration}
                complexity={itemData.item.complexity}
                affordability= {itemData.item.affordability}
                onSelectMeal={()=>{props.navigation.navigate('MealDetail', 
                    {   mealId: itemData.item.id,
                        mealTitle: itemData.item.title,
                        isFav: isFavorite,
                    })
                }}
            />
        );
    }

    return(
        <View style={styles.list} >
            <FlatList
                data={props.listData}
                renderItem={renderMealItem}
                keyExtractor={(item)=> item.id }
            />
        </View>
    );
}

const styles = StyleSheet.create({
    list :{
        flex: 1,
    }
});

export default MealList;