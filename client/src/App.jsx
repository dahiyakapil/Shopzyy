import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Layout } from "./layout/Layout";
import { Login } from "./pages/auth/Login";

function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route element={<Layout />}>

            <Route path="/" element={<Home />} />
            <Route path="/" element={<Login />} />

          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
