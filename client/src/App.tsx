import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Create } from "./pages/Create/Create";
import { Explore } from "./pages/Explore/Explore";
import { Login } from "./pages/Login/Login";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/create/" element={<Create />}/>
        <Route path="/explore/" element={<Explore />}/>
        <Route path="/login/" element={<Login />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
