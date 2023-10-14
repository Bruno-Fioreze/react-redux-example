import { configureStore } from "@reduxjs/toolkit";
import sliceUsers from "./sliceUsers";
import sliceValue from "./sliceValue";

const store = configureStore({
  reducer: {
    users: sliceUsers,
    value: sliceValue
  },
});

export default store;
