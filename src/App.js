import React, {lazy, Suspense, useEffect} from "react";
import './App.css'
import Navbar from "./components/Navbar/Navbar";
import {HashRouter, Navigate, Route, Routes} from "react-router-dom";
import MusicContainer from "./components/Music/MusicContainer";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import {connect, Provider} from "react-redux";
import Preloader from "./components/Common/Preloader/Preloader";
import store from "./redux/reduxStore";
import {initializeApp} from "./redux/appReducer";
import Users from "./components/Users/Users";
import Header from "./components/Header/Header";
import {Login} from "./components/Login/Login";
import {Messages} from "./components/Messages/Messages";

//TODO make lazy imports and get rid of container components
/*const UsersContainer = React.lazy(() => import("./components/Users/UsersContainer.tsx"))*/
const ProfileContainer = React.lazy(() => import("./components/Profile/ProfileContainer.tsx"))
/*const MessagesContainer = lazy(() => import('./components/Messages/MessagesContainer'))*/


const App = props => {

    useEffect(() => {
        props.initializeApp()
    }, [])

    if (!props.initialized) {
        return <Preloader/>
    }

    return <HashRouter>
        <Provider store={store}>
            <div className='app_wrapper'>
                <Header/>
                <Navbar dialogs={props.dialogsData}/>
                <div className='app_wrapper_content'>
                    <Suspense fallback={<div><Preloader/></div>}>
                        <Routes>
                            <Route path='/messages/*' element={<Messages/>}/>
                            <Route path='/profile/:userId?' element={<ProfileContainer/>}/>
                            <Route path='/music' element={<MusicContainer/>}/>
                            <Route path='/news' element={<News/>}/>
                            <Route path='/users' element={<Users/>}/>
                            <Route path='/music' element={<MusicContainer/>}/>
                            <Route path='/settings' element={<Settings/>}/>

                            <Route path='/login' element={<Login/>}/>

                            <Route path='' element={<Navigate to={"/profile/"}/>}/>
                        </Routes>
                    </Suspense>
                </div>
            </div>
        </Provider>
    </HashRouter>
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized,
    dialogsData: state.messagesPage.dialogsData
})
export default connect(mapStateToProps, {initializeApp})(App);
