import Home from '../Home';
import Footer from '../Footer';
import Nav from '../Nav';
import Error_404 from '../Error_404';
import Signin from '../Signin';
import User from '../User';

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