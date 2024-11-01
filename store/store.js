// store.js
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import taskReducer from './reducers';
import { watchFetchTasks, watchDeleteTask, watchAddEditTask } from './sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(taskReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(watchFetchTasks);
sagaMiddleware.run(watchDeleteTask);
sagaMiddleware.run(watchAddEditTask);

export default store;
