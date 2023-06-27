import React from 'react'
import App from './App'
import * as ReactDom from "react-dom";


it('renders without crash', () => {
    const div = document.createElement("div")
    ReactDom.render(<App/>, div)
    ReactDOM.unmountComponentAtNode(div)
})