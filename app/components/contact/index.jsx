import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { media, Wrapper, Container, Title, P, Text }  from 'styles';

const ContactPage = styled(Wrapper)`
    position: relative;
    padding-top: 84px;
    height: calc(100% - 84px - 103px);
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: ${p => p.nearBottomOfPage ? 1 : 0};
    transition: 0.5s opacity;
    ${media.phone`
        padding: 0;
        height: 100%;
    `}
`;

const ContactWrapper = styled(Wrapper)`
    flex-wrap: wrap;
    display: flex;
    flex-direction: column;
    width: calc(100% - 48px);
    max-width: 650px;
    overflow: hidden;
    ${media.phone`
        justify-content: space-around;
        height: 100%;
        margin: 0;
    `}
`;

const ContactLink = styled.a`
    display: flex;
    align-items: baseline;
    ${media.phone`
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    `}
`;

const Icon = styled.i`
    font-size: 24px;
    display: none;
    ${media.phone`
        display: inline-block;
    `}
    color: rgba(0, 0, 0, 0.7);
`;

const ContactType = styled(P)`
`;

const Lines = styled.div`
    flex-grow: 1;
    overflow: hidden;
    margin: 0 4px;
    ${media.phone`
        display: none;
    `}
`;

function mapStateToProps(state) {
    return {
        nearBottomOfPage: state.scroll.nearBottomOfPage
    };
};

const Contact = ({nearBottomOfPage}) => (
    <ContactPage overflowauto nearBottomOfPage={nearBottomOfPage}>
        <ContactWrapper margin overflowauto flex justifycenter>
            <ContactLink href='mailto:ellth92@gmail.com?Subject=Hi%20Elliott!' target='_blank'>
                <ContactType lightblack lead ><Icon className="fa fa-envelope"></Icon> Email</ContactType>
                <Lines><Text lightblack lead >{'.'.repeat(500)}</Text></Lines>
                <P lightblack lead >ellth92@gmail.com</P>
            </ContactLink>
            <ContactLink href='http://github.com/ellt92' target='_blank'>
                <ContactType lightblack lead ><Icon className="fa fa-github"></Icon> Github</ContactType>
                <Lines><Text lightblack lead >{'.'.repeat(500)}</Text></Lines>
                <P lightblack lead >@ellt92</P>
            </ContactLink>
            <ContactLink href='http://linkedin.com/in/ellt92' target='_blank'>
                <ContactType lightblack lead ><Icon className="fa fa-linkedin"></Icon> LinkedIn</ContactType>
                <Lines><Text lightblack lead >{'.'.repeat(500)}</Text></Lines>
                <P lightblack lead >/in/ellt92</P>
            </ContactLink>
            <ContactLink href='http://twitter.com/ellt92' target='_blank'>
                <ContactType lightblack lead ><Icon className="fa fa-twitter"></Icon> Twitter</ContactType>
                <Lines><Text lightblack lead >{'.'.repeat(500)}</Text></Lines>
                <P lightblack lead >@ellt92</P>
            </ContactLink>
        </ContactWrapper>
    </ContactPage>
);

export default connect(mapStateToProps, undefined)(Contact);
