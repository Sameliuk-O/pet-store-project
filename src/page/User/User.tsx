import { UserInformation } from 'components/UserInformation';

import { useAppSelector } from '../../hooks';

const User: React.FC = () => {
  const currentUser = useAppSelector((store) => store.currentUser);
  return (
    <div className="min-w-[80%]">
      <div className="mx-10 mt-10">
        <div className="flex">
          <div className="mr-10 rounded-full bg-amber-400 p-10">
            <p className="text-2xl font-medium uppercase">
              {currentUser.name.firstname.charAt(0)}
              {currentUser.name.lastname.charAt(0)}
            </p>
          </div>
          <div>
            <div className="flex pt-6">
              <p className="pr-0.5 text-2xl text-slate-500 first-letter:uppercase">
                {currentUser.name.firstname}{' '}
              </p>
              <p className="text-2xl text-slate-500 first-letter:uppercase">
                {currentUser.name.lastname}
              </p>
            </div>
            <p className="text-slate-400">{currentUser.email}</p>
          </div>
        </div>
        <div className="pl-4 pt-10">
          <p className="text-xl">Personal information</p>
          <div className="grid grid-cols-4">
            <UserInformation
              label="Name"
              optionValue={currentUser.name.lastname}
              value={currentUser.name.firstname}
            />
            <UserInformation label="Email" value={currentUser.email} />
            <UserInformation label="User Name" value={currentUser.username} />
            <UserInformation label="Phone" value={currentUser.phone} />
          </div>
          <div className=" pt-6">
            <p className="text-xl">Location</p>
            <div className="grid grid-cols-4">
              <UserInformation label="Address" value={currentUser.address.city} />
              <UserInformation label="Street" value={currentUser.address.street} />
              <UserInformation label="Number" value={currentUser.address.number} />
              <UserInformation label="Zipcode" value={currentUser.address.zipcode} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
