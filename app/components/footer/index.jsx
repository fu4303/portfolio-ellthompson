import React from 'react';

import { Wrapper, LeadText, Text, P }  from 'styles';

const Footer = () => (
    <Wrapper justifycenter thinmargin >
        <P center small lightblack >Elliott Thompson 2017</P>
        <P center lightblack >
            <a href='mailto:ellth92@gmail.com?Subject=Hi%20Elliott!' target='_blank'><i className="fa fa-envelope"></i></a>
            <Text>&nbsp;&nbsp;&nbsp;</Text>
            <a href='http://github.com/ellt92' target='_blank'><i className="fa fa-github"></i></a>
            <Text>&nbsp;&nbsp;&nbsp;</Text>
            <a href='http://linkedin.com/in/ellt92' target='_blank'><i className="fa fa-linkedin"></i></a>
            <Text>&nbsp;&nbsp;&nbsp;</Text>
            <a href='http://twitter.com/ellt92' target='_blank'><i className="fa fa-twitter"></i></a>
        </P>
    </Wrapper>
);

export default Footer;
