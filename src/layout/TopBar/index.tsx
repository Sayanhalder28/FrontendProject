// import React from "react";
import Style from "./index.module.css";
import BrandLogo from "../../assets/brandLogo.svg";
import crossLogo from "../../assets/crossLogo.svg";
import Button from "../../components/Button";

function TopBar({ currLoc }: { currLoc: string }) {
  return (
    <header className={Style.container}>
      <div
        className={[Style.content, currLoc != "/" && Style.removeBorder].join(
          " "
        )}
      >
        <img src={BrandLogo} alt="BrandLogo" className={Style.brandLogo} />
        <div className={Style.btnContainer}>
          {currLoc === "/" && (
            <>
              <Button to="get-project" design="one">
                Get Projects
              </Button>
              <Button design="two">Onboard Talent</Button>
            </>
          )}

          {currLoc === "/get-project" && (
            <>
              <Button to="/" className={Style.crossLogo}>
                <img src={crossLogo} alt="crossLogo" />
              </Button>
            </>
          )}
        </div>
      </div>
    </header>
  );
}

export default TopBar;
