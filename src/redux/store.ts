import { configureStore } from "@reduxjs/toolkit";
import sliceUsers, { setupUsers } from "./sliceUsers";
import sliceValue from "./sliceValue";

const store = configureStore({
  reducer: {
    users: sliceUsers,
    value: sliceValue
  },
});


store.dispatch(setupUsers());

export default store;
