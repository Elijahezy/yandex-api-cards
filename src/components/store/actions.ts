import { createAction } from '@reduxjs/toolkit';
import { ActionTypes } from '../types/actions';
import { Product } from '../types/types';


const loadAddress = createAction(
    ActionTypes.LoadAddress,
    (address: string) => ({
        payload: address,
    }),
);

const setAddressStatus = createAction(
    ActionTypes.SetAddressStatus,
    (status: boolean) => ({
        payload: status,
    }),
);

const fetchProducts = createAction(
    ActionTypes.FetchProducts,
    (products: Product[]) => ({
        payload: products,
    })
)

const decreaseAmount = createAction(
    ActionTypes.DecreaseAmount,
    (product: Product) => ({
        payload: product,
    })
)

const increaseAmount = createAction(
    ActionTypes.IncreaseAmount,
    (product: Product) => ({
        payload: product,
    })
)

const deleteProduct = createAction(
    ActionTypes.DeleteProduct,
    (product: Product) => ({
        payload: product,
    })
)

export {
    loadAddress,
    setAddressStatus,
    fetchProducts,
    decreaseAmount,
    increaseAmount,
    deleteProduct
}