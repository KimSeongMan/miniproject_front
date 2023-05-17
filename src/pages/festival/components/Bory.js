import React from "react";
import "../../../css/fescomponents.css";
import img07 from "../../../images/img07.jpg";
import { MdLocationOn } from "react-icons/md";
import { AiOutlineCalendar } from "react-icons/ai";
import { HiOutlinePhone } from "react-icons/hi";
import { Link } from "react-router-dom";
import Bmap from "./Bmap";
import { useState } from "react";
import LikeButton from "../../LikeButton";
import Comments from "../../Comments";
function Bory() {
  const [article, setArticle] = useState({
    ctg: 3,
    board_num: 6,
  });
  return (
    <div className="fes">
      <hr className="hr-top" />
      <h4 className="infoTitle">보령 머드축제</h4>
      <hr className="hr-line" />
      <img className="poster" alt="머드축제" src={img07} />
      <p className="content">
        보령머드축제는 대한민국 충청남도 보령시 주관으로
        <br />
        대천해수욕장을 기반으로 개최되는 지역 축제로,
        <br />
        한국의 가장 대표적인 여름 축제이다.
        <br />
        대천해수욕장을 비롯한 지역 관광명소를 홍보코자 충청남도 보령시에서
        <br />
        1998년 7월에 최초로 축제를 개최하였다.
        <br />
        머드를 이용하여 각종 놀이를 즐기는 축제로
        <br />
        머드 불꽃축제, 머드 바디페인팅, 각종 공연 등이 행해진다.
      </p>
      <div className="k-map">
        <Bmap />
      </div>

      <div className="info">
        <AiOutlineCalendar className="addressIcon" />
        <div className="addressTitle">기간</div>
        <hr className="infoHr" align="left" />
        <div className="addressRef">2023. 07. 21. ~ 2023. 08. 06.</div>
      </div>

      <div className="info">
        <MdLocationOn className="addressIcon" />
        <div className="addressTitle">주소</div>
        <hr className="infoHr" align="left" />
        <div className="addressRef">충남 보령시 신흑동 대천해수욕장</div>
      </div>

      <div className="info">
        <HiOutlinePhone className="addressIcon" />
        <div className="addressTitle">전화</div>
        <hr className="infoHr" align="left" />
        <div className="addressRef">041-930-0891</div>
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

export default Bory;
