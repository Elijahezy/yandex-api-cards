import React from 'react';
import { withYMaps, YMaps } from 'react-yandex-maps';
import Cart from '../cart/cart';


const apiKey = '00af79f9-3453-4145-be00-bda4256d578b';

const YandexApiProvider = ({ children }: any) => {


  const CartSuggestComponent = React.useMemo(() => {
    return withYMaps(Cart, true, [
      "SuggestView",
      "geocode",
      "coordSystem.geo"
    ]);
  }, []);
  return (
    <div>
      <YMaps query={{ lang: 'en_RU', apikey: apiKey }}>
        <CartSuggestComponent />
        {children}
      </YMaps>
    </div>
  );
};

export default YandexApiProvider;