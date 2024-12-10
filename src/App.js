import './App.css';
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import Header from "./Header"
import Home from "./Home"
import Footer from "./Footer"
import DatLichKham from "./DatLichKham"
import CuocHen from "./CuocHen"

function App() {
  const Layout = () => {
    return (
      <>
        <Header />
        <div>
          <main className="container mx-auto">
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
        {/* Sử dụng layout component */}
        <Route path="/" element={<Layout />}>
          {/* Các route con */}
          <Route index element={<Home />} />
          <Route path="/dat-lich-kham" element={<DatLichKham />} />
          <Route path="/cuoc-hen" element={<CuocHen />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
