// reducers.js
import {
  FETCH_TASKS_SUCCESS,
  DELETE_TASK_SUCCESS,
  ADD_EDIT_TASK_SUCCESS,
} from './actions';

const initialState = {
  tasks: [],
  loading: false,
  error: null,
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TASKS_SUCCESS:
      return { ...state, tasks: action.tasks };
    case DELETE_TASK_SUCCESS:
      return { ...state, tasks: state.tasks.filter(task => task.id !== action.id) };
    case ADD_EDIT_TASK_SUCCESS:
      const updatedTasks = state.tasks.filter(task => task.id !== action.task.id);
      return { ...state, tasks: [...updatedTasks, action.task] };
    default:
      return state;
  }
};

export default taskReducer;
