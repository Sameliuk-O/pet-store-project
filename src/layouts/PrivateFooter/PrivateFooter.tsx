import React from 'react';

import { NavLink } from 'react-router-dom';

const PrivateFooter = () => {
  return (
    <footer className="flex justify-between border-t-2 border-solid border-slate-300 bg-slate-200 p-5 pl-24 pr-10">
      <NavLink
        className="flex cursor-pointer items-center text-xl font-bold text-zinc-700 hover:text-sky-500"
        to="/"
      >
        STORE
      </NavLink>
      <p className="py-5 font-medium text-zinc-700">© 2023 Store All Right Reserved</p>
    </footer>
  );
};

export default PrivateFooter;
