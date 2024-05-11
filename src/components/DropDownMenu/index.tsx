// import React from "react";
import { useEffect } from "react";
import Style from "./index.module.css";

function DropDownMenu() {
  useEffect(() => {
    const optionList = document.querySelectorAll("[id*=option]");

    if (optionList?.length) {
      const lastOption: HTMLElement = optionList[
        optionList.length - 1
      ] as HTMLElement;

      lastOption.style.borderBottom = "0px solid black";
    }

    return () => {};
  }, []);

  const openDropDown = (id: string) => {
    //find the element
    const element = document.getElementById(id);
    if (element) {
      // check whether the option is closed ?
      if (!element.classList.contains(Style.optionOpened)) {
        // open the option if closed
        //find all other opened elements
        const OpendElement = document.querySelectorAll(
          `.${Style.optionOpened}`
        );

        //close opened element first
        if (OpendElement[0]) {
          OpendElement[0].classList.remove(Style.optionOpened);

          //change the minus sign inside the h1 tagg
          const h1Element = OpendElement[0].querySelector("h1");
          if (h1Element) {
            h1Element.textContent = "+";
          }
        }

        //open the target element
        element.classList.add(Style.optionOpened);

        //change the plus side inside the h1 tagg inside element
        const h1Element = element.querySelector("h1");
        if (h1Element) {
          h1Element.textContent = "--";
        }
      } else {
        // close the option if opened
        // close the option
        element.classList.remove(Style.optionOpened);
        //change the minus sign inside the h1 tagg
        const h1Element = element.querySelector("h1");
        if (h1Element) {
          h1Element.textContent = "+";
        }
      }
    }
  };

  return (
    <div className={Style.container} id="faq-container">
      <div className={Style.optionClosed} id="first-option">
        <div>
          <h3>Do you offer freelancers?</h3>
          <h1 onClick={() => openDropDown("first-option")}>+</h1>
        </div>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
      <div className={Style.optionClosed} id="second-option">
        <div>
          <h3>
            What’s the guarantee that I will be satisfied with the hired talent?
          </h3>
          <h1 onClick={() => openDropDown("second-option")}>+</h1>
        </div>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
      <div className={Style.optionClosed} id="third-option">
        <div>
          <h3>Can I hire multiple talents at once?</h3>
          <h1 onClick={() => openDropDown("third-option")}>+</h1>
        </div>

        <p>
          If unhappy with a project, communicate with the freelancer, allow for
          revisions, and refer to the agreement. Escalate to platform support if
          needed, considering mediation. Review policies, seek collaborative
          solutions for resolution.
        </p>
      </div>
      <div className={Style.optionClosed} id="fourth-option">
        <div>
          <h3>Why should I not go to an agency directly?</h3>
          <h1 onClick={() => openDropDown("fourth-option")}>+</h1>
        </div>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
      <div className={Style.optionClosed} id="fifth-option">
        <div>
          <h3>Who can help me pick a right skillset and duration for me?</h3>
          <h1 onClick={() => openDropDown("fifth-option")}>+</h1>
        </div>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
    </div>
  );
}

export default DropDownMenu;
