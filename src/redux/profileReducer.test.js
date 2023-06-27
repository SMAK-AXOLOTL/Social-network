import React from "react";
import {addPostActionCreator, deletePost, profileReducer, updateNewPostTextActionCreator} from "./profileReducer";

let initialState = {
    postsData: [
        {id: 1, message: 'I\'m scared', rating: 0},
        {id: 2, message: 'Am I alone here?', rating: 0},
        {id: 3, message: 'Hello?', rating: 0},
        {id: 4, message: 'Where is everybody?', rating: 0},
        {id: 5, message: 'Hello, world!', rating: 1},
    ]
}

it('posts array length should be incremented',() => {
    let action = addPostActionCreator('please work')
    let newState = profileReducer(initialState, action)
    expect(newState.postsData.length).toBe(6)
})

it('new post message should be "please work"',() => {
    let action1 = updateNewPostTextActionCreator('please work')
    let newState1 = profileReducer(initialState, action1)
    let action2 = addPostActionCreator()
    let newState2 = profileReducer(newState1, action2)
    expect(newState2.postsData[5].message).toBe('please work')
})


it('new post rating must be = 0',() => {
    let action = addPostActionCreator('please work')
    let newState = profileReducer(initialState, action)
    expect(newState.postsData[5].rating).toBe(0)
})

it('posts array length after deleting a post should be decremented', () => {
    let action = deletePost(1)
    let newState = profileReducer(initialState, action)
    expect(newState.postsData.length).toBe(4)
})

it('posts array length after deleting a post WITH WRONG ID should NOT be decremented', () => {
    let action = deletePost(-1)
    let newState = profileReducer(initialState, action)
    expect(newState.postsData.length).toBe(5)
})