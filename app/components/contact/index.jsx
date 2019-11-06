import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { media, Wrapper, Container, Title, P, Text } from "styles";

const ContactPage = styled(Wrapper)`
  position: relative;
  padding-top: 84px;
  height: calc(100% - 84px - 103px);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: ${p => (p.nearBottomOfPage ? 1 : 0)};
  transition: 0.5s opacity;
  ${media.phone`
        padding: 0px;
        height: 100%;
    `};
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
    `};
`;

const ContactLink = styled.a`
  display: flex;
  align-items: baseline;
  width: 100%;

  ${media.phone`
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    `} text-shadow: 2px 2px #eaf0a4;
`;

const Icon = styled.i`
  font-size: 24px;
  display: none;
  ${media.phone`
        display: inline-block;
    `};
`;

const ContactType = styled(P)`
  ${media.desktop`
        font-weight: unset;
    `};
`;

const Lines = styled.div`
  flex-grow: 1;
  overflow: hidden;
  margin: 0 4px;
  ${media.phone`
        display: none;
    `};
`;

function mapStateToProps(state) {
  return {
    nearBottomOfPage: state.scroll.nearBottomOfPage
  };
}

const Contact = ({ nearBottomOfPage }) => (
  <ContactPage overflowauto nearBottomOfPage={nearBottomOfPage}>
    <ContactWrapper margin overflowauto flex justifycenter>
      <ContactLink
        href="mailto:ellth92@gmail.com?Subject=Hi%20Elliott!"
        target="_blank"
      >
        <ContactType tone1dark lead title bold>
          <Icon className="fa fa-envelope-square" /> Email
        </ContactType>
        <Lines>
          <Text tone1dark lead title>
            {".".repeat(500)}
          </Text>
        </Lines>
        <P tone1dark lead title>
          ellth92@gmail.com
        </P>
      </ContactLink>
      <ContactLink href="http://github.com/ellt92" target="_blank">
        <ContactType tone1dark lead title bold>
          <Icon className="fa fa-github-square" /> Github
        </ContactType>
        <Lines>
          <Text tone1dark lead title>
            {".".repeat(500)}
          </Text>
        </Lines>
        <P tone1dark lead title>
          @ellt92
        </P>
      </ContactLink>
      <ContactLink href="http://linkedin.com/in/ellt92" target="_blank">
        <ContactType tone1dark lead title bold>
          <Icon className="fa fa-linkedin-square" /> LinkedIn
        </ContactType>
        <Lines>
          <Text tone1dark lead title>
            {".".repeat(500)}
          </Text>
        </Lines>
        <P tone1dark lead title>
          /in/ellt92
        </P>
      </ContactLink>
      <ContactLink
        href="https://docs.google.com/document/d/19640Og0vWjnXd7V8286G2SZHAZ2l8OZlXJfVgX_7dHM/edit?usp=sharing"
        target="_blank"
      >
        <ContactType tone1dark lead title bold>
          <Icon className="fa fa-file-text" /> CV
        </ContactType>
        <Lines>
          <Text tone1dark lead title>
            {".".repeat(500)}
          </Text>
        </Lines>
        <P tone1dark lead title nowrap>
          Elliott Thompson
        </P>
      </ContactLink>
    </ContactWrapper>
  </ContactPage>
);

export default connect(mapStateToProps, undefined)(Contact);
