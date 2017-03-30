import React from 'react';
import ReactDOM from 'react-dom';
import { Title }  from 'styles';

const root = document.createElement('div');
document.body.insertBefore(root, document.body.firstElementChild);

ReactDOM.render(
    <div id="foo">
        <Title>Hello, world!</Title>
    </div>,
    root
);
