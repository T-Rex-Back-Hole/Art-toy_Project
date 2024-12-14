import { BrowserRouter, Routes, Route } from "react-router-dom";
import Success from './pages/Success';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import DetailModel from "./components/DetailModel";
// import components อื่นๆ...

function App() {
  return (
    <BrowserRouter>
      <DataProvider>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/success" element={<Success />} />
            <Route path="/detail/:id" element={<DetailModel />} />
            {/* routes อื่นๆ... */}
          </Routes>
          <Footer />
        </div>
      </DataProvider>
    </BrowserRouter>
  );
}

export default App; 