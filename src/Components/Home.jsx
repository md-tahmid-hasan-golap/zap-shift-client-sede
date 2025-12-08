import React from "react";
import Works from "./Works";
import Service from "./Service";
import ExtraSection from "./ExtraSection";
import Question from "./Question";
import Banner from "./Banner";
import Brands from "./Brands";
import Customar from "./Customar";
import OurCustomar from "./OurCustomar";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Works></Works>
      <Service></Service>
      <Brands></Brands>
      <ExtraSection></ExtraSection>
      <Customar></Customar>
      <OurCustomar></OurCustomar>
      <Question></Question>
    </div>
  );
};

export default Home;
