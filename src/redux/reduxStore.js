import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import {profileReducer} from "./profileReducer";
import {sidebarReducer} from "./sidebarReducer";
import {messagesReducer} from "./messagesReducer";
import {usersReducer} from "./usersReducer";
import {musicReducer} from "./musicReducer";
import {authReducer} from "./authReducer";
import thunkMiddleWare from "redux-thunk";


let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    musicPage: musicReducer,
    auth: authReducer
})

const store = createStore(reducers, applyMiddleware(thunkMiddleWare))

window.store = store

export default store