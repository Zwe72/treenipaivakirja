import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AddTraining from "./pages/AddTraining";
import "./App.css"
import Trainings from "./pages/Trainings";
function App() {
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
        <Route path="/trainings" element={<Trainings />} />
        <Route path="/add" element={<AddTraining />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
