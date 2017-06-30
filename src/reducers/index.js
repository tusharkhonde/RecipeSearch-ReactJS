import {combineReducers} from 'redux';
import { SET_RECIPES, FAVORITE_RECIPE } from '../actions';

function recipes( state = [], actions) {
    switch (actions.type){
        case SET_RECIPES:
            return actions.items;
        default:
            return state;
    }
}

function favoriteRecipes( state = [], actions) {
    switch (actions.type){
        case FAVORITE_RECIPE:
            state = [...state,actions.recipe]
            return state;
        default:
            return state;
    }
}


const rootReducers = combineReducers({recipes,favoriteRecipes});

export default rootReducers;