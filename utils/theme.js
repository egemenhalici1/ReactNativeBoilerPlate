import { MD3LightTheme as DefaultTheme, PaperProvider } from 'react-native-paper';

export const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: '#00248f',
        secondary: '#f4f0ec',
        inputBorderColor: '#808080',
        toastError: '#C73E1D',
        toastSuccess: '#428959',
        toastWarning: '#F18F01',
        toastDefault: '#2A4F87'
    },
};