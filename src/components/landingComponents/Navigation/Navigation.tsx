import { Link } from 'react-router-dom';

const Navigation: React.FC = () => {
  return (
    <div className="text-custom-16/32 font-black">
      <Link className="leading-8 text-white" to="/landing">
        Benefit
      </Link>
      <Link className="pl-7 leading-8 text-white" to="/landing">
        Pricing
      </Link>
      <Link className="pl-7 leading-8 text-white" to="/landing">
        Testimonials
      </Link>
    </div>
  );
};

export default Navigation;
