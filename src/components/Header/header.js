import React from 'react';
import {Link} from 'react-router-dom';

const Header = (props) =>{
        return(
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link to ='/'  className="navbar-brand">{props.title}</Link>
            </nav>
        )
};

export default Header;