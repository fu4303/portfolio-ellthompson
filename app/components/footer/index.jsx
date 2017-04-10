import React from 'react';

import { Wrapper, LeadText, Text, P }  from 'styles';

const Footer = () => (
    <Wrapper justifycenter thinmargin >
        <P center lightblack >
            <a href='mailto:ellth92@gmail.com?Subject=Hi%20Elliott!' target='_blank'><Text lead lightblack ><i className="fa fa-envelope"></i></Text></a>
            <Text>&nbsp;&nbsp;&nbsp;</Text>
            <a href='http://github.com/ellt92' target='_blank'><Text lead lightblack ><i className="fa fa-github"></i></Text></a>
            <Text>&nbsp;&nbsp;&nbsp;</Text>
            <a href='http://linkedin.com/in/ellt92' target='_blank'><Text lead lightblack ><i className="fa fa-linkedin"></i></Text></a>
            <Text>&nbsp;&nbsp;&nbsp;</Text>
            <a href='http://twitter.com/ellt92' target='_blank'><Text lead lightblack ><i className="fa fa-twitter"></i></Text></a>
        </P>
        <P center small lightblack >Elliott Thompson 2017</P>
    </Wrapper>
);

export default Footer;
