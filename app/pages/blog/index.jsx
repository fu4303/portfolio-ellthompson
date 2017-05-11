import React from 'react';
import { Route } from 'react-router-dom';
import moment from 'moment';
import styled from 'styled-components';
import { media, Wrapper, Container, Title, SubTitle, P, Text }  from 'styles';

import BlogList from './blog-list';
import LargeBlogList from './large-blog-list';
import BlogPost from './blog-post';

const BlogPage = styled(Wrapper)`
    padding-top: 84px;
    ${media.phone`
        flex-direction: column;
        padding-top: 135px;
    `}
`;

const Blog = () => (
    <BlogPage overflowauto >
        <Container>
            <Route exact path='/blog' component={LargeBlogList}/>
            <Route exact path='/blog/:slug' component={BlogPost}/>
        </Container>
    </BlogPage>
);

export default Blog;
