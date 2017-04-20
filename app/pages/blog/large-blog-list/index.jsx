import React from 'react';
import { Route } from 'react-router-dom';
import moment from 'moment';
import _ from 'lodash';
import { Wrapper, Container, Title, SubTitle, P, Text }  from 'styles';

import BlogPosts from '../../../../blog-posts.json';

const LargeBlogList = () => {
    const items = BlogPosts;
    return (
        <Wrapper>
            <Title>Blog Posts</Title>
            {
                _.map(items, item => (
                    <Wrapper>
                        <P>{item.title} <Text small >{moment(item.date).format("MMM Do YY")}</Text></P>
                        <P>{item.shortContent}</P>
                    </Wrapper>
                ))
            }
        </Wrapper>
    );
};

export default LargeBlogList;
