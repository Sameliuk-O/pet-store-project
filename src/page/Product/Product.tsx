import React, { useEffect, useState } from 'react';

import { SerializedError } from '@reduxjs/toolkit';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import dayjs from 'dayjs';
import { toast } from 'react-toastify';

import LinkBreadcrumbs from 'components/LinkBreadcrumbs';
import { addProduct } from 'store/productSlice';

import { Loading } from '../../components/Loading';
import { Rating } from '../../components/Rating';
import { useAppDispatch, useAppSelector, useLastPath } from '../../hooks';
import { IGetProduct } from '../../interface';
import { useAddProductCartMutation, useGetProductCardQuery } from '../../services/productServices';

const Product: React.FC = () => {
  const productPath = useLastPath();
  const date = dayjs().format('YYYY-MM-DD');
  const dispatch = useAppDispatch();
  const [requestAddProductCart, { isLoading, isError }] = useAddProductCartMutation();
  const {
    data: productData,
    isLoading: productLoading,
    isError: productIsError,
  } = useGetProductCardQuery(productPath);
  const { id } = useAppSelector((state) => state.currentUser);
  const productsInCart = useAppSelector((state) => state.productCart);
  const [counter, setCounter] = useState(1);
  const [isProductInCart, setIsProductInCart] = useState(true);

  const handleClick = async () => {
    if (!isProductInCart) {
      setIsProductInCart(true);
      if (productData) {
        const res: {
          data?: IGetProduct;
          error?: FetchBaseQueryError | SerializedError;
        } = await requestAddProductCart({
          date: date,
          products: { productId: productData.id, quantity: counter },
          userId: id,
        });
        if (res && res.data) {
          await dispatch(
            addProduct([
              {
                date: date,
                productInfo: {
                  image: productData.image,
                  price: productData.price,
                  title: productData.title,
                },
                products: { productId: productData.id, quantity: counter },
                userId: id,
              },
            ])
          );
        }
      }
    }
  };

  useEffect(() => {
    const element = productsInCart?.product.find((el) => el.products.productId === productData?.id);
    if (element) {
      setIsProductInCart(true);
    } else {
      setIsProductInCart(false);
    }
  }, [productsInCart?.product, productData?.id]);

  useEffect(() => {
    if (isError === true) {
      toast('Failed to purchase product');
    }
    if (productIsError === true) {
      toast('Unable to receive the product');
    }
  }, [isError, productIsError]);
  const handleCounter = (value?: number) => {
    if (value === 1) {
      setCounter((count) => count + 1);
    } else {
      if (counter > 1) {
        setCounter((count) => count - 1);
      }
    }
  };
  return (
    <div className="min-w-[80%]">
      {productLoading ? (
        <Loading />
      ) : (
        <div className="mx-10 ">
          <LinkBreadcrumbs title={productData?.title} value={productData?.category} />
          <div className="flex">
            <div className="p-5">
              <div className="p-10">
                <img
                  alt={productData?.title}
                  className="m-auto max-h-96"
                  src={productData?.image}
                />
              </div>
            </div>
            <div className="ml-10 p-10">
              <p className="pt-16 text-xl font-bold">{productData?.title}</p>
              <p className="max-w-sm pt-16 text-slate-500">{productData?.description}</p>
              <div className="pt-5">
                <Rating rating={productData?.rating.rate} />
              </div>
              <div className="flex justify-center pt-10">
                <button
                  className={`mr-10 rounded-lg px-10 py-1 text-gray-50 ${
                    counter === 1 ? 'bg-sky-200' : 'bg-sky-400 hover:bg-sky-500'
                  }`}
                  disabled={counter === 1}
                  onClick={() => handleCounter()}
                >
                  -
                </button>
                <p className="py-1">{counter}</p>
                <button
                  className="ml-10 rounded-lg bg-sky-400 px-10 py-1 text-gray-50 hover:bg-sky-500"
                  onClick={() => handleCounter(1)}
                >
                  +
                </button>
              </div>
              <div className="flex justify-center pt-5">
                {isProductInCart ? (
                  <div>
                    <p>Product already in cart</p>
                  </div>
                ) : (
                  <div className="flex">
                    {isLoading ? (
                      <div className="h-10 w-10 animate-spin rounded-full border-y-4 border-blue-500" />
                    ) : (
                      <button
                        className="rounded-lg bg-sky-400 p-3 px-20 text-gray-50 hover:bg-sky-500"
                        disabled={isProductInCart}
                        onClick={handleClick}
                      >
                        Buy now ${(Number(productData?.price) * counter).toFixed(2)}
                      </button>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Product;
