import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import _ from 'lodash';
import { Wrapper, Container, Title, SubTitle, P, Text, Divider }  from 'styles';

import BlogPosts from '../../../../blog-posts.json';

const LargeBlogList = () => {
    const items = BlogPosts;
    return (
        <Wrapper margin >
                {
                    _.map(items, item => [
                        <Wrapper>
                            <Link to={`/blog/${item.slug}`}>
                                <Title>{item.title} <Text small >{moment(item.date).format("MMM Do YY")}</Text></Title>
                                <P>{item.shortContent}</P>
                            </Link>
                        </Wrapper>
                    ])
                }
        </Wrapper>
    );
};

export default LargeBlogList;
