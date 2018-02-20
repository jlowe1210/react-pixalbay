import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk'
import {photoReducer} from './photos.reducer';
import {searchValueReducer} from './searchValueReducer';
import {loadingReducer} from './loadingreducer';
import { searched} from './searched';


let rootReducer = combineReducers({
    photo: photoReducer,
    value: searchValueReducer,
    loading: loadingReducer,
    searched: searched
})

let store = createStore(rootReducer, applyMiddleware(thunk));


export default store;
