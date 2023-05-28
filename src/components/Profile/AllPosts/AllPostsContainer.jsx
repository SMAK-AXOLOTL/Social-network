import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profileReducer";
import AllPosts from "./AllPosts";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        postsData: state.profilePage.postsData,
        newPostText: state.profilePage._newPostText
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => {
            dispatch(updateNewPostTextActionCreator(text))
        },
        addPost: () => {
            dispatch(addPostActionCreator())
        }
    }
}

const AllPostsContainer = connect(mapStateToProps,mapDispatchToProps)(AllPosts)

export default AllPostsContainer