import React from 'react';
import moment from 'moment';
import { Wrapper, Container, Title, SubTitle, P, Text }  from 'styles';
import BlogPosts from '../../../blog-posts.json';

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

const BlogPost = ({item}) => (
    <div>
        <Title lightblack >{item.title} <Text small >{moment(item.date).format("MMM Do YY")}</Text></Title>
        <P><Text lead >{item.shortContent}</Text></P>
        <P><Text>{item.content}</Text></P>
    </div>
);

const Blog = () => (
    <Wrapper limebg overflowauto minheight='calc(100% - 177px)' >
        <Container>
            <Wrapper margin flex rowreverse >
                <Wrapper width='25%'>
                    <BlogList/>
                </Wrapper>
                <Wrapper width='75%'>
                    <BlogPost item={BlogPosts[0]}/>
                </Wrapper>
            </Wrapper>
        </Container>
    </Wrapper>
);

export default Blog;
