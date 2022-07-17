import  { Provider } from "react-redux";
import React from "react";
import "./App.css";
import AuthModal from "./components/AuthModal/AuthModal";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import { AuthProvider } from "./state/context/authContext";
import { store } from "./state/redux/reduxStore";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TravelsUsersContainer from "./pages/Home/components/TravelsUsersContainer/TravelsUsersContainer";
import TravelDetail from "./pages/TravelDetail/TravelDetail";
import UserDetail from "./pages/UserDetail/UserDetail";


const App = () => {
    return (
    <Router>
        <Provider store={store}>
            <AuthProvider>
                <Header />
                <AuthModal />
                <main>
            <Routes>
            <Route path="/" element = {<Home/>}/>
            <Route path="/User/:id" element = {<UserDetail/>}/>
            <Route path="/Travel/:id" element ={<TravelDetail/>}/>
        </Routes>
            </main>
            
            </AuthProvider>
        </Provider> 
    </Router>
    );
};

export default App;
