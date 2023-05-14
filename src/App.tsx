import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Profile } from "./pages/Profile";
import { Settings } from "./pages/Settings";
import { Header } from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} ></Route>
        <Route path="/profile" element={<Profile />} ></Route>
        <Route path="/settings" element={<Settings />} ></Route>
      </Routes>      
    </>
  );
}

export default App;