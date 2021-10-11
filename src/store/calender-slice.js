import { createSlice } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import DUMY_CALENDER from "../data/calender";

const initialState = {
  count: 0,
  event: "",
  date: "",
};
const calenderSlice = createSlice({
  name: "calender",
  initialState: initialState,
  reducers: {
    event(state, action) {
      return {
        event: action.payload,
        date: state.date,
      };
    },
    date(state, action) {
      return {
        event: state.event,
        date: action.payload,
      };
    },
    submit(state) {
      const inputUser = {
        event: state.event,
        date: state.date,
      };
      DUMY_CALENDER.push(inputUser);
      return {
        event: "",
        date: "",
        count: 1,
      };
    },
  },
});
const calenderActions = calenderSlice.actions;

export const HandlerCalender = () => {
  const dispatch = useDispatch();
  const handlerEvent = (event) => {
    dispatch(calenderActions.event(event.target.value));
  };
  const handlerDate = (event) => {
    dispatch(calenderActions.date(event.target.value));
  };
  const handlerSubmit = (event) => {
    event.preventDefault();
    dispatch(calenderActions.submit());
  };
  return [handlerEvent, handlerDate, handlerSubmit];
};

export default calenderSlice.reducer;
