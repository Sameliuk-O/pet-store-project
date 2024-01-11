import { Button } from '../Button';

const SubscribeNow = () => {
  return (
    <form className="md:pt-2">
      <input
        className="drop-shadow-custom-input w-2/3 rounded border border-custom-gray px-6 py-4 font-bold not-italic
        mobile:mb-6 mobile:w-[335px] sm:mr-2
        sm:text-custom-16/26 md:mb-7 md:w-[370px] md:text-custom-16/26 lg:mb-0 lg:mr-4 lg:text-custom-20/26"
        placeholder="Your email address"
        type="text"
      />
      <Button text="Subscribe now" />
    </form>
  );
};

export default SubscribeNow;
