import "./App.css";
import AuthModal from "./components/AuthModal/AuthModal";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import { AuthProvider } from "./state/context/authContext";

const App = () => {
    return (
        <AuthProvider>
            <Header />
            <AuthModal />
            <main>
                <h1>Proyecto final</h1>
                <Home />
            </main>
        </AuthProvider>
    );
};

export default App;
