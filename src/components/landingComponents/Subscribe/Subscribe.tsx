import MobileSVG from '../../../svg/mobile_img.svg';
import SubscribeNow from '../SubscribeNow/SubscribeNow';

const Subscribe: React.FC = () => {
  return (
    <div className="min-h-min bg-custom-orange mobile:pb-140px mobile:pt-11 sm:px-20px sm:pt-4 lg:pb-274px lg:pt-24">
      <div className=" container mx-auto mobile:flex mobile:flex-col sm:flex sm:flex-col md:flex lg:flex-row">
        <div className="flex-1 mobile:order-last sm:order-last sm:m-auto lg:order-first  ">
          <div className="pb-5  md:pl-10">
            <p
              className="font-semibold leading-tight text-white mobile:px-7 mobile:pt-14
            mobile:text-center mobile:text-custom-30/40  sm:text-center sm:text-custom-30/40  md:px-0 md:pt-6
            md:text-left md:text-custom-48/60 lg:text-custom-48/60"
            >
              Subscribe today and get notified first when we launch Orange app!
            </p>
            <p className="text-custom-16/32 font-bold leading-8 text-white mobile:mx-30px mobile:pt-3.5 mobile:text-center sm:mx-0 sm:text-left md:pt-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi.
            </p>
          </div>
          <div className="mb:text-left mobile:pt-3 mobile:text-center sm:pr-0 sm:pt-0 sm:text-center  md:pl-10 md:pt-5 lg:pb-0 lg:text-left">
            <SubscribeNow />
          </div>
        </div>
        <div className="mx-auto flex-1 mobile:order-first mobile:ml-10 sm:order-first sm:m-auto md:ml-0 lg:order-last ">
          <img
            alt="mobile img"
            className=" mobile:max-w-[333px]  md:ml-14 md:max-w-[618px] md:pl-0 md:pt-0"
            src={MobileSVG}
          />
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
