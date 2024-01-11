import IMAGE1 from './../../../svg/illustration 1.svg';
import IMAGE2 from './../../../svg/illustration 2.svg';
import IMAGE3 from './../../../svg/illustration 3.svg';
import { ListInfo } from '../ListInfo';

const ListsInfoBlock: React.FC = () => {
  const LISTS_INFO_ARRAY = [
    {
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      id: 1,
      image: IMAGE1,
      title: 'Title 1',
    },
    {
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      id: 2,
      image: IMAGE2,
      title: 'Title 2',
    },
    {
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      id: 3,
      image: IMAGE3,
      title: 'Title 3',
    },
  ];
  return (
    <div className="md:container md:mx-auto md:mb-24 ">
      <div className="flex rounded-2xl bg-white shadow-lg mobile:mx-5 mobile:-mt-16 mobile:flex-col mobile:py-12 mobile:pl-5 mobile:pr-2 sm:-mt-14 sm:px-20px md:mx-10 md:-mt-135px md:flex-row  md:px-0  md:py-60px">
        {LISTS_INFO_ARRAY.map((el) => (
          <ListInfo description={el.description} image={el.image} key={el.id} title={el.title} />
        ))}
      </div>
    </div>
  );
};

export default ListsInfoBlock;
