import { createSlice } from '@reduxjs/toolkit';

const taskSlice = createSlice({
  name: 'task',
  initialState: {
    selectedTask: null,
  },
  reducers: {
    selectTask: (state, action) => {
      state.selectedTask = action.payload;
    },
    toggleTaskCompletion: (state) => {
      if (state.selectedTask) {
        state.selectedTask.done = !state.selectedTask.done;
      }
    },
  },
});

export const { selectTask, toggleTaskCompletion } = taskSlice.actions;

export default taskSlice.reducer;
