// tasksSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const API_URL = 'https://671af01bacf9aa94f6ac1539.mockapi.io/task';

// Thunk cho việc lấy danh sách công việc
export const fetchTasks = createAsyncThunk('tasks/fetchTasks', async () => {
  const response = await fetch(API_URL);
  return response.json();
});

// Thunk cho việc xóa công việc
export const deleteTask = createAsyncThunk('tasks/deleteTask', async (taskId) => {
  await fetch(`${API_URL}/${taskId}`, { method: 'DELETE' });
  return taskId; // Trả về ID của công việc đã xóa
});

// Thunk cho việc thêm/sửa công việc
export const addEditTask = createAsyncThunk('tasks/addEditTask', async (task) => {
  const method = task.id ? 'PUT' : 'POST';
  const response = await fetch(task.id ? `${API_URL}/${task.id}` : API_URL, {
    method,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ task_name: task.task_name }),
  });
  return response.json();
});

// Tạo slice
const tasksSlice = createSlice({
  name: 'tasks',
  initialState: { tasks: [], loading: false, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.loading = false;
        state.tasks = action.payload;
      })
      .addCase(fetchTasks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(deleteTask.fulfilled, (state, action) => {
        state.tasks = state.tasks.filter(task => task.id !== action.payload);
      })
      .addCase(addEditTask.fulfilled, (state, action) => {
        const updatedTasks = state.tasks.filter(task => task.id !== action.payload.id);
        state.tasks = [...updatedTasks, action.payload];
      });
  },
});

export const selectTasks = (state) => state.tasks.tasks;

export default tasksSlice.reducer;
