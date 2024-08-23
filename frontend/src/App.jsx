import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Landing from "./Components/Landing/Landing";
import Blog from "./Pages/Blog";
import { Outlet } from "react-router-dom";
import Article from "./Components/Article";


function Layout() {
  return (
    <>
      <Navbar />
      <div style={{ minHeight: "calc(100vh - 82.5px)" }}>
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Landing />} />
        <Route path="blog" element={<Blog />} />
        <Route path="blog/:id" element={<Article />} />
      </Route>
    </Routes>
  );
}

export default App;
