import HelloOrLogin from './HelloOrLogin'
import FastcastBrand from '../FastcastBrand/FastcastText'
// import { Navbar } from 'react-bulma-components'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'

const NavBar = (props: React.ComponentProps<any>) => {
    const brandStyle = {
        height: '2rem',
        width: '9rem'
    }
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Navbar.Brand>
                <FastcastBrand styles={brandStyle}/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto" />
                <Nav>
                    {/* <div style={{color: 'white'}}>Hi Junior</div> */}
                    <HelloOrLogin styles={{color: 'white'}}/>
                </Nav>
            </Navbar.Collapse>
</Navbar>
        // <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">

        //     <Navbar.Collapse>
        //     </Navbar.Collapse>
        // </Navbar>


        // <Navbar>
        //     <Navbar.Brand color="#484848">
        //         <Navbar.Item renderAs="a" >
        //             <FastcastBrand />
        //         </Navbar.Item>
        //         <Navbar.Container>
        //             {/* <div className="navbar-end">
        //                 <div className="navbar-items">
        //                     <div className="buttons"> */}
        //                         <Navbar.Container position="end">
        //                             <div>Hi Junior</div>
        //                         </Navbar.Container>
        //                     {/* </div>
        //                 </div>
        //             </div> */}
        //         </Navbar.Container>
        //     </Navbar.Brand>
        // </Navbar>
        )
} 

export default NavBar