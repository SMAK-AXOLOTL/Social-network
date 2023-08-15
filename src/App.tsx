import React, {Suspense, useEffect} from "react";
import './App.css'
import {HashRouter, Navigate, Route, Routes} from "react-router-dom";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import {useDispatch} from "react-redux";
import Preloader from "./components/Common/Preloader/Preloader";
import {appStateType} from "./redux/reduxStore";
import {initializeApp} from "./redux/appReducer";
import Login from "./components/Login/Login";
import {ThunkDispatch} from "redux-thunk";
import {AnyAction} from "redux";
import {Breadcrumb, Layout, Menu, theme} from "antd";
import NavbarItem from "./components/Navbar/NavbarItem/NavbarItem";
import HeaderComponent from "./components/Header/Header";
import {Icons} from './assets/images/Icons'

const {Header, Content, Sider} = Layout;


const Users = React.lazy(() => import("./components/Users/Users"))
const Music = React.lazy(() => import("./components/Music/Music"))
const Messages = React.lazy(() => import("./components/Messages/Messages"))
const Profile = React.lazy(() => import("./components/Profile/Profile"))

const App: React.FC = () => {
    const dispatch: ThunkDispatch<appStateType, unknown, AnyAction> = useDispatch()
    const initializeAppNow = () => {
        dispatch(initializeApp())
    }

    useEffect(() => {
        initializeAppNow()
    }, [])

    const {
        token: {colorBgContainer},
    } = theme.useToken();

    return (<HashRouter>
            <Layout>
                <Header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <HeaderComponent/>
                </Header>
                <Layout>
                    <Sider width={200} style={{background: colorBgContainer}}>
                        <Menu
                            mode="inline"
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub1']}
                            style={{height: '100%', borderRight: 0}}
                        >
                            <NavbarItem address='profile/' itemName='Profile' icon={Icons.UserIcon}/>
                            <NavbarItem address='messages' itemName='Messages' icon={Icons.MessagesIcon}/>
                            <NavbarItem address='news' itemName='News' icon={Icons.NewsIcon}/>
                            <NavbarItem address='music' itemName='Music' icon={Icons.MusicIcon}/>
                            <NavbarItem address='users' itemName='Users' icon={Icons.UsersIcon}/>
                            <NavbarItem address='settings' itemName='Settings' icon={Icons.SettingsIcon}/>
                        </Menu>
                    </Sider>
                    <Layout style={{padding: '0 24px 24px'}}>
                        <Breadcrumb style={{margin: '16px 0'}}>
                            <Breadcrumb.Item>Home</Breadcrumb.Item>
                            <Breadcrumb.Item>List</Breadcrumb.Item>
                            <Breadcrumb.Item>App</Breadcrumb.Item>
                        </Breadcrumb>
                        <Content
                            style={{
                                padding: 24,
                                margin: 0,
                                minHeight: 280,
                                background: colorBgContainer,
                            }}
                        >
                            <Suspense fallback={<div><Preloader/></div>}>
                                <Routes>
                                    <Route path='/messages/*' element={<Messages/>}/>
                                    <Route path='/profile/:userId?' element={<Profile/>}/>
                                    <Route path='/music' element={<Music/>}/>
                                    <Route path='/news' element={<News/>}/>
                                    <Route path='/users' element={<Users/>}/>
                                    <Route path='/settings' element={<Settings/>}/>
                                    <Route path='/login' element={<Login/>}/>

                                    <Route path='' element={<Navigate to={"/profile/"}/>}/>
                                </Routes>
                            </Suspense>
                        </Content>
                    </Layout>
                </Layout>
            </Layout>
        </HashRouter>
    );
};

export default App