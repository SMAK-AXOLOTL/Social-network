import {useSelector} from "react-redux";
import React from "react";
import Users from "./Users";
import Preloader from "../Common/Preloader/Preloader";
import {getIsFetching} from "../../utils/Selectors/UserSelectors";

const UsersContainer: React.FC = () => {
    const isFetching = useSelector(getIsFetching)

    return <>
        {isFetching
            ? <Preloader/>
            : <Users/>}
    </>
}
export default UsersContainer