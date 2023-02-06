import { legacy_createStore , applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
// import {StockReducer} from '../Redux/Stock/StockReducer'
import StockSaga from '../Redux/Stock/StockSaga'
import  reducer from './Stock/indexReducer'



const sagaMiddleware = createSagaMiddleware();
export  const store = legacy_createStore(reducer,applyMiddleware(sagaMiddleware));
sagaMiddleware.run(StockSaga);