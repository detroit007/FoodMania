import React, { useEffect, useCallback, useState } from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';

import { useSelector, useDispatch } from 'react-redux';
import { toggleMealHandler } from '../store/actions/meals';


const MealDetailsScreen = ({ navigation , route}) =>{

    const [recipeImg, setRecipeImg ] = useState(null);

    const availableMeals = useSelector(state => state.meals.meals);


    const {mealId} = route.params;
    const selectedMeal = availableMeals.filter(meal=> meal.id == mealId);

    const dispatch = useDispatch();

    const isfavoriteMeal = useSelector(state=> state.meals.favoriteMeal).some(meal=> meal.id === mealId);

    const toggleFavoriteMealHandler =  useCallback(() =>{

        dispatch(toggleMealHandler(mealId));

    },[dispatch, mealId]);

    useEffect(()=>{
        const img  = selectedMeal[0].imageUrl;
        setRecipeImg(img)
         navigation.setParams({toggleMeal: toggleFavoriteMealHandler});
    }, [toggleFavoriteMealHandler])

    useEffect(()=>{
        navigation.setParams({isFav: isfavoriteMeal});
    }, [isfavoriteMeal]);



  return(
   <ScrollView >

            <View style={styles.contBody} >

                <Image 
                    style={styles.bgImageg}
                    source={{uri: recipeImg}}
                />


                <View style={styles.mealDetails} > 

                     <Text>{selectedMeal[0].duration}</Text>
                    <Text>{selectedMeal[0].complexity}</Text>
                    <Text>{selectedMeal[0].affordability}</Text>

                </View>

            </View>

            <View >
                <Text style={styles.detailsHeading}>INGREDIENTS</Text>

                    {selectedMeal[0].ingredients.map(ingredient=>
                        <Text key={ingredient} style={styles.text}>{ingredient}</Text>)}

                <Text style={styles.detailsHeading}>STEPS</Text>

                    {selectedMeal[0].steps.map(step=>
                        <Text key={step} style={styles.text}>{step}</Text>)}
                

            </View> 
            
   </ScrollView>
    );
}

const styles = StyleSheet.create({
    bgImageg :{
        width: '100%',
        height: 200,
    },
    contBody :{
        marginHorizontal: 5,
        
    },
    mealDetails :{
        flexDirection: "row",
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        alignItems: 'center' ,
        backgroundColor: '#f5f5f5'  
    },
    mealDataitem :{
        padding: 15,
        borderRadius: 2,
        borderWidth: 1,
        borderColor: '#ccc'
    },
    detailsHeading :{
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingVertical: 15,
    },
    text :{
        padding: 15,
        margin: 5,
        borderRadius: 2,
        borderWidth: 1,
        borderColor: '#ccc'
    }
});

export default MealDetailsScreen;