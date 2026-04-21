import Home from '../pages/Home';
import Footer from '../elements/Footer';
import Nav from '../elements/Nav';
import Error_404 from '../pages/Error_404';
import Signin from '../pages/Signin';
import User from '../pages/User';

import {
  Routes,
  Route,
  Navigate,
  useLocation
} from "react-router-dom";

function Layout() {
  const location = useLocation();

  const isHome = location.pathname === "/";

  return (
    <>
      <Nav />
      <main className={isHome ? "" : "main bg-dark"}>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/sign-in.html" element={<Signin />} />
          <Route path="/user" element={<User />} />
          <Route path="/error_404" element={<Error_404 />} />
          <Route path="*" element={<Navigate to="/error_404" replace />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default Layout