const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'

let initialState = {
    _newMessageText: '',
    getNewMessageText() {
        return this._newMessageText
    },
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
}

export const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            return {
                ...state,
                _newMessageText: '',
                messagesData: [...state.messagesData, {id: 7, text: state._newMessageText}]
            }
        }
        case UPDATE_NEW_MESSAGE_TEXT: {
            return {
                ...state,
                _newMessageText: action.payload
            }
        }
        default: {
            return state
        }
    }
}

/*const dialogsReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(ADD_MESSAGE, (state, action) => {
            let newMessage = {
                id: 7, text: state._newMessageText
            }
            state.messagesData.push(newMessage)
            state._newMessageText = ''
        })
        .addCase(UPDATE_NEW_MESSAGE_TEXT, (state, action) => {
            state._newMessageText = action.payload
        })
})*/

export const addMessageActionCreator = () => ({
    type: ADD_MESSAGE
})
export const updateNewMessageTextActionCreator = (text) => ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    payload: text
})