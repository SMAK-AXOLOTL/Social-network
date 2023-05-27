const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

let initialState = {
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
}

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            return {
                ...state,
                _newPostText: '',
                postsData: [...state.postsData, {id: 6, message: state._newPostText, rating: 0}]
            }
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                _newPostText: action.payload
            }
        }
        default: {
            return state
        }
    }
}

/*const profileReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(ADD_POST, (state, action) => {
            let newPost = {
                id: 6, message: state._newPostText, rating: 0
            }
            state.postsData.push(newPost)
            state.setNewPostText('')
        })
        .addCase(UPDATE_NEW_POST_TEXT, (state, action) => {
            state._newPostText = action.payload
        })
})*/

export const addPostActionCreator = () => ({
    type: ADD_POST
})

export const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    payload: text
})

