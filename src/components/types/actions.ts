import {
    ThunkAction,
    ThunkDispatch
} from 'redux-thunk';
import {
    AxiosInstance
} from 'axios';
import { State } from './types';
import { loadAddress, setAddressStatus, fetchProducts, decreaseAmount, increaseAmount, deleteProduct } from '../store/actions';


export enum ActionTypes {
    LoadAddress = 'address/loadAddress',
    SetAddressStatus = 'address/setAddressStatus',
    FetchProducts = 'products/fetchProducts',
    DecreaseAmount = 'product/decreaseAmount',
    IncreaseAmount = 'product/increaseAmount',
    DeleteProduct = 'product/deleteProduct'
}

export type Actions =
    | ReturnType<typeof loadAddress>
    | ReturnType<typeof setAddressStatus>
    | ReturnType<typeof fetchProducts>
    | ReturnType<typeof decreaseAmount>
    | ReturnType<typeof increaseAmount>
    | ReturnType<typeof deleteProduct>



export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Actions>;

export type ThunkAppDispatch = ThunkDispatch<State, AxiosInstance, Actions>;