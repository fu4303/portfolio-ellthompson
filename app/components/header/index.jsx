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

const HeaderElement = styled(Wrapper)`
    position: absolute;
    width: 100%;
`;

const navLink = (to, text) => {
    const isSelected = location.hash.includes(`#${to}`);
    return (<StyledLink to={to}><Text white title lead={isSelected} >{text}</Text></StyledLink>);
};

const Header = ({children}, context) => (
    <HeaderElement slatebg >
        <Container>
            <StyledNav padding flex aligncenter justifyspacebetween minheight='36px' >
                { navLink('/', 'ELLIOTT THOMPSON') }
                <StyledSubNav spacechildren flex aligncenter >
                    { context.CONFIG.SHOW_BLOG && navLink('/blog', 'BLOG') }
                    { navLink('/contact', 'CONTACT') }
                </StyledSubNav>
            </StyledNav>
        </Container>
    </HeaderElement>
);

Header.contextTypes = {
    CONFIG: PropTypes.object
};

export default Header;
