import React from 'react';
import moment from 'moment';
import { Wrapper, Container, Title, SubTitle, P, Text }  from 'styles';

const BlogPost = ({item}) => (
    <div>
        <Title lightblack >{item.title} <Text small >{moment(item.date).format("MMM Do YY")}</Text></Title>
        <Wrapper margin ><Text lead >{item.shortContent}</Text></Wrapper>
        <P><Text>{item.content}</Text></P>
    </div>
);

export default BlogPost;
