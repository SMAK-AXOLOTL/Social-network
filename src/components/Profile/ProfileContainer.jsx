import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile} from "../../redux/profileReducer";
import {useLocation, useNavigate, useParams} from "react-router-dom";


class ProfileContainer extends React.Component{
    componentDidMount() {
        this.props.getUserProfile(this.props.router.params.userId)
    }
    render() {
        return<div>
            <Profile {...this.props} profile={this.props.profile}/>
        </div>
    }
}

function withRouter(Component){
    function ComponentWithRouterProps(props){
        let location = useLocation
        let navigate = useNavigate()
        let params = useParams()
        return(
            <Component
                {...props}
                router={{location,navigate,params}}
            />
        )
    }
    return ComponentWithRouterProps
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
})

export default connect(mapStateToProps,{getUserProfile})(withRouter(ProfileContainer))
