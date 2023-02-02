import reducers from "./reducers/index";
import { createStore } from "redux";

export default function configureStore(initialState) {
  const store = createStore(reducers, initialState);
  return store;
}
