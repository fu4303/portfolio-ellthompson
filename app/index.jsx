import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

 const Title = styled.h1`
   font-size: 1.5em;
   text-align: center;
   color: palevioletred;
`;

const root = document.createElement('div');
document.body.insertBefore(root, document.body.firstElementChild);

ReactDOM.render(
    <div id="foo">
        <Title>Hello, world!</Title>
    </div>,
    root
);
