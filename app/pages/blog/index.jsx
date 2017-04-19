import React from 'react';
import moment from 'moment';
import { Wrapper, Container, Title, SubTitle, P, Text }  from 'styles';
import BlogPosts from '../../../blog-posts.json';

import BlogList from './blog-list';
import BlogPost from './blog-post';

const Blog = () => (
    <Wrapper limebg overflowauto minheight='calc(100% - 177px)' >
        <Container>
            <Wrapper>
                <BlogList/>
                <BlogPost item={BlogPosts[0]}/>
            </Wrapper>
        </Container>
    </Wrapper>
);

export default Blog;
