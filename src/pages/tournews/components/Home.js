import a1 from "../../../images/1.jpg";
import Layout from "./Layout";
import "./common.css";
import { useState } from "react";
import LikeButton from "../../LikeButton";
import Comments from "../../Comments";
function Home() {
  const [article, setArticle] = useState({
    ctg: 2,
    board_num: 0,
  });
  return (
    <>
      <Layout />
      <div className="a-img">
        <img src={a1} alt="봄꽃 기사" />
      </div>
      <LikeButton article={article} />
      <Comments article={article} />
    </>
  );
}

export default Home;
