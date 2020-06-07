export const TOGGLE_MEAL = 'TOGGLE_MEAL';

export const SET_FILTERS = 'SET_FILTERS';

export const toggleMealHandler = (id) =>{
    return {
        type: TOGGLE_MEAL,
        mealId: id
    }
}

export const setFilters = filtersSetting =>{
    return{
        type: SET_FILTERS,
        filters: filtersSetting,
    }
}