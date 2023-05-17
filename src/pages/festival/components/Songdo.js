import React from "react";
import "../../../css/fescomponents.css";
import img08 from "../../../images/img08.jpg";
import { MdLocationOn } from "react-icons/md";
import { AiOutlineCalendar } from "react-icons/ai";
import { HiOutlinePhone } from "react-icons/hi";
import { Link } from "react-router-dom";
import Smap from "./Smap";
import { useState } from "react";
import LikeButton from "../../LikeButton";
import Comments from "../../Comments";
function Songdo() {
  const [article, setArticle] = useState({
    ctg: 3,
    board_num: 3,
  });
  return (
    <div className="fes">
      <hr className="hr-top" />
      <h4 className="infoTitle">송도 맥주축제</h4>
      <hr className="hr-line" />
      <img className="poster" alt="맥주축제" src={img08} />
      <p className="content">
        80만명이 찾은 압도적 퍼포먼스 송도맥주축제가 다시 돌아왔다!
        <br />
        국내외 유명 맥주, 차별화된 레시피! 매일 밤마다 펼쳐지는 불꽃축제.
        <br />
        그리고 수많은 유명 아티스트들이 펼치는 환호와 열정의 무대.
        <br />
        더 다채롭게 돌아온 송도맥주축제에서 일상을 벗어난 새로운 경험을
        느껴보자.
        <br />
        송도맥주축제는 지상 최대 맥주문화축제로
        <br />
        푸른 잔디공원에서 펼쳐지는대규모 맥주와 음악축제다.
        <br />
        메인 행사장 안에는 10,000명 이상의 인원을 수용할 수 있는
        <br />
        구제 최대 규모를 자랑하는 한 여름밤 음악축제다.
        <br />
        맥주를 매개로 다양한 먹거리와 노래, 춤, 퍼포먼스, 불꽃놀이가 어우러지는
        <br />
        흥겨운 여름축제로서 전 세계 맥주 체험 행사 등 세계 각국의 맥주 시음회는
        물론
        <br />
        국내외 가수들이 참여하는 다양한 음악 페스티벌도 진행된다.
      </p>
      <div className="k-map">
        <Smap />
      </div>

      <div className="info">
        <AiOutlineCalendar className="addressIcon" />
        <div className="addressTitle">기간</div>
        <hr className="infoHr" align="left" />
        <div className="addressRef">2022. 08. 26. ~ 2022. 09. 03.</div>
      </div>

      <div className="info">
        <MdLocationOn className="addressIcon" />
        <div className="addressTitle">주소</div>
        <hr className="infoHr" align="left" />
        <div className="addressRef">
          인천광역시 연수구 센트럴로 350 달빛축제공원
        </div>
      </div>

      <div className="info">
        <HiOutlinePhone className="addressIcon" />
        <div className="addressTitle">전화</div>
        <hr className="infoHr" align="left" />
        <div className="addressRef">032-830-1000</div>
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

export default Songdo;
