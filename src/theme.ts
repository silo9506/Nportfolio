import { DefaultTheme } from 'styled-components';

interface ITheme extends DefaultTheme {
    colors: {
        bg: string;
        text: string;
        card: string;
    };
    breakpoints: {
        sm: string;
        md: string;
        lg: string;
    };
}

export const theme: ITheme = {
    colors: {
        bg: `#2f3640`,
        text: `#fff`,
        card: '#353b48',
    },
    breakpoints: {
        sm: '480px',
        md: '768px',
        lg: '1024px',
    },
};
