// sagas.js
import { call, put, takeLatest } from 'redux-saga/effects';
import {
  FETCH_TASKS_REQUEST,
  FETCH_TASKS_SUCCESS,
  FETCH_TASKS_FAILURE,
  DELETE_TASK_REQUEST,
  DELETE_TASK_SUCCESS,
  DELETE_TASK_FAILURE,
  ADD_EDIT_TASK_REQUEST,
  ADD_EDIT_TASK_SUCCESS,
  ADD_EDIT_TASK_FAILURE,
} from './actions';

const API_URL = 'https://671af01bacf9aa94f6ac1539.mockapi.io/task'; // link  api

function* fetchTasks() {
  try {
    const response = yield call(fetch, API_URL); // Gọi API
    const data = yield response.json(); // Chuyển đổi dữ liệu JSON
    yield put({ type: FETCH_TASKS_SUCCESS, tasks: data }); // gửi action thành công
  } catch (error) {
    yield put({ type: FETCH_TASKS_FAILURE, error }); // gửi action không thành công
  }
}

function* deleteTask(action) {
  try {
    yield call(fetch, `${API_URL}/${action.id}`, { method: 'DELETE' });
    yield put({ type: DELETE_TASK_SUCCESS, id: action.id });
  } catch (error) {
    yield put({ type: DELETE_TASK_FAILURE, error });
  }
}

function* addEditTask(action) {
  const method = action.task.id ? 'PUT' : 'POST';
  const url = action.task.id ? `${API_URL}/${action.task.id}` : API_URL;
  
  try {
    const response = yield call(fetch, url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ task_name: action.task.task_name }),
    });
    const data = yield response.json();
    yield put({ type: ADD_EDIT_TASK_SUCCESS, task: data });
  } catch (error) {
    yield put({ type: ADD_EDIT_TASK_FAILURE, error });
  }
}

export function* watchFetchTasks() {
  yield takeLatest(FETCH_TASKS_REQUEST, fetchTasks);
}

export function* watchDeleteTask() {
  yield takeLatest(DELETE_TASK_REQUEST, deleteTask);
}

export function* watchAddEditTask() {
  yield takeLatest(ADD_EDIT_TASK_REQUEST, addEditTask);
}
