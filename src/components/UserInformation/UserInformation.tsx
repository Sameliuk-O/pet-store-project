interface IValue {
  label: string;
  optionValue?: string | number;
  value: string | number | undefined;
}
const UserInformation: React.FC<IValue> = ({ value, label, optionValue }) => {
  return (
    <div className="ml-5 py-10 pt-3">
      <p className="text-sm text-slate-300">{label}</p>
      <div className="flex border-b-2 border-slate-200 pr-24 pt-1">
        <p className="pr-0.5 text-base text-slate-500">
          {value} {optionValue}
        </p>
      </div>
    </div>
  );
};

export default UserInformation;
