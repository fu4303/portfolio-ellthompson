import styled, { injectGlobal,css } from 'styled-components';
import AdelleRegular from 'fonts/Adelle/AdelleSansBasic_Regular.woff2';
import AdelleBold from 'fonts/Adelle/AdelleSansBasic_Bold.woff2';
import PTRegular from 'fonts/PT_Serif/PT_Serif-Web-Regular.ttf';
import PTItalic from 'fonts/PT_Serif/PT_Serif-Web-Italic.ttf';
import PTBold from 'fonts/PT_Serif/PT_Serif-Web-Bold.ttf';
import PTBoldItalic from 'fonts/PT_Serif/PT_Serif-Web-BoldItalic.ttf';

export const media = {
    phone: (...args) => css`
        @media (max-width: 640px) {
            ${ css(...args) }
        }
    `,
    desktop: (...args) => css`
        @media (min-width: 641px) {
            ${ css(...args) }
        }
    `
}

injectGlobal`
    html, body {
        margin: 0px;
        height: 100%;
    }
    #root {
        //background: linear-gradient(45deg, rgb(204, 103, 255), rgb(0, 208, 255));
        background: linear-gradient(45deg, rgb(255, 181, 253), rgb(97, 255, 248));
        ${media.desktop`
            height: 100%;
        `}
    }
    a {
        text-decoration: none;
    }
    @font-face {
        font-family: AdelleRegular;
        src: url('${AdelleRegular}') format('opentype');
    }
    @font-face {
        font-family: AdelleBold;
        src: url('${AdelleBold}') format('opentype');
    }
    @font-face {
        font-family: PTRegular;
        src: url('${PTRegular}') format('opentype');
    }
    @font-face {
        font-family: PTBold;
        src: url('${PTBold}') format('opentype');
    }
    @font-face {
        font-family: PTBoldItalic;
        src: url('${PTBoldItalic}') format('opentype');
    }
    @font-face {
        font-family: PTItalic;
        src: url('${PTItalic}') format('opentype');
    }
`

const getTitleFontType = p => {
    if (p.bold) return 'AdelleBold';
    else return 'AdelleRegular';
}

const getFontType = p => {
    if (p.bold && p.italic) return 'PTBoldItalic';
    else if (p.bold) return 'PTBold';
    else if (p.italic) return 'PTItalic';
    else return 'PTRegular';
}

export const getColour = p => {
    if (p.blue) return 'blue';
    else if (p.red) return 'red';
    else if (p.white) return 'white';
    else return 'rgba(0,0,0,0.7)';
}

const getBGColour = p => {
    if (p.slatebg) return 'rgba(61, 73, 95, 0.75)';
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
    display: ${p => p.flex ? 'flex' : 'block'};
    justify-content: ${p => {
        if (p.centerboth || p.justifycenter) return 'center';
        else if (p.justifyspacebetween) return 'space-between';
    }};
    align-items: ${p => p.centerboth || p.aligncenter ? 'center' : 'none'};
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
    font-family: ${getTitleFontType};
    font-size: 40px;
    margin: 24px 0 8px;
    color: ${getColour};
`;

export const SubTitle = styled.h3`
    font-family: ${getTitleFontType};
    font-size: 32px;
    margin: 16px 0 8px;
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

export const Divider = styled.div`
    width: calc(100% - 64px);
    height: 1px;
    background-color: rgba(0,0,0,0.3);
    padding-left: 32px;
    padding-right: 32px;
`;

export const Text = styled.span`
    font-family: ${p => p.title ? getTitleFontType : getFontType};
    font-size: ${p => {
        if (p.sizetitle) return '40px';
        else if (p.sizesubtitle) return '32px';
        else if (p.lead) return '24px';
        else if (p.small) return '12px';
        else if (p.xsmall) return '8px';
        else return '16px';
    }};
    color: ${getColour};
    transition: font-size 0.5s;
    ${media.phone`
        transition: font-size 0s;
    `}
    text-align: ${p => p.center ? 'center' : 'none'};
`;
