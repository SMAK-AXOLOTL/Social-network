import {Navigate} from "react-router-dom";
import React from "react";

export const useAuthRedirect = (isAuth: boolean) => {
    return isAuth ? null : <Navigate to = {'/login'}/>
}