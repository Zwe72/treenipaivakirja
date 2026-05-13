import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AddTraining from "./pages/AddTraining";
import Trainings from "./pages/Trainings";
import Login from "./pages/Login";

import "./App.css"
import { useState } from "react";
import type { Training } from "./types";
import ProtectedRoute from "./components/ProtectedRoute";

const isAuthenticated = false;

function App() {
  const [trainings, setTrainings] = useState<Training[]>([])
  
  const addTraining = (training: Training) => {
    setTrainings([...trainings, training]);
  };

  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/trainings">Treenit</Link> |{" "}
        <Link to="/add">Lisää</Link> |{" "}
        <Link to="/login">Login</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trainings" 
        element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <Trainings trainings={trainings} />
          </ProtectedRoute>
        }
      />
        <Route path="/add" element={<AddTraining AddTraining={addTraining} />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
