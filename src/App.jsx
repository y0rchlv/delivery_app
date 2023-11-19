import "./styles/bootstrap.css";
import "./styles/globals.css";
import HomePage from "./components/home/home.page";
import LoginPage from "./components/login/login.page";
import PrivateRoute from "./components/navigation/privateRoute";
import PublicRoute from "./components/navigation/publicRoute";
import { BrowserRouter as Router, Routes, Navigate, Route } from "react-router-dom";
import Navbar from "./components/navigation/navabar/navbar.main";
import Footer from "./components/navigation/footer/footer.main";

function App() {
  const user = false;

  return (
    <div className='App'>
      <Router>
        <Navbar />
        <div className='container py-4'>
          <Routes>
            <Route path='/' element={<Navigate to='/home' replace />} />

            <Route path='/login' element={<PublicRoute user={user} />}>
              <Route path='/login' element={<LoginPage />} />
            </Route>

            <Route path='/home' element={<HomePage />} />

            <Route path='/admin' element={<PrivateRoute user={user} />}>
              <Route path='/admin' element={<HomePage />} />
            </Route>

            <Route path='/user/orders' element={<PrivateRoute user={user} />}>
              <Route path='/user/orders' element={<HomePage />} />
            </Route>
          </Routes>
        </div>
      </Router>
        <Footer />
    </div>
  );
}

export default App;
