// actions.js
export const FETCH_TASKS_REQUEST = 'FETCH_TASKS_REQUEST';
export const FETCH_TASKS_SUCCESS = 'FETCH_TASKS_SUCCESS';
export const FETCH_TASKS_FAILURE = 'FETCH_TASKS_FAILURE';
export const DELETE_TASK_REQUEST = 'DELETE_TASK_REQUEST';
export const DELETE_TASK_SUCCESS = 'DELETE_TASK_SUCCESS';
export const DELETE_TASK_FAILURE = 'DELETE_TASK_FAILURE';
export const ADD_EDIT_TASK_REQUEST = 'ADD_EDIT_TASK_REQUEST';
export const ADD_EDIT_TASK_SUCCESS = 'ADD_EDIT_TASK_SUCCESS';
export const ADD_EDIT_TASK_FAILURE = 'ADD_EDIT_TASK_FAILURE';

// Tạo các hàm action để yêu cầu fetch tasks
export const fetchTasksRequest = () => ({ type: FETCH_TASKS_REQUEST });
export const deleteTaskRequest = (id) => ({ type: DELETE_TASK_REQUEST, id });
export const addEditTaskRequest = (task) => ({ type: ADD_EDIT_TASK_REQUEST, task });
