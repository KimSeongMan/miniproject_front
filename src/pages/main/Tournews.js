import React from "react";
import "../../css/Tournews.css";
import { Link } from "react-router-dom";
const data = [
  {
    url: "/tournews/home",
    text: "봄꽃 가득한 나들이 가고 싶은 곳",
  },
  {
    url: "/tournews/kcul",
    text: "K-문화유산, 여행 패키지 시동",
  },
  {
    url: "/tournews/mu",
    text: "음악에 몸을 싣는다",
  },
];
const Tournews = () => {
  return (
    <div id="tournews">
      <Link to="/tournews">
        <h4>여행관련소식</h4>
      </Link>
      <ul>
        {data.map((d) => (
          <li>
            <Link to={d.url}>{d.text}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Tournews;
