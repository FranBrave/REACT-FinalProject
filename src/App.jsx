<<<<<<< HEAD
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
=======
import './App.css';
import Home from './pages/Home/Home';

const App = () => {
  return (
    <div className="App">
          <h1>Proyecto final</h1>
          <Home />
    </div>
  );
}
>>>>>>> 11d9582d1c95e4bd8b00769cf52b2a389cb4d72f

export default App;
