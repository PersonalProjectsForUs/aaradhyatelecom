import React from 'react';
import { Row, Col } from 'react-bootstrap';
import '../../content/css/header.css';
import HeaderRight from './menu'
import Logo from './logo'
import NavigationBar from './navigationBar';

class Header extends React.Component {
    render() {
        return (
            <NavigationBar/>
        )
    }
}

export default Header;