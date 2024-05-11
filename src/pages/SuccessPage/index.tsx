import React, { useEffect } from "react";
import Heading from "../../components/ui/Heading";
import Style from "./index.module.css";
import correctLogo from "../../assets/correctLogo.svg";
import { useNavigate } from "react-router-dom";

function SuccesssPage() {
  const [timer, setTimer] = React.useState<number>(5);
  const navigate = useNavigate();

  useEffect(() => {
    // Setting the timer
    const interval = setInterval(() => {
      if (timer === 0) navigate("/");
      setTimer((prev) => prev - 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [navigate, timer]);

  return (
    <div className={Style.page}>
      <div className={Style.container}>
        <img src={correctLogo} alt="correct" className={Style.correctLogo} />
        <Heading header="Success Submitted">
          Congratulations
          <p>
            Your request has been successfully submitted to us. We
            <br /> will validate your information and reach out to your
            <br /> shortly with updates
          </p>
        </Heading>
      </div>
      <div className={Style.timer}>
        <p>
          Redirecting you to Homepage in<b> {timer} seconds</b>
        </p>
      </div>
    </div>
  );
}

export default SuccesssPage;
