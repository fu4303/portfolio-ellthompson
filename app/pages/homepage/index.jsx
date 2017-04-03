import React from 'react';
import { FlexCentered, Title, Text, LeadText, SmallText, Paragraph }  from 'styles';

const Homepage = () => (
    <div>
        <Title bold>Hello World</Title>
        <Paragraph bold italic>This is a test</Paragraph>
        <Paragraph italic>This is a test again</Paragraph>
        <Paragraph>This is another test again</Paragraph>
        <FlexCentered>
            <Paragraph>
                <LeadText>The quick brown</LeadText><Text> fox jumped over</Text><SmallText bold> the lazy dog.</SmallText>
            </Paragraph>
        </FlexCentered>
    </div>
);

export default Homepage;
