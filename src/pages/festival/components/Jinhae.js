import React from "react";
import "../../../css/fescomponents.css";
import img04 from "../../../images/img04.jpg";
import { MdLocationOn } from "react-icons/md";
import { AiOutlineCalendar } from "react-icons/ai";
import { HiOutlinePhone } from "react-icons/hi";
import { Link } from "react-router-dom";
import Jmap from "./Jmap";
import { useState } from "react";
import LikeButton from "../../LikeButton";
import Comments from "../../Comments";
function Jinhae() {
  const [article, setArticle] = useState({
    ctg: 3,
    board_num: 2,
  });
  return (
    <div className="fes">
      <hr className="hr-top" />
      <h4 className="infoTitle">진해 군항제</h4>
      <hr className="hr-line" />
      <img className="poster" alt="군항제" src={img04} width="800px" />
      <p className="content">
        36만 그루 벚나무의 향연에 빠져보자.
        <br />
        우리나라 대표 벚꽃축제 진해군항제가 2023년 3월 25일부터 4월 3일까지
        열흘간 개최된다.
        <br />
        이 시기 진해는 도시 전체가 벚꽃 천국이지만 그중에서도 ‘로망스다리’로
        알려진 여좌천은
        <br />
        1.5㎞ 구간의 개천 양옆으로 하늘에 벚꽃 터널이 어우러져 가히 환상적이다.
        <br />
        경화역 철길 따라 늘어선 아름드리 벚나무에서 나풀나풀 흩날리는 새하얀
        꽃비는 낭만 그 자체.
        <br />
        안민고개의 십리벚꽃길은 드라이브 코스로 일품이며,
        <br />
        제황산공원에 올라 진해탑에서 시가지를 내려다보면
        <br />
        중원로터리를 중심으로 100여 년 전 근대건축물과 벚꽃 군락이 어우러진
        <br />
        평온한 도시 풍경을 한눈에 담을 수 있다.
      </p>
      <div className="k-map">
        <Jmap />
      </div>

      <div className="info">
        <AiOutlineCalendar className="addressIcon" />
        <div className="addressTitle">기간</div>
        <hr className="infoHr" align="left" />
        <div className="addressRef">2023. 03. 25. ~ 2023. 04. 03.</div>
      </div>

      <div className="info">
        <MdLocationOn className="addressIcon" />
        <div className="addressTitle">주소</div>
        <hr className="infoHr" align="left" />
        <div className="addressRef">
          창원시 진해구 중원로타리 등 진해구 일원
        </div>
      </div>

      <div className="info">
        <HiOutlinePhone className="addressIcon" />
        <div className="addressTitle">전화</div>
        <hr className="infoHr" align="left" />
        <div className="addressRef">055-546-4310</div>
      </div>
      <LikeButton article={article} />
      <Link
        to="/festival"
        style={{ color: "inherit", textDecoration: "inherit" }}
      >
        <div className="btn-list">목록</div>
      </Link>
      <Comments article={article} />
    </div>
  );
}

export default Jinhae;
