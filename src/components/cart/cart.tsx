import * as S from './cart.styled'
import { FormEvent, useRef, useState } from 'react';
import YandexMap from '../map/yandex-map';
import { useDispatch, useSelector } from 'react-redux';
import { Product, State } from '../types/types';
import ProductCard from '../product/product-card';
import uniqid from 'uniqid';
import { loadAddress, setAddressStatus } from '../store/actions';

const Cart = (props: any) => {
    const { ymaps } = props;

    const dispatch = useDispatch();

    const addressInput = useRef(null);

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [comment, setComment] = useState('')
    const [packageType, setPackageType] = useState('standard')
    const [email, setEmail] = useState('');

    const address = useSelector<State, any>((state) => state.address)
    const status = useSelector<State, any>((state) => state.status)
    const products = useSelector<State, any>((state) => state.products)

    const totalPrice = products.reduce((accumulator: number, product: Product) => accumulator + (product.price * product.amount), 0);

    const onBuyClick = (evt: FormEvent<HTMLButtonElement>) => {
        evt.preventDefault();
        const info = {
            address: address,
            name: name,
            phone: phone,
            packageType: packageType,
            price: totalPrice,
            comment: comment,
            email: email,
        }


        if (name !== '' && phone !== '' && address !== '' && email !== '') {
            alert(JSON.stringify(info))
            console.log(JSON.stringify(info))
            return;
        }

        return alert('Введите адрес, имя, емейл и номер телефона')
    }

    const mediaQuery = window.matchMedia('(max-width: 320px)');

    return (
        <>
            {mediaQuery.matches === false ?
                <S.MainLayout>
                    <S.ContainerFlexColumns>
                        <h1>Корзина</h1>
                        <h3>Есть аккаунт? <a href="/">Войти</a></h3>
                        <form action="" id='formElement'>
                            <S.ContactsContainer>
                                <label htmlFor="address">Адрес</label>
                                <S.ContactsInput
                                    ref={addressInput}
                                    value={status ? address : undefined}
                                    onClick={(evt) => {
                                        dispatch(setAddressStatus(false));
                                        evt.currentTarget.value = address;
                                    }}
                                    onBlur={(evt) => evt.currentTarget.value ? dispatch(loadAddress(evt.currentTarget.value)) : ''}
                                    onKeyPress={(evt) => {
                                        if (evt.code === 'Enter') {
                                            if (evt.currentTarget.value) {
                                                dispatch(loadAddress(evt.currentTarget.value));
                                            }
                                        }
                                    }}
                                    className="suggest"
                                    type="search"
                                    id="address"
                                    placeholder='г.Санкт-Петербург'
                                    required />
                            </S.ContactsContainer>
                            <S.ContactsContainer>
                                <S.ContainerFlexRows>
                                    <S.ContactsInput
                                        id='name'
                                        width={'40%'}
                                        type="text"
                                        placeholder='Ваше имя'
                                        onInput={(evt) => setName(evt.currentTarget.value)}
                                        required />
                                    <S.ContactsInput
                                        id='phone'
                                        width={'40%'}
                                        type="text"
                                        placeholder='Ваш телефон'
                                        onInput={(evt) => setPhone(evt.currentTarget.value)}
                                        required />
                                </S.ContainerFlexRows>
                            </S.ContactsContainer>
                            <S.ContactsContainer >
                                <S.ContactsInput
                                    id='email'
                                    type='text'
                                    placeholder='Введите email'
                                    onInput={(evt) => setEmail(evt.currentTarget.value)}
                                    required
                                />
                            </S.ContactsContainer>
                            <S.ContactsContainer>
                                <S.ContactsSelect
                                    id='package'
                                    name="package-type"
                                    onChange={(evt) => setPackageType(evt.currentTarget.value)}
                                    placeholder='Тип упаковки' required>
                                    <option value="none">Без упаковки</option>
                                    <option value="standard" selected>Стандартная</option>
                                    <option value="present">Подарочная</option>
                                </S.ContactsSelect>
                            </S.ContactsContainer>
                            <S.ContactsContainer>
                                <S.ContactsInput
                                    type="text"
                                    id='comment'
                                    placeholder='Введите комментарий'
                                    onInput={(evt) => setComment(evt.currentTarget.value)} />
                            </S.ContactsContainer>
                            <h2>Выбранные товары:</h2>
                            {
                                products.map((product: any) => <ProductCard key={uniqid()} {...product} />)
                            }
                            <button
                                className='button_buy'
                                type='button'
                                onClick={(evt) => onBuyClick(evt)}>Купить
                            </button>
                        </form>
                    </S.ContainerFlexColumns>
                    <YandexMap ymaps={ymaps} addressInput={addressInput} totalPrice={totalPrice} />
                </S.MainLayout>
                :
                <S.MainLayout>
                    <S.ContainerFlexColumns>
                        <h1>Корзина</h1>
                        <h3>Есть аккаунт? <a href="/">Войти</a></h3>
                        <form action="" id='formElement'>
                            <S.ContactsContainer>
                                <label htmlFor="address">Адрес</label>
                                <S.ContactsInput
                                    ref={addressInput}
                                    value={status ? address : undefined}
                                    onClick={(evt) => {
                                        dispatch(setAddressStatus(false));
                                        evt.currentTarget.value = address;
                                    }}
                                    onBlur={(evt) => evt.currentTarget.value ? dispatch(loadAddress(evt.currentTarget.value)) : ''}
                                    onKeyPress={(evt) => {
                                        if (evt.code === 'Enter') {
                                            if (evt.currentTarget.value) {
                                                dispatch(loadAddress(evt.currentTarget.value));
                                            }
                                        }
                                    }}
                                    className="suggest"
                                    type="search"
                                    id="address"
                                    placeholder='г.Санкт-Петербург'
                                    required />
                            </S.ContactsContainer>
                            <YandexMap ymaps={ymaps} addressInput={addressInput} totalPrice={totalPrice} />
                            <S.ContactsContainer>

                                <S.ContactsInput
                                    id='name'
                                    width={'40%'}
                                    type="text"
                                    placeholder='Ваше имя'
                                    onInput={(evt) => setName(evt.currentTarget.value)}
                                    required />
                            </S.ContactsContainer>
                            <S.ContactsContainer >
                                <S.ContactsInput
                                    id='phone'
                                    width={'40%'}
                                    type="text"
                                    placeholder='Ваш телефон'
                                    onInput={(evt) => setPhone(evt.currentTarget.value)}
                                    required />

                            </S.ContactsContainer>
                            <S.ContactsContainer >
                                <S.ContactsInput
                                    id='email'
                                    type='text'
                                    placeholder='Введите email'
                                    onInput={(evt) => setEmail(evt.currentTarget.value)}
                                    required
                                />
                            </S.ContactsContainer>
                            <S.ContactsContainer>
                                <S.ContactsSelect
                                    id='package'
                                    name="package-type"
                                    onChange={(evt) => setPackageType(evt.currentTarget.value)}
                                    placeholder='Тип упаковки' required>
                                    <option value="none">Без упаковки</option>
                                    <option value="standard" selected>Стандартная</option>
                                    <option value="present">Подарочная</option>
                                </S.ContactsSelect>
                            </S.ContactsContainer>
                            <S.ContactsContainer>
                                <S.ContactsInput
                                    type="text"
                                    id='comment'
                                    placeholder='Введите комментарий'
                                    onInput={(evt) => setComment(evt.currentTarget.value)} />
                            </S.ContactsContainer>
                            <h2>Выбранные товары:</h2>
                            {
                                products.map((product: any) => <ProductCard key={uniqid()} {...product} />)
                            }
                            <S.PriceContainer >
                                <p>Итог:</p>
                                <p>{totalPrice} руб.</p>
                            </S.PriceContainer>
                            <button
                                className='button_buy'
                                type='button'
                                onClick={(evt) => onBuyClick(evt)}>Купить
                            </button>
                        </form>
                    </S.ContainerFlexColumns>
                </S.MainLayout>
            }
        </>
    );
};

export default Cart;