import {createStore,applyMiddleware,compose} from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers/rootReducer';
import {watcherSaga} from './sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

const store = createStore(
    rootReducer,
    {},
    window.devToolsExtension
    ? compose(
          applyMiddleware(...middlewares),
          window.devToolsExtension(),
      )
    : applyMiddleware(...middlewares),);

sagaMiddleware.run(watcherSaga);

export default store;