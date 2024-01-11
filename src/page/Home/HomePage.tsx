import { useEffect } from 'react';

import { toast } from 'react-toastify';

import ProductCard from 'components/ProductCard/ProductCard';
import { useGetAllProductQuery } from 'services/productServices';

import { Loading } from '../../components/Loading';

const HomePage: React.FC = () => {
  const { data, isLoading, isError } = useGetAllProductQuery();

  useEffect(() => {
    if (isError === true) {
      toast('Failed to get all items');
    }
  }, [isError]);

  return (
    <div className="min-w-[80%]">
      {isLoading ? (
        <Loading />
      ) : (
        <ul className="mx-10 my-5 grid grid-cols-5">
          {data?.length ? (
            data.map((el) => (
              <ProductCard
                category={el.category}
                description={el.description}
                id={el.id}
                image={el.image}
                key={el.id}
                price={el.price}
                rating={el.rating}
                title={el.title}
              />
            ))
          ) : (
            <div>1</div>
          )}
        </ul>
      )}
    </div>
  );
};

export default HomePage;
