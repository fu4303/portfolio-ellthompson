import React from 'react';
import { Wrapper, Container, Title, P }  from 'styles';

const Contact = () => (
    <Wrapper coralbg overflowauto minheight='calc(100% - 133px)' >
        <Container>
            <Wrapper margin >
                <Title lightblack >Contact</Title>
                <P lightblack >Email - ellth92@gmail.com</P>
                <P lightblack >Twitter - @ellt92</P>
                <P lightblack >Github - ellt92</P>
                <P lightblack >LinkedIn - ellt92</P>
            </Wrapper>
        </Container>
    </Wrapper>
);

export default Contact;
