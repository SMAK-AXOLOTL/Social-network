import React from "react";
import {Form, Formik} from "formik";
import {SelectInput, TextInput} from "../../../utils/FormComponents";
import {useDispatch, useSelector} from "react-redux";
import {appStateType} from "../../../redux/reduxStore";
import {ThunkDispatch} from "redux-thunk";
import {AnyAction} from "redux";
import {getFilter} from "../../../utils/Selectors/UserSelectors";
import {actions} from "../../../redux/usersReducer";
import {FilterType} from "../../../types/types";
import s from './UsersSearchForm.module.css'

export const UsersSearchForm: React.FC = () => {
    const filter = useSelector(getFilter)

    const dispatch: ThunkDispatch<appStateType, unknown, AnyAction> = useDispatch()
    const setFilterData = (term: string, condition: 'Followed' | 'Unfollowed' | '') => {
        let conditionToBool: boolean | null

        switch (condition) {
            case 'Followed':
                conditionToBool = true
                break
            case 'Unfollowed':
                conditionToBool = false
                break
            case '':
                conditionToBool = null
                break
            default:
                conditionToBool = null
                break
        }

        const dispatchedObj: FilterType = {
            term: term,
            onlyShow: conditionToBool
        }

        dispatch(actions.setFilter(dispatchedObj))
    }
    const clearFilterForm = () => {
        dispatch(actions.setFilter({term: '', onlyShow: null}))
        dispatch(actions.setCurrentPage(1))
    }
    const onlyShowFieldInit = (booleanValue: boolean | null) => {

        return (booleanValue === null
                ? '' as 'Followed' | 'Unfollowed' | ''
                : (booleanValue
                    ? "Followed" as 'Followed' | 'Unfollowed' | ''
                    : "Unfollowed" as 'Followed' | 'Unfollowed' | '')
        )
    }

    return <>
        <Formik
            enableReinitialize
            initialValues={{
                term: filter.term,
                onlyShow: onlyShowFieldInit(filter.onlyShow)
            }}
            onSubmit={(values) => {
                setFilterData(values.term, values.onlyShow)
            }}>
            <Form>
                <TextInput
                    name='term'
                    type='text'
                    placeholder='Type username here'
                />
                <SelectInput name={'onlyShow'}>
                    <option value={''}>Show All</option>
                    <option value={"Followed"}>Show Followed Only</option>
                    <option value={"Unfollowed"}>Show Unfollowed Only</option>
                </SelectInput>
                <button>Find</button>
            </Form>
        </Formik>
        <button className={s.clearButton} onClick={clearFilterForm}>Clear Filters</button>
    </>
}