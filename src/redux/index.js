import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import sneakersReducer from './sneakersReducer';

export const store = createStore(sneakersReducer, applyMiddleware(thunk));
