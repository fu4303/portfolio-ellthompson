import React from 'react';
import { media, Wrapper, Container, Title, Text, P }  from 'styles';
import styled from 'styled-components';

const Home = styled.div`
    padding-top: 84px;
    height: calc(100% - 84px - 103px);
    ${media.phone`
        flex-direction: column;
        padding-top: 135px;
        height: calc(100% - 135px);
    `}
    display: flex;
    overflow: auto;
`;

const HomeContent = styled(Wrapper)`
    max-width: 650px;
    text-align: justify;
`;

const Homepage = () => (
    <Home overflowauto >
        <Container flex centerboth >
            <HomeContent margin >
                <P lightblack ><Text title sizetitle >Hi there 👋</Text></P>
                <P lightblack >I'm a web developer based in London, currently working at <a href='http://www.moo.com/uk' target='_blank'>MOO Print Ltd</a>. My hobbies include eating 🌯 (aspiring to go 100% plant based 🌿 ), skateboarding, coding 💻, listening to music 🎵, playing guitar 🎸 and standing ontop of things 🏔. If you'd like to get in touch or see some of my work (including the source code of this site), head over to my <a href='#/contact'>contact</a> page.</P>
            </HomeContent>
        </Container>
    </Home>
);

export default Homepage;
