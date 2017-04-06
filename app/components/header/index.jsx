import React from 'react';
import { Link } from 'react-router-dom';

import { Wrapper, Container, LeadText, Text }  from 'styles';

const navLink = (to, text) => {
    const isSelected = location.hash == `#${to}`;
    return (<Link to={to}><Text bold white lead={isSelected} >{text}</Text></Link>);
};

const Header = () => (
    <Wrapper slatebg >
        <Container>
            <Wrapper padding flex aligncenter justifyspacebetween slatebg minheight='36px' >
                { navLink('/', 'Elliott Thompson') }
                <Wrapper spacechildren >
                    { navLink('/contact', 'Contact') }
                </Wrapper>
            </Wrapper>
        </Container>
    </Wrapper>
);

export default Header;
