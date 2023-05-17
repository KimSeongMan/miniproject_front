import React from "react";
import "../../../css/fescomponents.css";
import img03 from "../../../images/img03.jpg";
import { MdLocationOn } from "react-icons/md";
import { AiOutlineCalendar } from "react-icons/ai";
import { HiOutlinePhone } from "react-icons/hi";
import { Link } from "react-router-dom";
import Jemap from "./Jemap";
import { useState } from "react";
import LikeButton from "../../LikeButton";
import Comments from "../../Comments";
function Jeju() {
  const [article, setArticle] = useState({
    ctg: 3,
    board_num: 4,
  });
  return (
    <div className="fes">
      <hr className="hr-top" />
      <h4 className="infoTitle">제주 들불축제</h4>
      <hr className="hr-line" />
      <img className="poster" alt="들불축제" src={img03} width="650px" />
      <p className="content">
        제주들불축제는 제주도의 목축문화인 들불놓기를 현대적으로 재현한 제주도의
        대표축제이다.
        <br />
        매년 3월 새별오름에서 펼쳐지는 제주들불축제에서는
        <br />
        오름에 들불을 놓아 밤 하늘을 붉게 수놓는다.
        <br />
        커다란 오름을 따라 붉은 불꽃이 일렁이는 모습은 그야말로 장관이다.
        <br />
        이 특별한 야경을 보기 위해 한국인들뿐 아니라 외국인들도 많이 찾고 있다.
        <br />
        들불놓기 이외에도 오름 전체를 대형스크린삼아 조명을 비추는
        <br />
        미디어 파사드쇼와 횃불 대행진,
        <br />
        화산섬 제주의 탄생을 의미하는 화산불꽃쇼 등 화려한 볼거리가 제공된다.
      </p>
      <div className="k-map">
        <Jemap />
      </div>

      <div className="info">
        <AiOutlineCalendar className="addressIcon" />
        <div className="addressTitle">기간</div>
        <hr className="infoHr" align="left" />
        <div className="addressRef">2023. 03. 09. ~ 2023. 03. 12.</div>
      </div>

      <div className="info">
        <MdLocationOn className="addressIcon" />
        <div className="addressTitle">주소</div>
        <hr className="infoHr" align="left" />
        <div className="addressRef">제주 제주시 애월읍 봉성리 산59-8</div>
      </div>

      <div className="info">
        <HiOutlinePhone className="addressIcon" />
        <div className="addressTitle">전화</div>
        <hr className="infoHr" align="left" />
        <div className="addressRef">064-728-2751</div>
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

export default Jeju;
