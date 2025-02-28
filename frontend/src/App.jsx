import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Explore from "./Components/Explore";
import Auction from "./Components/Auction";
import Signup from "./Components/Signup";
import Signin from "./Components/Signin";
import Landing from "./Components/Landing";
import Footer from "./Components/Footer";
import AddProduct from "./Components/AddProduct";

function App() {
  return (
    <Router> {/* Wrap everything inside Router */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing/>} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/auction" element={<Auction />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/addProduct" element={<AddProduct />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
