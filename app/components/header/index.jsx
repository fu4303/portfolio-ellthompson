import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { Wrapper, Container, LeadText, Text }  from 'styles';

const navLink = (to, text) => {
    const isSelected = location.hash.includes(`#${to}`);
    return (<Link to={to}><Text bold white title lead={isSelected} >{text}</Text></Link>);
};

const Header = ({children}, context) => (
    <Wrapper slatebg >
        <Container>
            <Wrapper padding flex aligncenter justifyspacebetween slatebg minheight='36px' >
                { navLink('/', 'Elliott Thompson') }
                <Wrapper spacechildren >
                    { context.CONFIG.SHOW_BLOG && navLink('/blog', 'Blog') }
                    { navLink('/contact', 'Contact') }
                </Wrapper>
            </Wrapper>
        </Container>
    </Wrapper>
);

Header.contextTypes = {
    CONFIG: PropTypes.object
};

export default Header;
