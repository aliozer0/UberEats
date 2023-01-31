import reducers from "./reducers/index";
import { configureStore } from "redux";

export default function configureStore(initialState) {
  const store = configureStore(reducers, initialState);
  return store;
}
