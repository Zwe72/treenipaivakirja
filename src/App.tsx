
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AddTraining from "./pages/AddTraining";
import Trainings from "./pages/Trainings";
import Login from "./pages/Login";

import "./App.css"
import { useEffect, useState } from "react";
import type { Training } from "./types";
import ProtectedRoute from "./components/ProtectedRoute";
import { onAuthStateChanged, type User } from "firebase/auth";
import { auth } from "./services/firebaseConfig";
import { logout } from "./services/authService";

function App() {
  const [trainings, setTrainings] = useState<Training[]>([])
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const addTraining = (training: Training) => {
    setTrainings([...trainings, training]);
  };

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error(error);
    }
  };
  
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return <p>Ladataan...</p>;
  }

  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> |{" "}

        {user ? (
          <>
            <Link to="/trainings">Treenit</Link> |{" "}
            <Link to="/add">Lisää</Link> |{" "}

            <button onClick={handleLogout}>
              Kirjaudu ulos
            </button>
          </>
        ) : (
        <Link to="/login">Login</Link>
        )}
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trainings" 
        element={
          <ProtectedRoute isAuthenticated={!!user}>
            <Trainings trainings={trainings} />
          </ProtectedRoute>
        }
        />

        <Route path="/add" 
        element={
          <ProtectedRoute isAuthenticated={!!user}>
            <AddTraining addTraining={addTraining} />
        </ProtectedRoute>
          }
        />

        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
