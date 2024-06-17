export interface CartItem {
    productId: number;
    quantity: number;
    price: number;
    name?: string;
    description?: string;
}

export interface Cart {
    cartId: number;
    userId: number;
    orderDate: Date;
}