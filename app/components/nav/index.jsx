import React from 'react';
import { Link } from 'react-router-dom';

import { Wrapper, LeadText, Text }  from 'styles';

const navLink = (to, text) => {
    const isSelected = location.hash == `#${to}`;
    return (<Link to={to}><Text bold white lead={isSelected} >{text}</Text></Link>);
};

const Nav = () => (
    <Wrapper slatebg overflowauto>
        <Wrapper margin flex aligncenter justifyspacebetween slatebg minheight='36px' >
            { navLink('/', 'Elliott Thompson') }
            <Wrapper spacechildren >
                { navLink('/contact', 'Contact') }
            </Wrapper>
        </Wrapper>
    </Wrapper>
);

export default Nav;
