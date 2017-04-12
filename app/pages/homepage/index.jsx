import React from 'react';
import { Wrapper, Container, Title, Text, P }  from 'styles';

const Homepage = () => (
    <Wrapper lightbluebg overflowauto minheight='calc(100% - 177px)'>
        <Container>
            <Wrapper margin >
                <Title lightblack >Hi there 👋</Title>
                <P lightblack >I'm a web developer based in London, currently working at <a href='http://www.moo.com/uk' target='_blank'>MOO Print Ltd</a>. My hobbies include eating 🌯 (aspiring to go 100% plant based 🌿 ), skateboarding, coding 💻, listening to music 🎵, playing guitar 🎸 and standing ontop of things 🏔. If you'd like to get in touch or see some of my work (including the source code of this site), head over to my <a href='#/contact'>contact</a> page.</P>
            </Wrapper>
        </Container>
    </Wrapper>
);

export default Homepage;
