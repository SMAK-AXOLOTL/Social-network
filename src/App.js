import React, {useEffect} from "react";
import s from './App.css';
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MusicContainer from "./components/Music/MusicContainer";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import MessagesContainer from "./components/Messages/MessagesContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import Redirector from "./components/Common/Redirector";
import {connect, Provider} from "react-redux";
import {initializeApp} from "./redux/appReducer";
import Preloader from "./components/Common/Preloader/Preloader";
import store from "./redux/reduxStore";


const App = props => {

    useEffect(() => {
        props.initializeApp()
    }, [])

    if (!props.initialized) {
        return <Preloader/>
    }

    return <BrowserRouter>
        <Provider store={store}>
            <div className='app_wrapper'>
                <HeaderContainer/>
                <Navbar dialogs={props.dialogsData}/>
                <div className='app_wrapper_content'>
                    <Routes>
                        <Route path='/messages/*' element={
                            <MessagesContainer store={props.store}/>
                        }/>
                        <Route path='/profile/:userId?' element={
                            <ProfileContainer/>
                        }/>
                        <Route path='/music' element={<MusicContainer/>}/>
                        <Route path='/news' element={<News/>}/>
                        <Route path='/users' element={<UsersContainer/>}/>
                        <Route path='/music' element={<MusicContainer/>}/>
                        <Route path='/settings' element={<Settings/>}/>
                        <Route path='/login' element={<Login/>}/>
                        <Route path='' element={<Redirector to={'/profile'}/>}/>
                    </Routes>
                </div>
            </div>
        </Provider>
    </BrowserRouter>
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized,
    dialogsData: state.messagesPage.dialogsData
})
export default connect(mapStateToProps, {initializeApp})(App);
