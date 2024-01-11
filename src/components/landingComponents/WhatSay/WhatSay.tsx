import { IComment } from '../../../interface/ILanding';
import { Comment } from '../Comments';

const COMMENTS: IComment[] = [
  {
    comment: '“I love oranges!! tasty mmmmm…..”',
    group: 'Ironhack',
    userName: 'Marjon Siero',
  },
  {
    comment: '“If life gives you lemons, f*ck it, I just want more oranges”',
    group: 'Ironhack',
    userName: 'Dina Korkmazova',
  },
];

const WhatSay = () => {
  return (
    <div>
      <div className="flex justify-center lg:bg-gradient-right ">
        <div className="container mx-auto ">
          <div className="mx-auto flex mobile:flex-col mobile:pl-5 md:flex-row md:pl-0">
            <div
              className={`flex-1 bg-no-repeat pl-6 mobile:z-10 mobile:-mb-8 mobile:bg-flags-small-svg mobile:pb-10 
            mobile:pt-7 md:ml-9 md:mt-8 lg:z-0 lg:mb-0 lg:w-2/5 lg:bg-white lg:bg-flags-svg lg:pb-0 lg:pt-5 `}
            >
              <h2 className="font-bold text-custom-orange mobile:w-52 mobile:text-custom-26/45 md:pl-2 md:pt-6  lg:w-screen lg:max-w-xs lg:text-custom-34/45">
                What Our Customers Say
              </h2>
            </div>
            <div className="flex flex-1 rounded bg-custom-orange py-56 mobile:z-0 mobile:hidden lg:z-10 lg:-ml-56 lg:mr-5 lg:mt-0 lg:flex lg:w-3/5 lg:py-226px">
              {COMMENTS.map((el, index) => (
                <Comment
                  comment={el.comment}
                  group={el.group}
                  index={index}
                  key={index + el.userName}
                  userName={el.userName}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gradient-right mobile:block lg:hidden">
        <div className=" container ml-20 flex justify-end rounded  bg-custom-orange py-124px mobile:z-0 mobile:w-3/5 md:w-5/6 lg:w-3/5">
          {COMMENTS.map((el, index) => (
            <Comment
              comment={el.comment}
              group={el.group}
              index={index}
              key={index + el.userName}
              userName={el.userName}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default WhatSay;
