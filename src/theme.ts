import { DefaultTheme } from 'styled-components';

interface ITheme extends DefaultTheme {
    colors: {
        bg: string;
        text: string;
        card: string;
    };
}

export const theme: ITheme = {
    colors: {
        bg: `#2f3640`,
        text: `#fff`,
        card: '#353b48',
    },
};
