import {connect} from "react-redux";
import Music from "./Music";
import {setMusicAC} from "../../redux/musicReducer";

let mapStateToProps = (state) => ({
    musicData: state.musicPage.musicData
})

let mapDispatchToProps = (dispatch) => {
    return {
        setMusic: (musicData) => {
            dispatch(setMusicAC(musicData))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Music)