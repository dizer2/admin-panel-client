import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./compontnes/register/Register";
import Login from "./compontnes/login/Login";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Register />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
	</BrowserRouter>
  );
}

export default App;
