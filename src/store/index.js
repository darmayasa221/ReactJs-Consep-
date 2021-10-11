import { configureStore } from "@reduxjs/toolkit";
import calenderSlice from "./calender-slice";

const store = configureStore({
  reducer: { calender: calenderSlice },
});

export default store;
