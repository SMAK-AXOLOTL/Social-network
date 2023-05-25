import React from 'react';
import './index.css';
import store from "./redux/reduxStore";
import ReactDOM from "react-dom/client";
import App from "./App";
import {Provider} from "react-redux";

const root = ReactDOM.createRoot(document.getElementById('root'));

export const rerenderEntireTree = (state) => {
    root.render(
        <Provider store={store}>
            <App
                state={state}
                dispatch={store.dispatch.bind(store)}
                store={store}
            />
        </Provider>
    );
}

rerenderEntireTree(store.getState())

store.subscribe(() => {
    let state = store.getState()
    rerenderEntireTree(state)
})