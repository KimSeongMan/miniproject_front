import React from "react";
import "../../../css/fescomponents.css";
import img05 from "../../../images/img05.jpg";
import { MdLocationOn } from "react-icons/md";
import { AiOutlineCalendar } from "react-icons/ai";
import { HiOutlinePhone } from "react-icons/hi";
import { Link } from "react-router-dom";
import Hmap from "./Hmap";
import { useState } from "react";
import LikeButton from "../../LikeButton";
import Comments from "../../Comments";
function Hamp() {
  const [article, setArticle] = useState({
    ctg: 3,
    board_num: 5,
  });
  return (
    <div className="fes">
      <hr className="hr-top" />
      <h4 className="infoTitle">함평 나비대축제</h4>
      <hr className="hr-line" />
      <img className="poster" alt="나비대축제" src={img05} />
      <p className="content">
        나비와 함께하는 봄날의 여행
        <br />
        싱그러운 봄바람과 꽃향기와 함께 나비들이 춤을 추는 4월,
        <br />
        전라남도 함평에서 아름다운 나비와 꽃, 곤충을 주제로 한<br />
        함평나비대축제가 열린다.
        <br />
        알에서부터 애벌레를 거쳐 나비가 되기까지의 성장과정을 알아보거나
        <br />
        세계 각국의 나비와 곤충 표본 450종 9,000여 마리를 구경하고,
        <br />
        생태환경에 대한 다양한 체험이 가능해 아이들과 함께 찾기 좋은 축제이다.
      </p>
      <div className="k-map">
        <Hmap />
      </div>

      <div className="info">
        <AiOutlineCalendar className="addressIcon" />
        <div className="addressTitle">기간</div>
        <hr className="infoHr" align="left" />
        <div className="addressRef">2022. 4. 29. ~ 2025. 05. 08.</div>
      </div>

      <div className="info">
        <MdLocationOn className="addressIcon" />
        <div className="addressTitle">주소</div>
        <hr className="infoHr" align="left" />
        <div className="addressRef">전라남도 함평군 함평읍 곤재로 27</div>
      </div>

      <div className="info">
        <HiOutlinePhone className="addressIcon" />
        <div className="addressTitle">전화</div>
        <hr className="infoHr" align="left" />
        <div className="addressRef">061-320-2238</div>
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

export default Hamp;
