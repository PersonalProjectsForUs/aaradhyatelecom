import React from 'react';
import '../../content/css/header.css';

import Logo from './logo'
import HeaderRight from './menu'

class Header extends React.Component {
    render() {
        return (
            <div className="headerHolder">
                <Logo/>
                <HeaderRight/>
            </div>
        )
    }
}

export default Header;