import React from 'react';
import { Route } from 'react-router-dom';
import moment from 'moment';
import { Wrapper, Container, Title, SubTitle, P, Text }  from 'styles';

import BlogList from './blog-list';
import LargeBlogList from './large-blog-list';
import BlogPost from './blog-post';

const Blog = () => (
    <Wrapper limebg overflowauto minheight='calc(100% - 177px)' >
        <Container>
            <Route exact path='/blog' component={LargeBlogList}/>
            <Route exact path='/blog/:slug' component={BlogPost}/>
        </Container>
    </Wrapper>
);

export default Blog;
