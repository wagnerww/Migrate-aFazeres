import { createStore, compose } from "redux";
import reducers from "./rootReducers";

const createAppropriateStore =
  process.env.NODE_ENV === "development"
    ? console.tron.createEnhancer
    : () => {};

const store = createStore(reducers(), compose(createAppropriateStore()));

if (process.env.NODE_ENV === "development") {
  console.tron.log(store.getState());
}

export default store;
