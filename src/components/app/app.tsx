import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../styles/theme';
import Cart from '../cart/cart';
import YandexMap from '../map/yandex-map';
import YandexApiProvider from '../yandex-api-provider/yandex-api-provider';


const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <YandexApiProvider >
            </YandexApiProvider>

        </ThemeProvider>
    );
};

export default App;