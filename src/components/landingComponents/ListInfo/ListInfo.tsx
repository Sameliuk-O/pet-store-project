import { ILanding } from '../../../interface/ILanding';

const ListInfo = ({ ...props }: ILanding) => {
  return (
    <div className="mobile:pb-16 sm:px-7 md:px-50px md:pb-0">
      <div className="flex justify-center pb-8">
        <img alt={props.title} className="h-[140px]" src={props.image} />
      </div>
      <div className="pb-9">
        <h3 className={'text-custom-18/26 font-medium text-dark-blue'}>{props.title}</h3>
        <div className="mt-4 h-1 w-16 bg-custom-orange" />
      </div>
      <p className="text-custom-16/32 font-medium text-text-grey-blue">{props.description}</p>
    </div>
  );
};

export default ListInfo;
