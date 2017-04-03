import styled, { injectGlobal } from 'styled-components';
import SpaceMonoRegular from 'fonts/Space_Mono/SpaceMono-Regular.ttf';
import SpaceMonoBold from 'fonts/Space_Mono/SpaceMono-Bold.ttf';
import SpaceMonoItalic from 'fonts/Space_Mono/SpaceMono-Italic.ttf';
import SpaceMonoBoldItalic from 'fonts/Space_Mono/SpaceMono-BoldItalic.ttf';

// Fonts
injectGlobal`
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

// Layout
export const FlexCentered = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

// Elements
export const Title = styled.h1`
    font-family: ${getFontType};
    font-size: 40px;
    margin: 24px 0;
    color: paleblue;
`;

export const SubTitle = styled.h2`
    font-family: ${getFontType};
    font-size: 32px;
    margin: 16px 0;
    color: palevioletred;
`;

export const Paragraph = styled.p`
    font-family: ${getFontType};
    font-size: 16px;
    color: black;
    margin: 8px 0;
`;

export const Text = styled.span`
    font-family: ${getFontType};
    font-size: 16px;
    color: black;
`;

export const LeadText = styled.span`
    font-family: ${getFontType};
    font-size: 24px;
    color: black;
`;

export const SmallText = styled.span`
    font-family: ${getFontType};
    font-size: 8px;
    color: black;
`;
