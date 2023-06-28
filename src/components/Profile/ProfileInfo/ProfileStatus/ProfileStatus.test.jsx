/*
import React from "react";
import ProfileStatus from "./ProfileStatus";
import {create} from "react-test-renderer";
import {cleanup, render} from "@testing-library/react";

describe('Status Component', () => {

    afterEach(cleanup)

    test('Status from props gets into local State', () => {
        const {getByText} = render(<ProfileStatus status={'Basic status'}/>)
        expect(getByText(/Initial/i).textContent).toBe('Basic status')
    })

    /!*test('Status from props gets into local State', () => {
        const component = create(<ProfileStatus status='Basic status'/>)
        const instance = component.getInstance()
        expect(instance.state.status).toBe('Basic status')
    })*!/
})*/
