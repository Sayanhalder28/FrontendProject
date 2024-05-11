import Style from "./index.module.css";
import { useNavigate } from "react-router-dom";

type ButtonProps = {
  name?: string;
  children?: React.ReactNode;
  to?: string;
  design?: "one" | "two" | "three";
  onClick?: () => void;
  className?: string;
  deactive?: boolean;
};

function Button({
  children,
  to,
  design = "one",
  onClick,
  className,
  deactive,
}: ButtonProps) {
  const navigate = useNavigate();

  const handleClick = (): void => {
    if (deactive) return;
    if (onClick) {
      onClick();
      return;
    } else if (to) {
      navigate(to);
      return;
    } else console.log("button clicked");
  };

  if (deactive) {
    return (
      <span
        className={[
          Style.button,
          Style[design + "Deactivated"],
          className,
        ].join(" ")}
        onClick={() => handleClick()}
      >
        {children}
      </span>
    );
  }

  return (
    <span
      className={[Style.button, Style[design], className].join(" ")}
      onClick={() => handleClick()}
    >
      {children}
    </span>
  );
}

export default Button;
