import {appStateType} from "../../redux/reduxStore";

export const getIsAppInitialized = (state: appStateType) => {
    return state.app.initialized
}



