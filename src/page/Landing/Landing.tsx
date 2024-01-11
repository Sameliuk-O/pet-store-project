import { Header } from 'components/landingComponents/Header';

import { Footer } from '../../components/landingComponents/Footer';
import { ListsInfoBlock } from '../../components/landingComponents/ListsInfoBlock';
import { PremiumSubscribe } from '../../components/landingComponents/PremiumSubscribe';
import { Subscribe } from '../../components/landingComponents/Subscribe';
import { SubscribeNotification } from '../../components/landingComponents/SubscribeNotification';
import { WhatSay } from '../../components/landingComponents/WhatSay';

const Landing: React.FC = () => {
  return (
    <div>
      <Header />
      <Subscribe />
      <ListsInfoBlock />
      <PremiumSubscribe />
      <WhatSay />
      <SubscribeNotification />
      <Footer />
    </div>
  );
};

export default Landing;
