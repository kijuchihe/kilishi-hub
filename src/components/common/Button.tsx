interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  variant: "outlined" | "filled";
}

const Button: React.FC<ButtonProps> = ({
  className,
  variant = "filled",
  text,
  ...rest
}) => {
  return (
    <button
      className={`${
        variant === "outlined"
          ? "px-4 py-1 border border-reddish "
          : "bg-reddish px-6 py-3 rounded-xl"
      } ${className} w-fit`}
      {...rest}
    >
      {text}
    </button>
  );
};

export default Button;
