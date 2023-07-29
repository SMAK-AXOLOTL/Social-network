import React from "react"
import {connect} from "react-redux";
import Music from "./Music";
import {musicItemType, setMusic} from "../../redux/musicReducer";
import {appStateType} from "../../redux/reduxStore";

type PropsType = {
    musicData: Array<musicItemType>
    setMusic: (musicData: Array<musicItemType>) => void
}

const MusicContainer: React.FC<PropsType> = (props) => {
    return <Music {...props}/>
}

let mapStateToProps = (state: appStateType) => {
    return {musicData: state.musicPage.musicData}
}


export default connect(mapStateToProps, {setMusic})(MusicContainer)