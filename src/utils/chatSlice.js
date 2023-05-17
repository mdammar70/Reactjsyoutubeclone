import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    message: [],
  },
  reducers: {
    addMessage: (state, action) => {
      if (state.message.length > 15) state.message.splice(15, 1);
      state.message.unshift(action.payload);
    }, 
  },
});
export const { addMessage } = chatSlice.actions;
export default chatSlice.reducer;
