import { useEffect } from 'react';

import { Link, NavLink } from 'react-router-dom';
import { toast } from 'react-toastify';

import { useLastPath } from 'hooks';
import { useGetAllCategoryQuery } from 'services/productServices';

const Category: React.FC = () => {
  const { data, isError } = useGetAllCategoryQuery();
  const categoryPath = useLastPath();
  const decodedString = decodeURIComponent(categoryPath.replace(/\+/g, ' '));

  useEffect(() => {
    if (isError === true) {
      toast.error('Unable to get product categories');
    }
  }, [isError]);

  return (
    <div className="h-full">
      <p className="pb-2 text-custom-18/36 text-sky-500">Category</p>
      <ul>
        <li className="pb-1 decoration-sky-500">
          <NavLink className="hover:text-sky-500" to="/">
            All categories
          </NavLink>
        </li>
        {data?.map((el, index) => (
          <div key={el + index}>
            {el === decodedString ? (
              <li className="pb-1 underline decoration-sky-500">
                <Link className="text-sky-500" to={`/store/category/${el}`}>
                  {el.charAt(0).toUpperCase() + el.slice(1)}
                </Link>
              </li>
            ) : (
              <li className="pb-1 " key={el + index}>
                <Link className="hover:text-sky-500" to={`/store/category/${el}`}>
                  {el.charAt(0).toUpperCase() + el.slice(1)}
                </Link>
              </li>
            )}
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Category;
