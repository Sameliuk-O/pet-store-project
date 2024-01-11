const Button = ({ text }: { text: string }) => {
  return (
    <button
      className="rounded-2xl bg-light-blue p-4 font-bold text-white
      mobile:text-custom-20/26 "
    >
      {text}
    </button>
  );
};

export default Button;
