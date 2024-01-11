import { IComment } from '../../../interface/ILanding';

const Comment = ({ ...prop }: IComment) => {
  return (
    <div
      className={`relative  ${
        prop.index === 0
          ? 'bg-light-blue text-white mobile:-ml-14 md:-ml-10 md:mr-[40px]  lg:-ml-52'
          : 'ml-30px bg-white mobile:hidden md:ml-6 md:block'
      } flex-1 rounded  pb-16 pt-20 mobile:h-[400px] md:h-[500px] `}
    >
      <div
        className={`mx-12 h-[50px] w-[50px] ${
          prop.index === 0 ? 'bg-little-quotes-w' : 'bg-little-quotes-o'
        } bg-no-repeat`}
      />
      <p className=" mx-12 pt-6 text-custom-18/36">{prop.comment}</p>
      <p className="absolute bottom-0 mx-12 text-custom-18/36 font-medium mobile:pb-16 md:pb-14">
        <span>{prop.userName} /</span>
        <span className="pl-2.5">{prop.group}</span>
      </p>
    </div>
  );
};

export default Comment;
