import { useNavigate } from 'react-router-dom';

import { deleteProduct } from 'store/productSlice';

import { useAppDispatch } from '../../hooks';

interface IProductInBasket {
  category?: string;
  closePopup: () => void;
  id: number;
  image?: string;
  price?: string;
  quantity: number;
  title?: string;
}
const ProductInBasket: React.FC<IProductInBasket> = ({
  image,
  price,
  title,
  quantity,
  id,
  category,
  closePopup,
}) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const handleDeleteClick = (value: number) => {
    dispatch(deleteProduct(value));
  };
  return (
    <div className="grid grid-cols-7 items-center justify-between border-b-2 p-3">
      <div
        className="col-span-1 flex cursor-pointer justify-center"
        onClick={() => {
          navigate(`/store/${category}/${id}`);
          closePopup();
        }}
      >
        <img alt={title} src={image} />
      </div>
      <div
        className="col-span-3 flex cursor-pointer justify-center"
        onClick={() => {
          navigate(`/store/${category}/${id}`);
          closePopup();
        }}
      >
        <p className="px-5 hover:text-blue-600">{title}</p>
      </div>
      <div className="col-span-1 flex justify-center">
        <p className="pr-3">
          Quantity products:
          {quantity}
        </p>
      </div>
      <div className="col-span-1 flex justify-center">
        <p>Price: ${(Number(price) * quantity).toFixed(2)}</p>
      </div>
      <div className="col-span-1 px-5">
        <button
          className="rounded-lg bg-gray-400 px-5 py-2 text-stone-50 hover:bg-gray-500"
          onClick={() => handleDeleteClick(id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default ProductInBasket;
