import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { rootreducer } from './rootreducer'

export const store = createStore(rootreducer,{},applyMiddleware(thunk))