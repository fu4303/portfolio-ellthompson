import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
//
// const Background = styled.div`
//     position: fixed;
//     height: 100%;
//     width: 100%;
//     z-index: -9999;
//     background: linear-gradient(${p => p.bottomPage ? '135deg' : '45deg'}, #43c6ac, #f8ffae);
//     transition: 2s all ease;
// `;

const Background = styled.div`
    position: fixed;
    height: 100%;
    width: 100%;
    z-index: -9990;
    background: linear-gradient(45deg, #43c6ac, #f8ffae);
    &:before {
        display: block;
        background: linear-gradient(225deg, #43c6ac, #f8ffae);
        height: 100%;
        width: 100%;
        position: fixed;
        z-index: -9999;
        content: '';
        opacity: ${p => p.atBottom ? 1 : 0};
        transition: opacity 2s;
    };
`;

function mapStateToProps(state) {
    return {
        nearTopOfPage: state.scroll.nearTopOfPage,
        nearBottomOfPage: state.scroll.nearBottomOfPage,
    };
};

class BackgroundComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            atBottom: false
        };
    }
    componentWillUpdate(nextProps, nextState) {
        if (nextProps.nearBottomOfPage & !nextState.atBottom) {
            this.setState({atBottom: true});
        } else if (nextProps.nearTopOfPage & nextState.atBottom) {
            this.setState({atBottom: false});
        }
    }
    render() {
        const {atBottom} = this.state;
        return (
            <Background atBottom={atBottom}/>
        );
    }
};

export default connect(mapStateToProps)(BackgroundComponent);
