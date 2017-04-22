import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { Wrapper, Container, P, LeadText, Text, media }  from 'styles';

const StyledLink = styled(Link)`
    display: flex;
    align-items: center;
    ${media.phone`
        padding: 8px 0;
        justify-content: center;
    `}
`;

const StyledNav = styled(Wrapper)`
    ${media.phone`
        flex-direction: column;
    `}
`;

const StyledSubNav = styled(Wrapper)`
    ${media.phone`
        justify-content: center;
    `}
`;

const navLink = (to, text) => {
    const isSelected = location.hash.includes(`#${to}`);
    return (<StyledLink to={to}><Text bold white title lead={isSelected} >{text}</Text></StyledLink>);
};

const Header = ({children}, context) => (
    <Wrapper slatebg >
        <Container>
            <StyledNav padding flex aligncenter justifyspacebetween slatebg minheight='36px' >
                { navLink('/', 'Elliott Thompson') }
                <StyledSubNav spacechildren flex aligncenter >
                    { context.CONFIG.SHOW_BLOG && navLink('/blog', 'Blog') }
                    { navLink('/contact', 'Contact') }
                </StyledSubNav>
            </StyledNav>
        </Container>
    </Wrapper>
);

Header.contextTypes = {
    CONFIG: PropTypes.object
};

export default Header;
