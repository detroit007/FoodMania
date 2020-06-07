import { MEAL } from '../../data/dummy-data';
import { TOGGLE_MEAL, SET_FILTERS } from '../actions/meals';
const initialState = {
    meals: MEAL,
    filterMeal: MEAL,
    favoriteMeal: [],
};

const mealReducer = (state = initialState , action) =>{
    switch(action.type){
        case TOGGLE_MEAL:
            
            const existingIndex = state.favoriteMeal.findIndex(meal => meal.id == action.mealId);           
            if(existingIndex >=0){
                const updatedFavMeal = [...state.favoriteMeal]
                updatedFavMeal.splice(existingIndex, 1);
                return {...state, favoriteMeal: updatedFavMeal}
            } else{
                const favMeal = state.meals.find(meal=> meal.id == action.mealId);
                return {...state, favoriteMeal: state.favoriteMeal.concat(favMeal)}
            };
        case SET_FILTERS:
            const availableFilter = action.filters;
            const filteredMeal = state.meals.filter(meal=>{
                if(availableFilter.isGluten && !meal.isGluentFree ){
                    return false;
                }
                if(availableFilter.isLactose && !meal.isLactoseFree){
                    return false
                }
                if(availableFilter.isVegan && !meal.isVegan){
                    return false
                }
                if(availableFilter.isVegetarian && !meal.IsVegetarian){
                    return false;
                }
                return true;
            });
            return {...state, filterMeal: filteredMeal}
            
        default:
            return state;
    }
}

export default mealReducer;