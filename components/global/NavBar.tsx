const NavBar = (props: React.ComponentProps<any>) => (
    <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
            {/* Put the logo here */}
            <span><b><i>FastCast</i></b></span>

            {/* Put the different pages to show when the page is in mobile view */}
            <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                <span aria-hidden="true">Enter code</span>
                <span aria-hidden="true">Login</span>
                <span aria-hidden="true">Logout</span>
            </a>
        </div>

        <div id="navbarMenus" className="navbar-menu">
            <div className="navbar-start">
                <div className="navbar-item">
                    About us
                </div>
            </div>

            <div className="navbar-end">
                <div className="navbar-items">
                    <div className="buttons">
                        <a className="button is-primary">
                            <strong>Sign up with Google</strong>
                        </a>
                        <a className="button is-light">
                            Log in
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </nav>
)

export default NavBar