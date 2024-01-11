import { SubscribeNow } from '../SubscribeNow';

const SubscribeNotification = () => {
  return (
    <div className="container m-auto text-center mobile:pb-28 mobile:pt-106px md:pb-140px md:pt-40">
      <h2 className="font-bold text-custom-orange mobile:text-custom-30/40 md:text-custom-48/60">
        Subscribe today and get notified first!
      </h2>
      <p className="font-medium  text-custom-gray mobile:pb-11 mobile:text-custom-26/45 md:pb-14 md:pt-4 md:text-custom-34/45">
        Product launch in: 12 days
      </p>
      <div className="text-center">
        <SubscribeNow />
      </div>
    </div>
  );
};

export default SubscribeNotification;
