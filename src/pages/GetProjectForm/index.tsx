import React, { useEffect } from "react";
import Style from "./index.module.css";
import Heading from "../../components/ui/Heading";
import Button from "../../components/Button";
import warning from "../../assets/warning.svg";
import { useNavigate } from "react-router-dom";
function GetProjectForm() {
  const [deactive, setDeactive] = React.useState(true);
  const [invalidEmail, setInvalidEmail] = React.useState(false);
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
  });

  const navigation = useNavigate();

  const handleClick = () => {
    setInvalidEmail(false);
    // Validation for email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.email)) {
      setInvalidEmail(true);
      return;
    }

    console.log("Form Submitted", formData);
    navigation("/success");

    // If email is valid, continue with your logic
    // Your logic goes here
  };

  useEffect(() => {
    setInvalidEmail(false);
    // Checking if name and email are not empty
    if (formData.name && formData.email) {
      setDeactive(false);
    } else {
      setDeactive(true);
    }
  }, [formData]);

  return (
    <div className={Style.page}>
      <div className={Style.container}>
        <Heading header="Registration Form" className={Style.heading}>
          Start your success
          <br /> Journey here!
        </Heading>
        <div className={Style.form}>
          <input
            type="text"
            placeholder="Enter your name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <input
            type="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
          {invalidEmail && (
            <div className={Style.warning}>
              <img src={warning} alt="warning emoji" />
              Enter a valid email address
            </div>
          )}
          <Button
            onClick={() => handleClick()}
            className={Style.button}
            design="two"
            deactive={deactive}
          >
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
}

export default GetProjectForm;
