import React from 'react';
import styled from 'styled-components';
import { media, Wrapper, Container, Title, P, Text }  from 'styles';

const Icon = styled.i`
    font-size: 24px;
`;

const ItemWrapper = styled(Wrapper)`
    backgroundColor: rgba(144, 144, 144, 0.25);
    borderRadius: 7px;
    margin: 8px;
    padding: 8px;
    display: inline-block;
    width: calc(50% - 32px);
    ${media.phone`
        width: 100%;
    `}
`;

const Lines = styled.div`
    flex-grow: 1;
    overflow: hidden;
    margin: 0 4px;
`;

const ContactPage = styled(Wrapper)`
    padding-top: 84px;
    height: calc(100% - 84px - 103px);
    display: flex;
    justify-content: center;
    align-items: center;
    ${media.phone`
        align-items: flex-start;
        height: calc(100% - 135px - 103px);
        padding-top: 135px;
    `}
`;

const ContactWrapper = styled(Wrapper)`
    flex-wrap: wrap;
    display: flex;
    flex-direction: column;
`;

const ContactLink = styled.a`
    display: flex;
    align-items: baseline;
`;

const ItemText = styled(Text)`
    flex-grow: 1;
`;

const ContactContainer = styled(Container)`
    max-width: 650px;
    width: calc(100% - 48px);
`;

const Contact = () => (
    <ContactPage overflowauto >
        <ContactContainer>
            <Wrapper margin >
                <ContactWrapper overflowauto flex justifycenter >
                    <ContactLink href='mailto:ellth92@gmail.com?Subject=Hi%20Elliott!' target='_blank'>
                        <P lightblack lead >Email</P>
                        <Lines><Text lightblack lead >{'.'.repeat(500)}</Text></Lines>
                        <P lightblack lead >ellth92@gmail.com</P>
                    </ContactLink>
                    <ContactLink href='http://github.com/ellt92' target='_blank'>
                        <P lightblack lead >Github</P>
                        <Lines><Text lightblack lead >{'.'.repeat(500)}</Text></Lines>
                        <P lightblack lead >@ellt92</P>
                    </ContactLink>
                    <ContactLink href='http://linkedin.com/in/ellt92' target='_blank'>
                        <P lightblack lead >LinkedIn</P>
                        <Lines><Text lightblack lead >{'.'.repeat(500)}</Text></Lines>
                        <P lightblack lead >/in/ellt92</P>
                    </ContactLink>
                    <ContactLink href='http://twitter.com/ellt92' target='_blank'>
                        <P lightblack lead >Twitter</P>
                        <Lines><Text lightblack lead >{'.'.repeat(500)}</Text></Lines>
                        <P lightblack lead >@ellt92</P>
                    </ContactLink>
                </ContactWrapper>
            </Wrapper>
        </ContactContainer>
    </ContactPage>
);

export default Contact;
