import { ThunkActionResult } from "../types/actions";
import { fetchProducts } from "./actions";

export const fetchProductsAction = (): ThunkActionResult =>
    async (dispatch, _getState, api): Promise<void> => {
        const { data } = await api.get('https://run.mocky.io/v3/59f47e8e-2a09-48c3-8a1d-0af8e5817f7c');
        dispatch(fetchProducts(JSON.parse(data)));
    };

