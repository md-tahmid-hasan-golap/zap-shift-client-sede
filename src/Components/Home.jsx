import React from "react";
import Works from "./Works";
import Service from "./Service";
import ExtraSection from "./ExtraSection";
import Question from "./Question";
import Banner from "./Banner";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Works></Works>
      <Service></Service>
      <ExtraSection></ExtraSection>
      <Question></Question>
    </div>
  );
};

export default Home;
