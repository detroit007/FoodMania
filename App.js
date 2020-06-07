import React from 'react';

import {View } from 'react-native';

import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import mealReducer from './store/reducers/meals';

import DrawerNavStack from './FoodMealNavigation/DrawerNavStack';

const rootReducer = combineReducers({
  meals: mealReducer,
});

const store = createStore(rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  
  );


const App: () => React$Node = () => {

  return (

      <Provider store={store}>
        <DrawerNavStack/>
      </Provider>
    
  );
};

export default App;