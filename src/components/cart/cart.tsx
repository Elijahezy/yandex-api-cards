import * as S from './cart.styled'
import { FormEvent, useEffect, useRef, useState } from 'react';
import YandexMap from '../map/yandex-map';
import { useSelector } from 'react-redux';
import { Product, State } from '../types/types';
import ProductCard from '../product/product-card';
import uniqid from 'uniqid';

const Cart = (props: any) => {
    const { ymaps } = props;

    const addressInput = useRef(null);

    const [viewState, setViewState] = useState('');
    const [addressStatus, setAddressStatus] = useState(false);
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [packageType, setPackageType] = useState('none')

    const addressFromMapClick = useSelector<State, any>((state) => state.address)
    const status = useSelector<State, any>((state) => state.status)
    const products = useSelector<State, any>((state) => state.products)

    const onBuyClick = (evt: FormEvent<HTMLButtonElement>) => {
        evt.preventDefault();
        const info = {
            address: viewState,
            name: name,
            phone: phone,
            packageType: packageType,
        }


        if (name !== '' && phone !== '' && viewState !== '') {
            alert(JSON.stringify(info))
            console.log(JSON.stringify(info))
            return;
        }

        return alert('Введите адрес, имя и номер телефона')
    }


    useEffect(() => {
        if (status) {
            setAddressStatus(true);
            setViewState(addressFromMapClick);
        }
    }, [addressFromMapClick, status])


    return (
        <S.MainLayout>
            <S.ContainerFlexColumns>
                <h1>Корзина</h1>
                <h3>Есть аккаунт? <a href="/">Войти</a></h3>
                <form action="" id='formElement'>
                    <S.ContactsContainer>
                        <label htmlFor="adress">Адрес</label>
                        <S.ContactsInput ref={addressInput} value={addressStatus ? addressFromMapClick : null} onClick={() => setAddressStatus(false)} onBlur={(evt) => evt.currentTarget.value ? setViewState(evt.currentTarget.value) : ''} className="suggest" type="search" id="adress" placeholder='г.Санкт-Петербург' required />
                    </S.ContactsContainer>
                    <S.ContactsContainer>
                        <S.ContainerFlexRows>
                            <S.ContactsInput width={'40%'} type="text" placeholder='Ваше имя' onInput={(evt) => setName(evt.currentTarget.value)} required />
                            <S.ContactsInput width={'40%'} type="text" placeholder='Ваш телефон' onInput={(evt) => setPhone(evt.currentTarget.value)} required />
                        </S.ContainerFlexRows>
                    </S.ContactsContainer>
                    <S.ContactsContainer>
                        <S.ContactsSelect name="package-type" autoFocus onChange={(evt) => setPackageType(evt.currentTarget.value)} placeholder='Тип упаковки' required>
                            <option value="none">Без упаковки</option>
                            <option value="standard">Стандартная</option>
                            <option value="present">Подарочная</option>
                        </S.ContactsSelect>
                    </S.ContactsContainer>
                    <S.ContactsContainer>
                        <S.ContactsInput type="text" placeholder='Введите комментарий' />
                    </S.ContactsContainer>
                    <h2>Выбранные товары:</h2>
                    {products.map((product: any) => <ProductCard key={uniqid()} {...product} />)}
                    <button className='button_buy' type="submit" onClick={(evt) => onBuyClick(evt)}>Купить</button>
                </form>
            </S.ContainerFlexColumns>
            <YandexMap ymaps={ymaps} address={viewState} addressInput={addressInput} totalPrice={products.reduce((accumulator: number, product: Product) => accumulator + (product.price * product.amount), 0)} />
        </S.MainLayout>
    );
};

export default Cart;