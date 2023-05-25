import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import MessagesContainer from "./components/Messages/MessagesContainer";


function App(props) {
    return (
        <BrowserRouter>
            <div className='app_wrapper'>
                <Header/>
                <Navbar dialogs={props.state.dialogsPage.dialogsData}/>
                <div className='app_wrapper_content'>
                    <Routes>
                        <Route path='/messages/*' element={
                            <MessagesContainer
                                store={props.store}
                            />
                        }/>
                        <Route path='/profile' element={
                            <Profile
                                store={props.store}
                            />
                        }/>
                        <Route path='/music' element={<Music/>}/>
                        <Route path='/news' element={<News/>}/>
                        <Route path='/settings' element={<Settings/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;
