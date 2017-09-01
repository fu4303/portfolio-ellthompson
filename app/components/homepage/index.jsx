import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { media, Wrapper, Container, Title, Text, P }  from 'styles';

const Home = styled(Wrapper)`
    position: relative;
    display: flex;
    overflow: auto;
`;

const HomeContent = styled(Wrapper)`
    max-width: 650px;
    text-align: justify;
    line-height: 1.5rem;
    opacity: ${p => p.nearTopOfPage ? 1 : 0};
    transition: 0.5s opacity;
`;

const ScrollPrompt = styled.div`
    position: absolute;
    bottom: 50px;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    i {
        font-size: 20px;
        position: absolute;
        left: 50%;
        top: 30px;
        animation: scrollPromptMove 3s infinite, scrollPromptFlash 3s infinite;
    }
    span {
    }
    opacity: ${p => p.nearTopOfPage ? 1 : 0};
    transition: 0.5s opacity;
`;

function mapStateToProps(state) {
    return {
        nearTopOfPage: state.scroll.nearTopOfPage
    };
};

const Homepage = ({nearTopOfPage}) => (
    <Home height='100%'>
        <Container flex centerboth >
            <HomeContent nearTopOfPage={nearTopOfPage} margin >
                <P lightblack ><Text title sizetitle >Hi there 👋</Text></P>
                <P lightblack >I'm a software engineer with with a penchant for great digital design. I'm currently based in London and work for <a href='http://www.moo.com/uk' target='_blank'>MOO Print Ltd</a>. I have extensive experience across the full development stack, including mobile. I mainly code in Javascript (Node / React / Angular), Python and Java. I'm always keen to hear about new and interesting projects so don't hesitate to contact me!</P>
            </HomeContent>
        </Container>
        <ScrollPrompt nearTopOfPage={nearTopOfPage}>
            <Text lightblack title bold lead >Contact<i className="fa fa-chevron-down"></i></Text>
        </ScrollPrompt>
    </Home>
);

export default connect(mapStateToProps, undefined)(Homepage);
