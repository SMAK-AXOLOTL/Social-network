import {profileReducer} from "./profileReducer";
import {sidebarReducer} from "./sidebarReducer";
import {dialogsReducer} from "./dialogReducer";

let store = {
    _rerenderEntireTree() {
        console.log('No observers')
    },

    _state: {
        profilePage: {
            postsData: [
                {id: 1, message: 'I have no mouth, but i have to scream', rating: 20},
                {id: 2, message: 'Am I alone here?', rating: 89},
                {id: 3, message: 'Hello?', rating: 3},
                {id: 4, message: 'Where is everybody?', rating: -1},
                {id: 5, message: 'Hello, world!', rating: 0},
            ],
            _newPostText: '',
            getNewPostText() {
                return this._newPostText
            },
            setNewPostText(value) {
                this._newPostText = value
            }
        },
        dialogsPage: {
            _newMessageText: '',
            dialogsData: [
                {id: 1, name: 'Серега'},
                {id: 2, name: 'Андрей'},
                {id: 3, name: 'Даниил'},
                {id: 4, name: 'Владимир'},
                {id: 5, name: 'Клон-1'},
                {id: 6, name: 'Банкетный'},
                {id: 7, name: 'Python'},
            ],
            messagesData: [
                {id: 1, text: 'Hi!'},
                {id: 2, text: 'How are you?'},
                {id: 3, text: "Whatcha doin'?"},
                {id: 4, text: 'Ayo'},
                {id: 5, text: 'Chop-Chop'},
                {id: 6, text: 'Bath in holy flames'},
            ]
        },
        sidebar : {}
    },

    getState() {
        return this._state
    },

    subscribe(observer) {
        this._rerenderEntireTree = observer
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)

        this._rerenderEntireTree(this._state)
    }
}
export default store