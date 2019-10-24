import FastcastBrand from './FastcastBrand/FastcastFullLogo'
import { Navbar } from 'react-bulma-components'

const NavBar = (props: React.ComponentProps<any>) => (
    <Navbar>
        <Navbar.Brand>
            <Navbar.Item renderAs="a" >
                <FastcastBrand />
            </Navbar.Item>
            <Navbar.Container>
                <Navbar.Container position="end">
                    <button className="button is-primary">
                        <strong>Google Login</strong>
                    </button>
                </Navbar.Container>
            </Navbar.Container>
        </Navbar.Brand>
    </Navbar> 
    // <nav className="navbar" role="navigation" aria-label="main navigation">
    //     <div className="navbar-brand">
    //         {/* Put the logo here */}
    //         {/* <span><b><i>FastCast</i></b></span> */}
    //         {/* <FastcastBrand /> */}

    //         {/* Put the different pages to show when the page is in mobile view */}
    //         <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
    //             <span aria-hidden="true">Enter code</span>
    //             <span aria-hidden="true">Login</span>
    //             <span aria-hidden="true">Logout</span>
    //         </a>
    //     </div>

    //     <div id="navbarMenus" className="navbar-menu">
    //         <div className="navbar-start">
    //             <div className="navbar-item">
    //                 About us
    //             </div>
    //         </div>

    //         <div className="navbar-end">
    //             <div className="navbar-items">
    //                 <div className="buttons">
    //                     <button className="button is-primary">
    //                         <strong>Google Login</strong>
    //                     </button>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // </nav>
)

export default NavBar