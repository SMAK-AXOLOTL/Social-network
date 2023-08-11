import {useNavigate} from "react-router-dom";
import React, {useEffect} from "react";
import {useSelector} from "react-redux";
import {getIsAuth} from "../utils/Selectors/AuthSelectors";

export const useAuthRedirect = () => {
    const isAuth = useSelector(getIsAuth)
    const navigate = useNavigate()

    useEffect(() => {
        if (!isAuth) navigate("/login")
    }, [isAuth])
}