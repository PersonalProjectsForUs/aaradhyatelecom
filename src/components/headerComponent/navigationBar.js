import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import AboutUs from '../aboutUs';
import ContactUs from '../contactUs';
import Home from '../home'

export default class NavigationBar extends Component {
    render() {
        const routes = [
            {
                path: "/",
                component: Home
            },
            {
                path: "/contactUs",
                component: ContactUs
            },
            {
                path: "/aboutUs",
                component: AboutUs
            }
        ];
        const RouteWithSubRoutes = route => (
            <Route
                path={route.path}
                render={props => (
                    <route.component {...props} routes={route.routes} />
                )}
            />
        );
        return (
            <Router>
                <Navbar fluid>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <Link to="/">Aaradhya Telecom</Link>
                        </Navbar.Brand>
                    </Navbar.Header>
                    <Nav>
                        <NavItem eventKey={1} href="#">Home</NavItem>
                        <NavItem eventKey={2} href="#">
                            <Link to="/contactUs">Contact Us</Link>
                        </NavItem>
                        <NavItem eventKey={2} href="#">
                            <Link to="/aboutUs">About Us</Link>
                        </NavItem>
                        <NavDropdown eventKey={3} title="Services" id="basic-nav-dropdown">
                            <MenuItem eventKey={3.1}>Money Transfer</MenuItem>
                            <MenuItem eventKey={3.2}>Air/ Railway Ticket booking</MenuItem>
                            <MenuItem eventKey={3.3}>Forms and Results</MenuItem>
                            <MenuItem divider />
                            <MenuItem eventKey={3.4}>Websites and Software Development</MenuItem>
                        </NavDropdown>
                    </Nav>
                    <Nav pullRight>
                        <NavItem eventKey={1} href="#">
                            Login
                    </NavItem>
                        <NavItem eventKey={2} href="#">
                            Register
                    </NavItem>
                    </Nav>
                    {/*{routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}*/}
                </Navbar>
            </Router>);
    }
}