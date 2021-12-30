type State = {
    address: string,
    status: boolean,
    products: Product[],
}

type Product = {
    id: string,
    name: string,
    type: string,
    img: string,
    price: number,
    amount: number,
}

export type {
    State,
    Product
}