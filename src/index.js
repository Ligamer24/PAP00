//React Libraries
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//Style
import "./index.css"
//Pages
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Leaderboard from "./pages/Leaderboard";




export default function App() {
  
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="leaderboard" element={<Leaderboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App />)
