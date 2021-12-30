import * as S from './map.styled'
import { Map, Placemark } from 'react-yandex-maps';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { loadAddress, setAddressStatus } from '../store/actions';

const YandexMap = ({ ymaps, address, addressInput, totalPrice }: any) => {
    const [coords, setCoords] = useState();
    const [onMapClickData, setOnMapClickData] = useState(Object);
    const [dataFromInput, setDataFromInput] = useState(Object);
    const [isMapClicked, setIsMapClicked] = useState(false);

    const dispatch = useDispatch();

    const onMapClick = (e: any) => {
        const coords = e.get("coords");
        new ymaps.geocode(coords, {
            results: 1,
        }).then((res: any) => {
            const firstGeoObject = res.geoObjects.get(0)
            setOnMapClickData(firstGeoObject);
            setIsMapClicked(true);
            dispatch(loadAddress(firstGeoObject.properties._data.text))
            dispatch(setAddressStatus(true))
        })
    };

    useEffect(() => {
        new ymaps.SuggestView(addressInput.current, {
            offset: [10, 10],
        })

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

    }, [address, addressInput, ymaps.Placemark, ymaps.SuggestView, ymaps.geocode])


    const prop = { ...dataFromInput };

    return (
        <S.StyledContainer>
            <S.StyledPriceContainer>
                <p>Итог:</p>
                <p>{totalPrice} руб.</p>
            </S.StyledPriceContainer>
            <Map defaultState={{
                center: [55.751574, 37.573856],
                zoom: 9,
                controls: [],
            }}
                width={'555px'}
                height={'700px'}
                onClick={onMapClick}
                modules={['geocode']}
            >
                <Placemark geometry={coords ? [coords[0], coords[1]] : []}
                    options={{
                        controls: [],
                        balloonOffset: [3, -40]
                    }}
                    properties={{
                        hintContent: prop.hintContent,
                        balloonContentHeader: prop.balloonContentHeader,
                        balloonContent: prop.balloonContent,
                        iconCaption: prop.iconCaption,
                        _data: { dataFromInput },
                    }}
                    modules={['geoObject.addon.balloon', 'geoObject.addon.hint']}
                />
                {isMapClicked ? <Placemark geometry={onMapClickData.geometry.getCoordinates()} properties={{
                    hintContent: onMapClickData.properties._data.hintContent,
                    balloonContentHeader: onMapClickData.properties._data.balloonContentHeader,
                    balloonContent: onMapClickData.properties._data.balloonContent,
                    iconCaption: onMapClickData.properties._data.iconCaption,
                    _data: onMapClickData.properties._data
                }} /> :
                    ''
                }
            </Map>
        </S.StyledContainer>
    );
};

export default YandexMap;