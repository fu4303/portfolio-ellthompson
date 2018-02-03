import styled, { injectGlobal,css } from 'styled-components';
import AdelleRegular from 'fonts/Adelle/AdelleSansBasic_Regular.woff2';
import PTRegular from 'fonts/PT_Serif/PT_Serif-Web-Regular.ttf';

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
};

injectGlobal`
    html, body {
        margin: 0px;
        height: 100%;
    }
    #root {
        height: 100%;
    }
    a {
        text-decoration: none;
    }
    @font-face {
        font-family: AdelleRegular;
        src: url('${AdelleRegular}') format('opentype');
    }
    @keyframes scrollPromptMove {
        from { transform: translateX(-50%) translateY(0);}
        to { transform: translateX(-50%) translateY(15px);}
    }
    @keyframes scrollPromptFlash {
        0%, 100% {
            opacity: 0;
        }
        50%, 80% {
            opacity: 1;
        }
    }

`;

const getTitleFontType = p => {
    return 'AdelleRegular, Verdana';
};

const getFontType = p => {
    return 'TimesNewRoman';
};

export const getColour = p => {
    if (p.blue) return 'blue';
    else if (p.red) return 'red';
    else if (p.white) return 'white';
    else if (p.tone1) return '#43c6ac';
    else if (p.tone2) return '#f8ffae';
    else return 'rgba(0,0,0,0.7)';
};

const getBGColour = p => {
    if (p.slatebg) return 'rgba(61, 73, 95, 0.75)';
    else if (p.lightbluebg) return '#cff4ff';
    else if (p.coralbg) return '#f5cfb3';
    else if (p.limebg) return '#d2f1d0';
    else return 'none';
};

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
    font-family: ${p => p.title ? getTitleFontType : getFontType};
    font-size: ${p => {
        if (p.lead) return '24px';
        else if (p.small) return '12px';
        else if (p.xsmall) return '8px';
        else return '16px';
    }};
    font-weight: ${p => p.bold ? 'bold' : 'unset'};
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
    font-weight: ${p => p.bold ? 'bold' : 'unset'};
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
