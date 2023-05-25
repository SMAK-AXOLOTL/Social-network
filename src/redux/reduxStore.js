import {combineReducers, legacy_createStore as createStore} from "redux";
import {profileReducer} from "./profileReducer";
import {sidebarReducer} from "./sidebarReducer";
import {dialogsReducer} from "./dialogReducer";


let reducers = combineReducers
({
    profilePage:    profileReducer,
    dialogsPage:    dialogsReducer,
    sidebar:    sidebarReducer
})

/*const store = configureStore({reducer: reducers})*/

const store = createStore(reducers)
export default store