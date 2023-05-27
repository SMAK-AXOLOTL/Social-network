import {combineReducers, legacy_createStore as createStore} from "redux";
import {profileReducer} from "./profileReducer";
import {sidebarReducer} from "./sidebarReducer";
import {dialogsReducer} from "./dialogReducer";
import {usersReducer} from "./usersReducer";


let reducers = combineReducers
({
    profilePage:    profileReducer,
    dialogsPage:    dialogsReducer,
    sidebar:    sidebarReducer,
    usersPage: usersReducer
})

/*const store = configureStore({reducer: reducers})*/

const store = createStore(reducers)
export default store