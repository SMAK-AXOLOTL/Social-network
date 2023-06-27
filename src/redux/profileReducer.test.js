import React from "react";
import {addPostActionCreator, profileReducer} from "./profileReducer";


it('posts array length should be incremented',() => {
    let action = addPostActionCreator('please work')
    let initialState = {
        postsData: [
            {id: 1, message: 'I\'m scared', rating: 0},
            {id: 2, message: 'Am I alone here?', rating: 0},
            {id: 3, message: 'Hello?', rating: 0},
            {id: 4, message: 'Where is everybody?', rating: 0},
            {id: 5, message: 'Hello, world!', rating: 0},
        ]
    }
    let newState = profileReducer(initialState, action)
    expect(newState.postsData.length).toBe(6)
})
