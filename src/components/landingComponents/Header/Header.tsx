import { Link } from 'react-router-dom';

import { Navigation } from '../Navigation';

const Header: React.FC = () => {
  return (
    <div className="bg-custom-orange sm:px-20px">
      <div className="container mx-auto">
        <div className="mobile:flex-col mobile:pb-3.5 mobile:pt-6 mobile:text-center sm:flex-col sm:pb-3.5 sm:pt-6 sm:text-center md:flex md:flex-row md:justify-between md:px-10 md:py-9">
          <h1 className="font-black uppercase leading-8 text-white mobile:pb-3.5 mobile:text-custom-26/58 sm:text-3xl md:text-4xl lg:text-2xl">
            <Link to={'/login'}>orange</Link>
          </h1>
          <div className="flex-row-reverse space-x-4 space-x-reverse">
            <Navigation />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
