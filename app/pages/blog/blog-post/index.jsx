import React from 'react';
import moment from 'moment';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import { Wrapper, Container, Title, SubTitle, P, Text }  from 'styles';

import BlogPosts from '../../../../blog-posts.json';
const BlogPost = ({match}) => {
    const item = _.find(BlogPosts, item => {
        return match.params.slug == item.slug;
    });
    if (item) {
        return (
            <Wrapper>
                <Title lightblack >{item.title} <Text small >{moment(item.date).format("MMM Do YY")}</Text></Title>
                <Wrapper margin ><Text lead >{item.shortContent}</Text></Wrapper>
                <P><Text>{item.content}</Text></P>
            </Wrapper>
        );
    } else {
        return (
            <Wrapper><Text>Blog post not found. Head to the main <Link to='/blog'>blog page</Link> if you'd like to browse.</Text></Wrapper>
        );
    }
};

export default BlogPost;
