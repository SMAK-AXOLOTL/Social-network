import React from "react";
import './App.css';
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
import {connect} from "react-redux";
import {initializeApp} from "./redux/appReducer";
import Preloader from "./components/Common/Preloader/Preloader";


class App extends React.Component{
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if(!this.props.initialized){
            return <Preloader/>
        }

        return <BrowserRouter>
                <div className='app_wrapper'>
                    <HeaderContainer/>
                    <Navbar dialogs={this.props.store.getState().messagesPage.dialogsData}/>
                    <div className='app_wrapper_content'>
                        <Routes>
                            <Route path='/messages/*' element={
                                <MessagesContainer
                                    store={this.props.store}
                                />
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
            </BrowserRouter>
    }
}
const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})
export default connect(mapStateToProps, {initializeApp})(App);
