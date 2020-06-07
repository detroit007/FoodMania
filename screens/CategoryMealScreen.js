import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { useSelector } from 'react-redux';
import MealList from '../components/MealList';

const CategoryMealScreen = ({ navigation, route}) =>{

  const availableMeals = useSelector(state => state.meals.filterMeal);

    const {CategoryId} = route.params; 
       
    const selectedMeals = availableMeals.filter(meal=> meal.categoryId.indexOf(CategoryId)>=0);

    if(selectedMeals.length === 0 || !selectedMeals ){
      return(
        <View style={styles.content}>
            <Text>
                No meals found.Maybe check your filters?
            </Text>
        </View>
      )
    } else{
      return(
        <MealList listData={selectedMeals} navigation={navigation}/>

        );
      }
}

const styles = StyleSheet.create({
  content :{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})

export default CategoryMealScreen;