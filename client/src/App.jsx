import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Layout from "./layout/Layout";
import AdminLogin from "./pages/admin/authAdmin/AdminLogin";
import ProtectedRoute from "./routes/ProtectedRoute";
import Dashboard from "./pages/admin/Dashboard/Dashboard";
import { Products } from "./pages/Products";
import { CreateProduct } from "./pages/admin/products/CreateProduct";
import { Brands } from "./pages/admin/brands/Brands";
import { Category } from "./pages/admin/category/Category";


function App() {
  return (
    <Router>
      <Routes>
        {/* Public routes */}
        <Route element={<Layout />}>


          {/* Protected admin routes (render inside Layout) */}
          <Route element={<ProtectedRoute />}>
            <Route path="/admin/dashboard" element={<Dashboard />} />
            <Route path="/admin/products" element={<CreateProduct />} />
            <Route path="/admin/brands" element={<Brands />} />
          <Route path="/admin/category" element={<Category />} />
          </Route>
        </Route>

        {/* Admin login route (outside main layout) */}
        <Route path="/admin/login" element={<AdminLogin />} />

        <Route path="*" element={<Navigate to="/admin/login" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
