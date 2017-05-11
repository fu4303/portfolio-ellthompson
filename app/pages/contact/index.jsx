import React from 'react';
import styled from 'styled-components';
import { media, Wrapper, Container, Title, P, Text }  from 'styles';

const Icon = styled.i`
    font-size: 40px;
`;

const ItemWrapper = styled(Wrapper)`
    backgroundColor: rgba(144, 144, 144, 0.25);
    borderRadius: 7px;
    margin: 8px;
    padding: 8px;
    width: calc(50% - 32px);
    ${media.phone`
        width: 100%;
    `}
`;

const ContactWrapper = styled(Wrapper)`
    flex-wrap: wrap;
`;

const ContactPage = styled(Wrapper)`
    padding-top: 84px;
    ${media.phone`
        flex-direction: column;
        padding-top: 135px;
    `}
`;

const Contact = () => (
    <ContactPage height='100%' overflowauto >
        <Container>
            <Wrapper margin >
                <ContactWrapper flex justifycenter >
                    <ItemWrapper>
                        <a href='mailto:ellth92@gmail.com?Subject=Hi%20Elliott!' target='_blank'>
                            <P lightblack center ><Icon className="fa fa-envelope"></Icon></P>
                            <P lightblack center >ellth92@gmail.com</P>
                        </a>
                    </ItemWrapper>
                    <ItemWrapper>
                        <a href='http://github.com/ellt92' target='_blank'>
                            <P lightblack center ><Icon className="fa fa-github"></Icon></P>
                            <P lightblack center >@ellt92</P>
                        </a>
                    </ItemWrapper>
                    <ItemWrapper>
                        <a href='http://linkedin.com/in/ellt92' target='_blank'>
                            <P lightblack center ><Icon className="fa fa-linkedin"></Icon></P>
                            <P lightblack center >/in/ellt92</P>
                        </a>
                    </ItemWrapper>
                    <ItemWrapper>
                        <a href='http://twitter.com/ellt92' target='_blank'>
                            <P lightblack center ><Icon className="fa fa-twitter"></Icon></P>
                            <P lightblack center >@ellt92</P>
                        </a>
                    </ItemWrapper>
                </ContactWrapper>
            </Wrapper>
        </Container>
    </ContactPage>
);

export default Contact;
