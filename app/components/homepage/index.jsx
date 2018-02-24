import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import copy from 'text.json';

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
    bottom: 0px;
    width: 100%;
    height: 75px;
    text-align: center;
    a {
    width: 50px;
    height: 50px;
    display: block;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    }
    i {
        font-size: 30px;
        position: absolute;
        left: 50%;
        top: 0px;
        animation: scrollPromptMove 3s infinite, scrollPromptFlash 3s infinite;
    }
    opacity: ${p => p.nearTopOfPage ? 1 : 0};
    transition: 0.2s opacity;
`;

const HomepageTitle = styled.span`
    text-shadow: 2px 2px #eaf0a4;
`;

const HomepageText = styled(P)`
    text-shadow: 1px 1px #eaf0a4;
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
                <P tone1dark ><Text title sizetitle tone1dark textshadow="tone2dark"><HomepageTitle>{copy.homepageTitle}</HomepageTitle></Text></P>
                <HomepageText tone1dark title>{copy.homepageParagraph}</HomepageText>
            </HomeContent>
        </Container>
        <ScrollPrompt nearTopOfPage={nearTopOfPage}>
            <a href='#contact'><Text tone2 lightblack title bold lead ><i className="fa fa-chevron-down"></i></Text></a>
        </ScrollPrompt>
    </Home>
);

export default connect(mapStateToProps, undefined)(Homepage);
