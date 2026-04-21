import { useLocation } from "react-router-dom";

function Nav() {
    const location = useLocation();
    const isHome = location.pathname === "/";
    const isSignIn = location.pathname === "/sign-in.html";
    const isUser = location.pathname === "/user";

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
                </a> }
                
                {isSignIn && <a className="main-nav-item" href="/">
                    Homepage
                </a>}

                {isUser && <a className="main-nav-item" href="/">
                    <i className="fa-solid fa-arrow-right-from-bracket"></i>
                    Log Out
                </a>}
                
            </div>
        </nav>
    )
}

export default Nav