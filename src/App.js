import './App.css';
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import Header from "./pages/Header";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Footer from "./pages/Footer";
import ProductDetail from "./pages/ProductDetail";
import Voucher from "./pages/Voucher";
import VoucherDetail from "./pages/VoucherDetail";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import Test from "./pages/Test";

function App() {
  const Layout = () => {
    return (
      <>
        <Header />
        <div style={{marginTop: '88px'}}>
          <main className="mx-auto">
            {/* Đây là nơi nội dung động hiển thị */}
            <Outlet />
          </main>
        </div>
        <Footer />
      </>
    );
  };

  return (
    <Router>
      <Routes>
      <Route path="/test" element={<Test />} />
        {/* Sử dụng layout component */}
        <Route path="/" element={<Layout />}>
          {/* Các route con */}
          <Route index element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/product-detail" element={<ProductDetail />} />
          <Route path="/voucher" element={<Voucher />} />
          <Route path="/voucher-detail" element={<VoucherDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
