import React from 'react';
import { useDispatch } from 'react-redux';
import * as S from '../cart/cart.styled';
import { decreaseAmount, deleteProduct, increaseAmount } from '../store/actions';
import { Product } from '../types/types';

const ProductCard = (product: Product) => {
    const { name, type, img, price, amount } = product;
    const dispatch = useDispatch();
    const onDecreaseAmountClick = (evt: any) => {
        evt.preventDefault();
        if (amount === 0) {
            return;
        }
        return dispatch(decreaseAmount(product));
    }
    const onIncreaseAmountClick = (evt: any) => {
        evt.preventDefault();
        return dispatch(increaseAmount(product));
    }

    const onDeleteProductClick = (evt: any) => {
        evt.preventDefault();
        return dispatch(deleteProduct(product));
    }
    return (
        <S.FlexContainerRows className='items'>
            <img src={img} width={'150px'} height={'150px'} alt="" />
            <S.FlexContainerColumns className='items-info'>
                <h4>
                    {name}
                </h4>
                <p>
                    {type}
                </p>
                <S.FlexButton>
                    <button onClick={(evt) => onDecreaseAmountClick(evt)}>−</button>
                    <div>{amount}</div>
                    <button onClick={(evt) => onIncreaseAmountClick(evt)}>+</button>
                </S.FlexButton>
            </S.FlexContainerColumns>
            <S.FlexContainerColumns className='items-price'>
                <h4>{price} руб.</h4>
                <button onClick={(evt) => onDeleteProductClick(evt)}>Удалить</button>
            </S.FlexContainerColumns>
        </S.FlexContainerRows>
    );
};

export default ProductCard;