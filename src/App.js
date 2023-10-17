import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./compontnes/register/Register";
import Login from "./compontnes/login/Login";
import Home from "./compontnes/home/Home";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Register />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
	</BrowserRouter>
  );
}

export default App;
