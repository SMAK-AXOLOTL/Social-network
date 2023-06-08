import {connect} from "react-redux";
import Music from "./Music";
import {setMusic} from "../../redux/musicReducer";

let mapStateToProps = (state) => ({
    musicData: state.musicPage.musicData
})




export default connect(mapStateToProps, {setMusic})(Music)