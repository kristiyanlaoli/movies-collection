import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NewMovie from "./pages/NewMovie";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<NewMovie />} />
          <Route path="/*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
