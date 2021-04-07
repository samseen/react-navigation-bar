import React from 'react';
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from './NavbarElements';

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavLink to="/">
                <img src={require('../../images/logo.svg').default} alt='logo' />
                </NavLink>
                <Bars />
                <NavMenu>
                    <NavLink to="/about" activeStyle>
                        About
                    </NavLink>
                    <NavLink to="/services" activeStyle>
                        Services
                    </NavLink>
                    <NavLink to="/contact-us" activeStyle>
                        Contact Us
                    </NavLink>
                    <NavLink to="/sign-up" activeStyle>
                        Sign Up
                    </NavLink>
                    {/* <NavBtnLink to='signin'>Sign In</NavBtnLink> */} {/*For Navbar 2*/}
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to='signin'>Sign In</NavBtnLink>
                </NavBtn> {/*For Navbar 1*/}
            </Nav>
        </>
    )
}

export default Navbar
