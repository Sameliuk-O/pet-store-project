export interface IAddProduct {
  date: string;

  products: {
    productId: number;
    quantity: number;
  };
  userId: number;
}

export interface IGetProduct extends IAddProduct {
  id: number;
}

export interface IAddProductInBasket extends IAddProduct {
  category?: string;
  closePopup?: () => void;
  productInfo?: {
    image: string;
    price: string;
    title: string;
  };
}
