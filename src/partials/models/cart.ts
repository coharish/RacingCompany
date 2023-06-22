export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity?: number;
  description: string;
}

export interface Cart {
  cartId: string;
  items: Array<CartItem>;
  currentcy?: string;
}
