const ADD_MESSAGE = 'messages/ADD-MESSAGE'
type AddMessageActionType = {
    type: typeof ADD_MESSAGE
}

const UPDATE_NEW_MESSAGE_TEXT = 'messages/UPDATE-NEW-MESSAGE-TEXT'
type UpdateNewMessageTextActionType = {
    type: typeof UPDATE_NEW_MESSAGE_TEXT,
    payload: string
}

const initialState: InitialStateType = {
    _newMessageText: "",
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

export type InitialStateType = {
    _newMessageText: string
    dialogsData: {id: number, name: string}[]
    messagesData: {id: number, text: string}[]
}

export const messagesReducer = (state: InitialStateType = initialState, action: AddMessageActionType | UpdateNewMessageTextActionType): InitialStateType=> {
    switch (action.type) {
        case ADD_MESSAGE: {
            return {
                ...state,
                messagesData: [...state.messagesData, {id: 7, text: state._newMessageText}],
                _newMessageText: ''
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


export const addMessage = ():AddMessageActionType => ({
        type: ADD_MESSAGE
})

export const updateNewMessageText = (text: string):UpdateNewMessageTextActionType => ({
        type: UPDATE_NEW_MESSAGE_TEXT,
        payload: text
})