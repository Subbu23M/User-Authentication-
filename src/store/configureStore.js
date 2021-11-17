import {createStore,combineReducers,applyMiddleware} from 'redux';

import thunk from 'redux-thunk';

import registerUsers from '../reducers/registerUsers';

import notesReducer from '../reducers/notesReducer';

// creating store
const configureStore = function(){
    const rootReducer = {
        user:registerUsers,
        notes:notesReducer
    }

    const store = createStore(combineReducers(rootReducer),applyMiddleware(thunk))
    return store;
}

export default configureStore;