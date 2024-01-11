import React, { MouseEvent, useEffect, useRef, useState } from 'react';

import { PopUpBasket } from 'components/BasketPopUp';

import Shopping from '../../svg/shopping.svg';

interface ICounter {
  counter: number;
}

const ShoppingBox: React.FC<ICounter> = ({ counter }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const popupRef = useRef<HTMLDivElement | null>(null);

  const openPopup = () => {
    setIsPopupOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    document.body.style.overflow = 'auto';
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
        closePopup();
      }
    };

    document.addEventListener('mousedown', handleOutsideClick as unknown as EventListener);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick as unknown as EventListener);
    };
  }, []);

  return (
    <div>
      <div className="relative mr-10 cursor-pointer" onClick={openPopup}>
        <img alt="shopping" className="pt-3" src={Shopping} />
        <p className="absolute -right-3 top-0.5 rounded-lg bg-slate-300 px-1.5 py-0.5 text-xs opacity-30">
          {counter ? counter : 0}
        </p>
      </div>
      {isPopupOpen && (
        <div ref={popupRef}>
          <PopUpBasket onClose={closePopup} />
        </div>
      )}
    </div>
  );
};

export default ShoppingBox;
