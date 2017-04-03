import React from 'react';
import { Link } from 'react-router-dom';

import { Wrapper, LeadText, Text }  from 'styles';

const Nav = () => (
    <Wrapper margin flex aligncenter justifyspacebetween >
        <Link to='/'><LeadText bold >Elliott Thompson</LeadText></Link>
        <Wrapper spacechildren >
            <Link to='/contact'><Text bold >Contact</Text></Link>
        </Wrapper>
    </Wrapper>
);

export default Nav;
