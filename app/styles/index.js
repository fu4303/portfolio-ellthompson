import styled, { injectGlobal,css } from 'styled-components';
import SpaceMonoRegular from 'fonts/Space_Mono/SpaceMono-Regular.ttf';
import SpaceMonoBold from 'fonts/Space_Mono/SpaceMono-Bold.ttf';
import SpaceMonoItalic from 'fonts/Space_Mono/SpaceMono-Italic.ttf';
import SpaceMonoBoldItalic from 'fonts/Space_Mono/SpaceMono-BoldItalic.ttf';

export const media = {
    phone: (...args) => css`
        @media and screen (max-width: 640px) {
            ${ css(...args) }
        }
    `
}

injectGlobal`
    html, body, #root {
        margin: 0px;
        height: 100%;
    }
    a {
        text-decoration: none;
    }
    @font-face {
        font-family: SpaceMonoRegular;
        src: url('${SpaceMonoRegular}') format('opentype');
    }
    @font-face {
        font-family: SpaceMonoBold;
        src: url('${SpaceMonoBold}') format('opentype');
    }
    @font-face {
        font-family: SpaceMonoItalic;
        src: url('${SpaceMonoItalic}') format('opentype');
    }
    @font-face {
        font-family: SpaceMonoBoldItalic;
        src: url('${SpaceMonoBoldItalic}') format('opentype');
    }
`

const getFontType = p => {
    if (p.bold && p.italic) return 'SpaceMonoBoldItalic';
    else if (p.bold) return 'SpaceMonoBold';
    else if (p.italic) return 'SpaceMonoItalic';
    else return 'SpaceMonoRegular';
}

const getColour = p => {
    if (p.blue) return 'blue';
    else if (p.red) return 'red';
    else if (p.white) return 'white';
    else return 'rgba(0,0,0,0.7)';
}

const getBGColour = p => {
    if (p.slatebg) return '#3d495f';
    else if (p.lightbluebg) return '#cff4ff';
    else if (p.coralbg) return '#f5cfb3';
    else if (p.limebg) return '#d2f1d0';
    else return 'none';
}

// Layout
export const Container = styled.div`
    max-width: 1124px;
    margin: 0 auto;
    padding: 0 24px;
`;

export const Wrapper = styled.div`
    * {
        margin-left: ${p => p.spacechildren ? '24px' : 'none'};
    }
    *:first-child {
        margin-left: ${p => p.spacechildren ? '0px' : 'none'};
    }
    margin: ${p => {
        if (p.margin) return '24px 0';
        else if (p.thinmargin) return '16px 0';
        else return 'none';
    }};
    padding: ${p => {
        if (p.padding) return '24px 0';
        else if (p.thinpadding) return '16px 0';
        else return 'none';
    }};
    background-color: ${getBGColour};
    background-image: ${p => p.bgi ? `url(${p.bgi})` : null};
    display: ${p => p.flex ? 'flex' : 'block'};
    flex-direction: ${p => p.rowreverse ? 'row-reverse' : null}
    align-items: ${p => p.centerboth || p.aligncenter ? 'center' : 'none'};
    justify-content: ${p => {
        if (p.centerboth || p.justifycenter) return 'center';
        else if (p.justifyspacebetween) return 'space-between';
    }};
    overflow: ${p => p.overflowauto ? 'auto' : 'none'};
    width: ${p => p.width};
    height: ${p => p.height};
    min-height: ${p => p.minheight};
`;

// Elements
export const Title = styled.h1`
    font-family: ${getFontType};
    font-size: 40px;
    margin: 24px 0;
    color: ${getColour};
`;

export const SubTitle = styled.h3`
    font-family: ${getFontType};
    font-size: 32px;
    margin: 16px 0;
    color: ${getColour};
`;

export const P = styled.p`
    font-family: ${getFontType};
    font-size: ${p => {
        if (p.lead) return '24px';
        else if (p.small) return '12px';
        else if (p.xsmall) return '8px';
        else return '16px';
    }};
    color: ${getColour};
    margin: 8px 0;
    ${media.phone`
        text-align: ${p => p.center ? 'center' : 'justify'};
    `}
    text-align: ${p => p.center ? 'center' : 'none'};
`;

export const Text = styled.span`
    font-family: ${getFontType};
    font-size: ${p => {
        if (p.lead) return '24px';
        else if (p.small) return '12px';
        else if (p.xsmall) return '8px';
        else return '16px';
    }};
    color: ${getColour};
    transition: font-size 0.5s;
    text-align: ${p => p.center ? 'center' : 'none'};
`;
