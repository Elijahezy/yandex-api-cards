import { createReducer } from '@reduxjs/toolkit';
import { State } from '../types/types';
import { decreaseAmount, deleteProduct, fetchProducts, increaseAmount, loadAddress, setAddressStatus } from './actions';


const initialState: State = {
    address: '',
    status: false,
    products: [],
};

const Data = createReducer(initialState, (builder) => {
    builder
        .addCase(loadAddress, (state, action) => {
            const address = action.payload;

            state.address = address;
        })
        .addCase(setAddressStatus, (state, action) => {
            const status = action.payload;

            state.status = status;
        })
        .addCase(fetchProducts, (state, action) => {
            const products = action.payload;

            state.products = products;
        })
        .addCase(decreaseAmount, (state, action) => {
            const product = action.payload;
            const index = state.products.findIndex((productToFind) => productToFind.id === product.id)


            state.products.splice(index, 1, { ...product, amount: product.amount - 1 })

        })
        .addCase(increaseAmount, (state, action) => {
            const product = action.payload;
            const index = state.products.findIndex((productToFind) => productToFind.id === product.id)


            state.products.splice(index, 1, { ...product, amount: product.amount + 1 })

        })
        .addCase(deleteProduct, (state, action) => {
            const product = action.payload;
            const index = state.products.findIndex((productToFind) => productToFind.id === product.id)


            state.products.splice(index, 1)

        })
})

export {
    Data
}
