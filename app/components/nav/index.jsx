import React from 'react';
import { LeadText, Text }  from 'styles';
import { Link } from 'react-router-dom';

import { Wrapper } from 'styles';

const Nav = () => (
    <Wrapper spacechildren margin>
        <Link to='/'><LeadText>Elliott Thompson</LeadText></Link>
        <Link to='/contact'><Text>Contact</Text></Link>
    </Wrapper>
);

export default Nav;
