import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Landing from "./Pages/Landing";
import Blog from "./Pages/Blog";
import { Outlet } from "react-router-dom";
import Article from "./Components/Article";
import AboutUs from "./Pages/AboutUs";
import Support from "./Pages/Support";
import Shop from "./Pages/Shop";
import Dashboard from "./Pages/Admin/Dashboard";
import AdminNavbar from "./Components/Admin/AdminNavbar";
import AdminSidebar from "./Components/Admin/AdminSidebar";
import ProdManagment from "./Pages/Admin/ProdManagement";
import Settings from "./Pages/Admin/Settings";
import ContManagment from "./Pages/Admin/ContManagement";
import BlogManagment from "./Pages/Admin/BlogManagement";
import ProductMangDev from "./Pages/Admin/ProductMangDev";

function AdminLayout() {
  return (
    <div className="flex ">
      <AdminSidebar />

      <div className="w-full">
        <AdminNavbar />
        <div style={{ minHeight: "calc(100vh - 82.5px)" }}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

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
      {/* clientside website */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Landing />} />
        <Route path="blog" element={<Blog />} />
        <Route path="blog/:id" element={<Article />} />
        <Route path="aboutus" element={<AboutUs />} />
        <Route path="support" element={<Support />} />
        <Route path="shop" element={<Shop />} />
      </Route>
      {/* adminside website */}

      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="product-management" element={<ProdManagment />} />
        <Route path="blog-management" element={<BlogManagment />} />
        <Route path="content-management" element={<ContManagment />} />
        <Route path="settings" element={<Settings />} />
        <Route path="product-dev" element={<ProductMangDev />} />
      </Route>
    </Routes>
  );
}

export default App;
