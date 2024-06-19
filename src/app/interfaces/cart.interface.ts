export interface CartItem {
    productName: string;
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