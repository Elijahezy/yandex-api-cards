import * as S from './map.styled'
import { Map, Placemark } from 'react-yandex-maps';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadAddress, setAddressStatus } from '../store/actions';
import { State } from '../types/types';

const YandexMap = ({ ymaps, addressInput, totalPrice }: any) => {
    const [coords, setCoords] = useState();
    const [onMapClickData, setOnMapClickData] = useState(Object);
    const [dataFromInput, setDataFromInput] = useState(Object);

    const status = useSelector<State, any>((state) => state.status)
    const address = useSelector<State, string>((state) => state.address)

    const dispatch = useDispatch();

    const onMapClick = (evt: any) => {
        const coords = evt.get("coords");
        new ymaps.geocode(coords, {
            results: 1,
        }).then((res: any) => {
            const firstGeoObject = res.geoObjects.get(0)
            setOnMapClickData(firstGeoObject);
            dispatch(setAddressStatus(true));
            dispatch(loadAddress(firstGeoObject.properties._data.text))
            dispatch(setAddressStatus(true))
        })
    };

    useEffect(() => {
        new ymaps.SuggestView(addressInput.current, {})

        new ymaps.geocode(address, {
            results: 1,
        })
            .then((res: any) => {
                const firstGeoObject = res.geoObjects.get(0)
                const coords = firstGeoObject.geometry.getCoordinates()
                const bounds = firstGeoObject.properties._data;
                setCoords(coords)
                setDataFromInput(bounds);
            })

    }, [address, addressInput, ymaps.SuggestView, ymaps.geocode])


    const verifiedAddress = { ...dataFromInput };

    return (
        <S.StyledContainer>
            <S.StyledPriceContainer>
                <p>Итог:</p>
                <p>{totalPrice} руб.</p>
            </S.StyledPriceContainer>
            <Map state={{
                center: coords ? [coords[0], coords[1]] : [55.751574, 37.573856],
                zoom: coords ? 15 : 9,
                controls: [],
            }}
                width={'555px'}
                height={'700px'}
                onClick={onMapClick}
                modules={['geocode']}
            >
                {
                    status ? '' : <Placemark geometry={coords ? [coords[0], coords[1]] : []}
                        options={{
                            controls: [],
                            balloonOffset: [3, -40]
                        }}
                        properties={{
                            hintContent: verifiedAddress.hintContent,
                            balloonContentHeader: verifiedAddress.balloonContentHeader,
                            balloonContent: verifiedAddress.balloonContent,
                            iconCaption: verifiedAddress.iconCaption,
                            _data: { dataFromInput },
                        }}
                        modules={['geoObject.addon.balloon', 'geoObject.addon.hint']}
                    />}
                {
                    status ? <Placemark geometry={onMapClickData.geometry.getCoordinates()} properties={{
                        hintContent: onMapClickData.properties._data.hintContent,
                        balloonContentHeader: onMapClickData.properties._data.balloonContentHeader,
                        balloonContent: onMapClickData.properties._data.balloonContent,
                        iconCaption: onMapClickData.properties._data.iconCaption,
                        _data: onMapClickData.properties._data
                    }} /> : ''
                }
            </Map>
        </S.StyledContainer>
    );
};

export default YandexMap;