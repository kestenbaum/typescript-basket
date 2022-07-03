import {combineReducers, createStore} from "redux";
import {dataReducer} from "./reducers/dataReducer";
import {basketReducer} from "./reducers/basketReducer";

const rootReducer = combineReducers({
    data: dataReducer,
    basket: basketReducer
})


export type RootStore = ReturnType<typeof rootReducer>
export const store = createStore(rootReducer)