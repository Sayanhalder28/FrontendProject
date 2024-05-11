import Style from "./index.module.css";

type propType = {
  header: string;
  children?: React.ReactNode;
  description?: string;
  className?: string;
};

function Heading({ header, children, description, className }: propType) {
  return (
    <div className={[Style.heading, className].join(" ")}>
      <span>{header}</span>
      <h1>{children}</h1>
      <p>{description}</p>
    </div>
  );
}

export default Heading;
