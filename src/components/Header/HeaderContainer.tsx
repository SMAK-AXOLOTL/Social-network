import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {logout} from "../../redux/authReducer";
import {appStateType} from "../../redux/reduxStore";

type PropsType = {
    isAuth: boolean
    login: string | null
    logout: () => void
}
const HeaderContainer: React.FC<PropsType> = props => {
    return <Header {...props}/>
}

let mapStateToProps = (state: appStateType) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})
export default connect(mapStateToProps, {logout})(HeaderContainer)