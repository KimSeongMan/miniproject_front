import React from "react";
import "../../../css/fescomponents.css";
import img10 from "../../../images/img10.jpg";
import { MdLocationOn } from "react-icons/md";
import { AiOutlineCalendar } from "react-icons/ai";
import { HiOutlinePhone } from "react-icons/hi";
import { Link } from "react-router-dom";
import KakaoMap from "./KakaoMap";
import { useState } from "react";
import LikeButton from "../../LikeButton";
import Comments from "../../Comments";

function Seoul() {
  const [article, setArticle] = useState({
    ctg: 3,
    board_num: 1,
  });
  return (
    <div className="fes">
      <hr className="hr-top" />
      <h4 className="infoTitle">서울 세계불꽃축제</h4>
      <hr className="hr-line" />
      <img className="poster" alt="불꽃축제" src={img10} />
      <p className="content">
        서울세계불꽃축제는 바쁜 매일을 살아가는 시민의 일상에 즐거움을 선사하기
        위해
        <br />
        한화그룹에서 2000년부터 사회공헌 사업으로 꾸준히 진행해 온 대한민국
        최고의 축제이다.
        <br />
        매년 세계적인 수준의 불꽃 전문 기업들이 초청되어 여의도의 밤 하늘을
        무대로
        <br />
        환상적인 불꽃 연출을 선보이며, 주간에도 다채로운 부대행사가 진행된다.
        <br />
        특히, (주)한화가 자랑하는 '멀티미디어 불꽃쇼'는 불꽃과 음악, 레이저
        연출이 결합된
        <br />
        아시아 최고 수준의 불꽃쇼로써 매년 100만명 이상의 시민들이 이를 보기
        위해 여의도를 찾는다.
      </p>
      <div className="k-map">
        <KakaoMap />
      </div>

      <div className="info">
        <MdLocationOn className="addressIcon" />
        <div className="addressTitle">주소</div>
        <hr className="infoHr" align="left" />
        <div className="addressRef">서울 영등포구 여의동로 330</div>
      </div>

      <div className="info">
        <AiOutlineCalendar className="addressIcon" />
        <div className="addressTitle">기간</div>
        <hr className="infoHr" align="left" />
        <div className="addressRef">2022. 10. 08.</div>
      </div>

      <div className="info">
        <HiOutlinePhone className="addressIcon" />
        <div className="addressTitle">전화</div>
        <hr className="infoHr" align="left" />
        <div className="addressRef">02-519-9778</div>
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

export default Seoul;
