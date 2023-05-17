import a3 from "../../../images//3.jpg";
import Layout from "./Layout";
import "./common.css";
import { useState } from "react";
import LikeButton from "../../LikeButton";
import Comments from "../../Comments";
function Mu() {
  const [article, setArticle] = useState({
    ctg: 2,
    board_num: 2,
  });
  return (
    <>
      <Layout />
      <div className="a-img">
        <img src={a3} alt="음악" />
      </div>
      <LikeButton article={article} />
      <Comments article={article} />
    </>
  );
}

export default Mu;
