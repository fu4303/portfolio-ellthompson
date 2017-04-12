import React from 'react';
import styled from 'styled-components';
import { Wrapper, Container, Title, P, Text }  from 'styles';

const Icon = styled.i`
    font-size: 40px;
`;

const Contact = () => (
    <Wrapper coralbg overflowauto minheight='calc(100% - 177px)' >
        <Container>
            <Wrapper margin >
                <Title lightblack >Contact</Title>
                <Wrapper flex justifycenter >
                    <Wrapper width='50%'>
                        <a href='mailto:ellth92@gmail.com?Subject=Hi%20Elliott!' target='_blank'>
                            <P lightblack ><Icon className="fa fa-envelope"></Icon></P>
                            <P lightblack >Email</P>
                        </a>
                    </Wrapper>
                    <Wrapper width='50%'>
                        <a href='http://github.com/ellt92' target='_blank'>
                            <P lightblack ><Icon className="fa fa-github"></Icon></P>
                            <P lightblack >Github</P>
                        </a>
                    </Wrapper>
                    <Wrapper width='50%'>
                        <a href='http://linkedin.com/in/ellt92' target='_blank'>
                            <P lightblack ><Icon className="fa fa-linkedin"></Icon></P>
                            <P lightblack >LinkedIn</P>
                        </a>
                    </Wrapper>
                    <Wrapper width='50%'>
                        <a href='http://twitter.com/ellt92' target='_blank'>
                            <P lightblack ><Icon className="fa fa-twitter"></Icon></P>
                            <P lightblack >Twitter</P>
                        </a>
                    </Wrapper>
                </Wrapper>
            </Wrapper>
        </Container>
    </Wrapper>
);

export default Contact;
