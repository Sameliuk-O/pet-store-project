import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { HTTPParameters } from 'httpParameters';

import { IAddProduct, IGetProduct, IProduct } from '../interface';

export const productServices = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: `${HTTPParameters}` }),
  endpoints: (build) => ({
    addProductCart: build.mutation<IGetProduct, IAddProduct>({
      query: (body) => ({
        body,
        method: 'POST',
        url: '/carts',
      }),
    }),
    getAllCategory: build.query<string[], void>({
      query: () => ({
        url: '/products/categories',
      }),
    }),
    getAllProduct: build.query<IProduct[], void>({
      query: () => ({
        url: '/products',
      }),
    }),
    getProductCard: build.query<IProduct, string | undefined>({
      query: (productId) => ({
        url: `/products/${productId}`,
      }),
    }),
    getProductSameCategory: build.query<IProduct[], string | undefined>({
      query: (category) => ({
        url: `/products/category/${category}`,
      }),
    }),
  }),
  reducerPath: 'productCard',
});

export const {
  useAddProductCartMutation,
  useGetAllCategoryQuery,
  useGetAllProductQuery,
  useGetProductCardQuery,
  useGetProductSameCategoryQuery,
} = productServices;
