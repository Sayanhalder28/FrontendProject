// import React from "react";
import Style from "./index.module.css";
import faqLogo from "../../assets/faqLogo.svg";
import DropDownMenu from "../../components/DropDownMenu";
import GridUi from "../../components/ui/GridUi";
import Carousel from "../../components/Carousel";
import Button from "../../components/Button";
import arrow from "../../assets/arrow.svg";
import potrait from "../../assets/potrait.png";
import spark from "../../assets/spark.svg";
import roketIcon from "../../assets/roketIcon.svg";
import Heading from "../../components/ui/Heading";

function Home() {
  return (
    <div className={Style.container}>
      {/* add section */}
      <section className={Style.heroSection}>
        {/* heading part*/}
        <Heading header="Success stories">
          Every success journey
          <br />
          we’ve encountered.
        </Heading>

        <div className={Style.heroBody}>
          <div className={Style.heroLeftHalf}>
            <div className={Style.leftHalfAdd}>
              <img src={potrait} alt="girl potrait" />
              <div className={Style.cardOne}>
                <img src={spark} alt="spark" />
                <h1>40%</h1>
                <p>
                  Achieved reduction in project execution time by optimising
                  team availability
                </p>
              </div>
              <div className={Style.cardTwo}>
                <img src={roketIcon} alt="rocket" />
                <h2>
                  10 DAYS
                  <br />
                  <p>Staff Deployment</p>
                </h2>
              </div>
              <div className={Style.cardThree}>
                <span>
                  $0.5 <span>MILLION</span>
                </span>

                <p>
                  Reduced client expenses by saving on hiring and employee
                  costs.
                </p>
              </div>
            </div>
          </div>
          <div className={Style.heroRightHalf}>
            <Carousel className={Style.rightHalfCarousel} />
            <Button design="two" className={Style.rightHalfBtn}>
              Explore More &nbsp;&nbsp;&nbsp;
              <img src={arrow} alt="=>" />
            </Button>
          </div>
        </div>
      </section>
      {/* grid ui element  */}
      <div className={Style.gridElement}>
        <GridUi />
      </div>
      {/* faq section  */}
      <section className={Style.faqSection}>
        <div className={Style.faqLeftHalf}>
          <div>
            <span>
              <i>What’s on your mind</i>
              <h1>Ask Questions</h1>
            </span>
          </div>
          <img src={faqLogo} alt="faqLogo" />
        </div>
        <div className={Style.faqRightHalf}>
          <DropDownMenu />
        </div>
      </section>
      {/* footer section  */}
      <section className={Style.footerSection}>
        <div>
          <i style={{ fontSize: "x-large" }}>&copy;</i>&nbsp;&nbsp;Talup 2023.
          All rights reserved
        </div>
        <div className={Style.linkContainer}>
          <a href="https://www.google.com">Terms & Conditions</a>
          <a href="https://www.google.com">Privacy Policy</a>
        </div>
      </section>
    </div>
  );
}

export default Home;
