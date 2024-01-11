import React, { useEffect, useRef, useState } from 'react';

import { Link } from 'react-router-dom';

import { ProductInBasket } from 'components/ProductInBasket';

import { useAppSelector } from '../../hooks';
import { IAddProductInBasket } from '../../interface';

interface PopupProps {
  onClose: () => void;
}

const PopUpBasket: React.FC<PopupProps> = ({ onClose }) => {
  const productCart = useAppSelector((state) => state.productCart);
  const popupRef = useRef<HTMLDivElement>(null);
  const [popupHeight, setPopupHeight] = useState<number>(0);
  const [showPopup, setShowPopup] = useState<boolean>(false);

  const calculateTotalPrice = () => {
    if (!productCart) return 0;

    let totalPrice = 0;
    productCart.product.forEach((el: IAddProductInBasket) => {
      totalPrice += Number(el.productInfo?.price) * Number(el.products.quantity);
    });
    return totalPrice.toFixed(2);
  };
  useEffect(() => {
    if (popupRef.current) {
      setPopupHeight(popupRef.current.scrollHeight);
    }
  }, [productCart]);

  useEffect(() => {
    if (productCart && productCart.product.length > 0) {
      setShowPopup(true);
    } else {
      setShowPopup(false);
    }
  }, [productCart]);

  return (
    <div>
      {showPopup && (
        <div className="fixed inset-0 z-50 bg-black opacity-50" onClick={onClose}></div>
      )}
      <div
        className={`fixed left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-md bg-white shadow-lg transition-opacity${
          showPopup ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ height: popupHeight + 60 }}
      >
        <button
          className="absolute right-0 top-0 rounded-full p-1 px-3 text-gray-600"
          onClick={onClose}
        >
          X
        </button>
        <div className="p-10 pt-20" ref={popupRef}>
          <h1 className="flex justify-center text-xl font-bold uppercase text-gray-400">
            Your shopping cart
          </h1>
          <div>
            <div className="max-h-96 overflow-y-auto p-10">
              {productCart && productCart.product.length > 0 ? (
                productCart.product.map((el: IAddProductInBasket) => (
                  <ProductInBasket
                    category={el.category}
                    closePopup={onClose}
                    id={el.products.productId}
                    image={el.productInfo?.image}
                    key={el.products.productId}
                    price={el.productInfo?.price}
                    quantity={el.products.quantity}
                    title={el.productInfo?.title}
                  />
                ))
              ) : (
                <p>Your basket is empty</p>
              )}
            </div>
          </div>
          {productCart && productCart.product.length > 0 && (
            <div className="mt-7 flex justify-around">
              <button className="rounded-lg bg-sky-400 px-10 py-2 text-stone-50 hover:bg-blue-200 hover:text-blue-600">
                Checkout now
              </button>
              <div className="py-2">
                <strong>Total Price: ${calculateTotalPrice()}</strong>
              </div>
            </div>
          )}
          <div className="mt-10 text-lg font-medium text-gray-400 hover:text-blue-600">
            <Link to={'/store'} onClick={onClose}>
              Keep shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopUpBasket;
