import React from 'react';

import { Link } from 'react-router-dom';

import HomeSvg from '../../svg/homepage-icon.svg';

interface ILinkBreadcrumbs {
  title?: string | undefined;
  value: string | undefined;
}

const LinkBreadcrumbs: React.FC<ILinkBreadcrumbs> = ({ value, title }) => {
  // console.log(value);
  return (
    <div className="flex pl-5 pt-5">
      {title ? (
        <div className="flex">
          <Link to="/">
            <img alt="home page" className="py-1 pr-1" src={HomeSvg} />
          </Link>
          <Link className="text-gray-400 underline" to={`/store/category/${value}`}>
            / {value}
          </Link>
          <span className="text-gray-400 underline"> / {title}</span>
        </div>
      ) : (
        <div className="flex">
          <Link to="/">
            <img alt="home page" className="py-1 pr-1" src={HomeSvg} />
          </Link>
          <Link className="text-gray-400 underline" to={`/store/category/${value}`}>
            / {value}
          </Link>
        </div>
      )}
    </div>
  );
};

export default LinkBreadcrumbs;
