import "./App.css";
import Home from "./pages/Home/Home";
import { AuthProvider } from "./state/context/authContext";

const App = () => {
    return (
        <AuthProvider>
            <main>
                <h1>Proyecto final</h1>
                <Home />
            </main>
        </AuthProvider>
    );
};

export default App;
