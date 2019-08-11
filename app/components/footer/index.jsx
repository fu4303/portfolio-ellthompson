import React from 'react';

import styled from 'styled-components';
import { media, Wrapper, LeadText, Text, P }  from 'styles';

const FooterItem = styled(Wrapper)`
    width: 100%;
    padding: 19px 0;
    background-color: rgba(255, 255, 255, 0.75);
    ${media.desktop`
        position: absolute;
    `}
`;

const Footer = () => (
    <FooterItem justifycenter thinpadding >
        <P center lightblack >
            <a href='mailto:ellth92@gmail.com?Subject=Hi%20Elliott!' target='_blank'><Text lead lightblack ><i className="fa fa-envelope"></i></Text></a>
            <Text>&nbsp;&nbsp;&nbsp;</Text>
            <a href='http://github.com/ellt92' target='_blank'><Text lead lightblack ><i className="fa fa-github"></i></Text></a>
            <Text>&nbsp;&nbsp;&nbsp;</Text>
            <a href='http://linkedin.com/in/ellt92' target='_blank'><Text lead lightblack ><i className="fa fa-linkedin"></i></Text></a>
            <Text>&nbsp;&nbsp;&nbsp;</Text>
            <a href='http://twitter.com/ellt92' target='_blank'><Text lead lightblack ><i className="fa fa-twitter"></i></Text></a>
        </P>
        <P center small lightblack >© Elliott Thompson 2017</P>
    </FooterItem>
);

export default Footer;
