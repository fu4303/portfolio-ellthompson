import React from 'react';
import styled from 'styled-components';
import { media, Wrapper, Container, Title, P, Text }  from 'styles';

const ContactPage = styled(Wrapper)`
    padding-top: 84px;
    height: calc(100% - 84px - 103px);
    display: flex;
    justify-content: center;
    align-items: center;
    ${media.phone`
        align-items: flex-start;
        height: calc(100% - 135px);
        padding-top: 135px;
    `}
`;

const ContactWrapper = styled(Wrapper)`
    flex-wrap: wrap;
    display: flex;
    flex-direction: column;
    width: calc(100% - 48px);
    max-width: 650px;
    overflow: hidden;
`;

const ContactLink = styled.a`
    display: flex;
    align-items: baseline;
    ${media.phone`
        justify-content: space-between;
    `}
`;

const Icon = styled.i`
    font-size: 24px;
    display: none;
    ${media.phone`
        display: block;
    `}
    color: rgba(0, 0, 0, 0.7);
`;

const ContactType = styled(P)`
    ${media.phone`
        display: none;
    `}
`;

const Lines = styled.div`
    flex-grow: 1;
    overflow: hidden;
    margin: 0 4px;
    ${media.phone`
        display: none;
    `}
`;

const Contact = () => (
    <ContactPage overflowauto >
        <ContactWrapper margin overflowauto flex justifycenter >
            <ContactLink href='mailto:ellth92@gmail.com?Subject=Hi%20Elliott!' target='_blank'>
                <ContactType lightblack lead >Email</ContactType>
                <Icon className="fa fa-envelope"></Icon>
                <Lines><Text lightblack lead >{'.'.repeat(500)}</Text></Lines>
                <P lightblack lead >ellth92@gmail.com</P>
            </ContactLink>
            <ContactLink href='http://github.com/ellt92' target='_blank'>
                <ContactType lightblack lead >Github</ContactType>
                <Icon className="fa fa-github"></Icon>
                <Lines><Text lightblack lead >{'.'.repeat(500)}</Text></Lines>
                <P lightblack lead >@ellt92</P>
            </ContactLink>
            <ContactLink href='http://linkedin.com/in/ellt92' target='_blank'>
                <ContactType lightblack lead >LinkedIn</ContactType>
                <Icon className="fa fa-linkedin"></Icon>
                <Lines><Text lightblack lead >{'.'.repeat(500)}</Text></Lines>
                <P lightblack lead >/in/ellt92</P>
            </ContactLink>
            <ContactLink href='http://twitter.com/ellt92' target='_blank'>
                <ContactType lightblack lead >Twitter</ContactType>
                <Icon className="fa fa-twitter"></Icon>
                <Lines><Text lightblack lead >{'.'.repeat(500)}</Text></Lines>
                <P lightblack lead >@ellt92</P>
            </ContactLink>
        </ContactWrapper>
    </ContactPage>
);

export default Contact;
