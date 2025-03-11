import { configureStore } from "@reduxjs/toolkit";
import { itemsApi } from "../features/itemsApi";
import uiReducer from "../features/uiSlice";

const store = configureStore({
  reducer: {
    [itemsApi.reducerPath]: itemsApi.reducer,
    ui: uiReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(itemsApi.middleware),
});

export default store;
