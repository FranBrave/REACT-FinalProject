import { Provider } from "react-redux";
import "./App.css";
import AuthModal from "./components/AuthModal/AuthModal";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import { AuthProvider } from "./state/context/authContext";
import { store } from "./state/redux/reduxStore";

const App = () => {
    return (
        <Provider store={store}>
            <AuthProvider>
                <Header />
                <AuthModal />
                <main>
                    <Home />
                </main>
            </AuthProvider>
        </Provider>
    );
};

export default App;
