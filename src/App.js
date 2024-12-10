import './App.css';
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import Header from "./Header"
import Home from "./Home"
import Footer from "./Footer"

function App() {
  return (
    <Router>
      <Header />
      <div>
        <main className="container mx-auto">
          <Routes>
            <Route path="/" element={<Outlet />}>
              <Route index element={<Home />} />
            </Route>
          </Routes>
        </main>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
