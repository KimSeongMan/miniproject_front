import React from "react";
import Festivalshow from "./Festivalshow";
import MainMap from "./MainMap";
import Tournewspage from "../tournews/Tournewspage";
import Tourshow from "./Tourshow";

const Home = () => {
  return (
    <div>
      <MainMap />
      <Tourshow />
      <Festivalshow />
      <Tournewspage />
    </div>
  );
};
export default Home;
