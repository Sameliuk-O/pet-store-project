import { Navigate, Route, Routes } from 'react-router-dom';

import { PrivateLayout } from 'layouts/PrivateLayout';
import User from 'page/User/User';

import PrivateFooter from '../layouts/PrivateFooter';
import { SideLayout } from '../layouts/SideLayout';
import CategoryProducts from '../page/CategoryProducts/CategoryProducts';
import HomePage from '../page/Home/HomePage';
import Product from '../page/Product/Product';

const PrivateRouter = () => {
  return (
    <>
      <PrivateLayout />
      <div className="flex min-h-screen">
        <SideLayout />
        <Routes>
          <Route element={<HomePage />} path="/" />;
          <Route element={<CategoryProducts />} path="/store/category/:parameter" />;
          <Route element={<Product />} path="/store/:category/:productId" />
          <Route element={<User />} path="/user" />
          <Route element={<Navigate to="/" replace />} path="/*" />
        </Routes>
      </div>
      <PrivateFooter />
    </>
  );
};

export default PrivateRouter;
