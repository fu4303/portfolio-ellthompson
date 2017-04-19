import React from 'react';
import moment from 'moment';
import { Wrapper, Container, Title, SubTitle, P, Text }  from 'styles';
import BlogPosts from '../../../../blog-posts.json';

const BlogList = () => (
    <Wrapper margin >
        <Text lead bold >Posts</Text>
        {
            BlogPosts.map((item, i) => (
                <P key={i}><Text bold >{item.title}</Text> <Text small >{moment(item.date).format("MMM Do YY")}</Text></P>
            ))
        }
    </Wrapper>
);

export default BlogList;
