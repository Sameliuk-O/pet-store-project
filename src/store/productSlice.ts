import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IAddProductInBasket } from '../interface';

interface DataState {
  product: IAddProductInBasket[];
}

const initialState: DataState = {
  product: [],
};

const productSlice = createSlice({
  initialState,
  name: 'productCart',
  reducers: {
    addProduct: (state, action: PayloadAction<IAddProductInBasket[]>) => {
      state.product.push(...action.payload);
    },
    clearProduct: (state) => {
      state.product = [];
    },
    deleteProduct: (state, action) => {
      state.product = state.product.filter((value) => value.products.productId !== action.payload);
    },
  },
});

export const { addProduct, deleteProduct, clearProduct } = productSlice.actions;
export default productSlice.reducer;
