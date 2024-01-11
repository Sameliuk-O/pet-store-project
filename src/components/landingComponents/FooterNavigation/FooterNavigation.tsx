import { Link } from 'react-router-dom';

const FooterNavigation = () => {
  return (
    <div className="font-black  leading-8 text-white mobile:text-custom-17/20 md:text-base">
      <Link className="px-5" to="/landing">
        Benefit
      </Link>
      <span>/</span>
      <Link className="px-5" to="/landing">
        Pricing
      </Link>
      <span>/</span>
      <Link className="px-5" to="/landing">
        Testimonials
      </Link>
    </div>
  );
};

export default FooterNavigation;
