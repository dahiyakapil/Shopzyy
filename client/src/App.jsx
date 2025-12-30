import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./layout/Layout";
import AdminLogin from "./pages/admin/authAdmin/AdminLogin";
import ProtectedRoute from "./routes/ProtectedRoute";
import Dashboard from "./pages/admin/Dashboard/Dashboard";
import { Products } from "./pages/Products";


function App() {
  return (
    <Router>
      <Routes>
        {/* Public routes */}
        <Route element={<Layout />}>
          

          {/* Protected admin routes (render inside Layout) */}
          <Route element={<ProtectedRoute />}>
            <Route path="/admin/dashboard" element={<Dashboard />} />
            <Route path="/admin/products" element={<Products />} />
          </Route>
        </Route>

        {/* Admin login route (outside main layout) */}
        <Route path="/admin/login" element={<AdminLogin />} />

        {/* Protected admin dashboard (inside layout) */}
        {/* <Route element={<Layout />}>
          <Route
            path="/admin/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
                <Products />
              </ProtectedRoute>
            }
          />
        </Route> */}
      </Routes>
    </Router>
  );
}

export default App;
