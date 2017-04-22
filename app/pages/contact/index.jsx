import React from 'react';
import styled from 'styled-components';
import { media, Wrapper, Container, Title, P, Text }  from 'styles';

const Icon = styled.i`
    font-size: 40px;
`;

const ContactWrapper = styled(Wrapper)`
    backgroundColor: rgba(144, 144, 144, 0.25);
    borderRadius: 7px;
    margin: 8px;
    padding: 8px;
    ${media.phone`
        width: 100%;
    `}
`;

const Contact = () => (
    <Wrapper coralbg overflowauto minheight='calc(100% - 177px)' >
        <Container>
            <Wrapper margin >
                <Wrapper flex justifycenter >
                    <ContactWrapper>
                        <a href='mailto:ellth92@gmail.com?Subject=Hi%20Elliott!' target='_blank'>
                            <P lightblack center ><Icon className="fa fa-envelope"></Icon></P>
                            <P lightblack center >Email</P>
                        </a>
                    </ContactWrapper>
                    <ContactWrapper>
                        <a href='http://github.com/ellt92' target='_blank'>
                            <P lightblack center ><Icon className="fa fa-github"></Icon></P>
                            <P lightblack center >Github</P>
                        </a>
                    </ContactWrapper>
                    <ContactWrapper>
                        <a href='http://linkedin.com/in/ellt92' target='_blank'>
                            <P lightblack center ><Icon className="fa fa-linkedin"></Icon></P>
                            <P lightblack center >LinkedIn</P>
                        </a>
                    </ContactWrapper>
                    <ContactWrapper>
                        <a href='http://twitter.com/ellt92' target='_blank'>
                            <P lightblack center ><Icon className="fa fa-twitter"></Icon></P>
                            <P lightblack center >Twitter</P>
                        </a>
                    </ContactWrapper>
                </Wrapper>
            </Wrapper>
        </Container>
    </Wrapper>
);

export default Contact;
