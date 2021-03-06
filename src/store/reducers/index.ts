import { combineReducers } from "redux";
import { userReducer } from "./UserReducer";

export const rootReducer = combineReducers({
    user: userReducer
});

export type RootReducer = ReturnType<typeof rootReducer>; 