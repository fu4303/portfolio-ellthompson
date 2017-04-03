import React from 'react';
import { Wrapper, Title, Text, P }  from 'styles';

const Homepage = () => (
    <Wrapper lightbluebg overflowauto minheight='calc(100% - 133px)'>
        <Wrapper margin >
            <Title lightblack >Hi there 👋</Title>
            <P lightblack >I'm a web developer based in London. My hobbies include eating 🌯, skateboarding, coding 💻, listening to music 🎵, playing guitar 🎸 and standing ontop of things 🏔. I'm an aspiring vegan too so hit me up if you have any agricultural projects you think we could collab on 🌿 . Dont hesitate to drop me an email, tweet or any of the plethora of ways we can get in touch.</P>
        </Wrapper>
    </Wrapper>
);

export default Homepage;
