import { FooterNavigation } from '../FooterNavigation';

const Footer = () => {
  return (
    <div className="bg-custom-orange pb-10">
      <div className="container m-auto text-center">
        <p className="pt-10 font-bold text-white mobile:pb-9 mobile:text-custom-17/20 md:pb-5 md:text-custom-20/26">
          © 2019 Orange All Right Reserved
        </p>
        <FooterNavigation />
      </div>
    </div>
  );
};

export default Footer;
