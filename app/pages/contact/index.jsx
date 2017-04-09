import React from 'react';
import { Wrapper, Container, Title, P, Text }  from 'styles';

const Contact = () => (
    <Wrapper coralbg overflowauto minheight='calc(100% - 165px)' >
        <Container>
            <Wrapper margin >
                <Title lightblack >Contact</Title>
                <P lightblack ><a href='mailto:ellth92@gmail.com?Subject=Hi%20Elliott!' target='_blank'><i className="fa fa-envelope"></i> Email</a></P>
                <P lightblack ><a href='http://github.com/ellt92' target='_blank'><i className="fa fa-github"></i> Github</a></P>
                <P lightblack ><a href='http://linkedin.com/in/ellt92' target='_blank'><i className="fa fa-linkedin"></i> LinkedIn</a></P>
                <P lightblack ><a href='http://twitter.com/ellt92' target='_blank'><i className="fa fa-twitter"></i> Twitter</a></P>
            </Wrapper>
        </Container>
    </Wrapper>
);

export default Contact;
