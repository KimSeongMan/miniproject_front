import a2 from "../../../images//2.jpg";
import Layout from "./Layout";
import "./common.css";
import { useState } from "react";
import LikeButton from "../../LikeButton";
import Comments from "../../Comments";

function Kcul() {
  const [article, setArticle] = useState({
    ctg: 2,
    board_num: 1,
  });
  return (
    <>
      <Layout />
      <div className="a-img">
        <img src={a2} alt="문화" />
      </div>
      <LikeButton article={article} />
      <Comments article={article} />
    </>
  );
}

export default Kcul;
