import {combineReducers, createStore} from "redux";
import {basketReducer} from "./basketReducer";

const rootReducer = combineReducers({
    basket: basketReducer
})


export type RootStore = ReturnType<typeof rootReducer>
export const store = createStore(rootReducer)