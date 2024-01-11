import { NavLink } from 'react-router-dom';

import { UserAvatar } from 'components/UserAvatar';

import { ShoppingBox } from '../../components/ShoppingBox';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { setLoginUser } from '../../store/authSlice';
import { clearProduct } from '../../store/productSlice';

const PrivateLayout: React.FC = () => {
  const dispatch = useAppDispatch();
  const product = useAppSelector((state) => state.productCart);

  const handleLogOut = () => {
    dispatch(setLoginUser({ auth: false, token: '', username: '' }));
    dispatch(clearProduct());
  };

  return (
    <div className="flex justify-between border-b-2 border-solid border-slate-300 bg-slate-200 p-5 pl-24 pr-10">
      <NavLink
        className="flex items-center text-2xl font-bold text-zinc-700 hover:text-sky-500"
        to="/"
      >
        STORE
      </NavLink>
      <div className="flex">
        <ShoppingBox counter={product.product.length} />
        <UserAvatar />
        <NavLink
          className="ml-10 flex items-center rounded-lg bg-sky-400 p-1 px-5 text-sm text-stone-50 hover:bg-cyan-100 hover:text-sky-500"
          to="/login"
          onClick={handleLogOut}
        >
          Log out
        </NavLink>
      </div>
    </div>
  );
};

export default PrivateLayout;
