import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";


function Nav() {
    const location = useLocation();
    const isHome = location.pathname === "/";
    const isSignIn = location.pathname === "/sign-in.html";
    const isUser = location.pathname === "/user";

    const userFirstName = useSelector((state) => state.user.userFirstName);
    const userLastName = useSelector((state) => state.user.userLastName);

    return (
        <nav className="main-nav">
            <a className="main-nav-logo" href="./index.html">
                <img
                    className="main-nav-logo-image"
                    src="./img/argentBankLogo.png"
                    alt="Argent Bank Logo"
                />
                <h1 className="sr-only">Argent Bank</h1>
            </a>
            <div>
                {isHome && <a className="main-nav-item" href="./sign-in.html">
                    <i className="fa fa-user-circle"></i>
                    Sign In
                </a>}

                {isSignIn && <a className="main-nav-item" href="/">
                    Homepage
                </a>}

                {isUser &&
                    <>
                        <i class="fa-solid fa-user"></i>
                        {userFirstName + " " + userLastName}
                        <a className="main-nav-item" href="/">
                            <i className="fa-solid fa-arrow-right-from-bracket"></i>
                            Log Out
                        </a>
                    </>
                }

            </div>
        </nav>
    )
}

export default Nav