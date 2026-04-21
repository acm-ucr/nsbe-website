interface ButtonProps {
  text : string;
}

const Button = ({ text }: ButtonProps) => {
  return (
    <button className="rounded-lg border-2 border-yellow-400 px-6 py-3 font-semibold tracking-wide text-yellow-400 uppercase">
     <div> {text} </div>
    </button>
  );
};

export default Button;
