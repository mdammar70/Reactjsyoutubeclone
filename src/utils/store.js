import { configureStore } from "@reduxjs/toolkit";
import sidebarSlice from "./sidebarSlice";
import chatSlice from "./chatSlice";

const store = configureStore({
  reducer: {
    sidebar: sidebarSlice,
    chat:chatSlice
  },
});

export default store;
