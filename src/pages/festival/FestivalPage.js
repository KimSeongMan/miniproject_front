import React from "react";
import "../../css/FestivalPage.css";
import { AiOutlineCalendar } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import img10t from "../../images/img10t.jpg";
import img04t from "../../images/img04t.jpg";
import img08t from "../../images/img08t.jpg";
import img03t from "../../images/img03t.jpg";
import img05t from "../../images/img05t.jpg";
import img07t from "../../images/img07t.jpg";
import { Link } from "react-router-dom";

function App() {
  return (
    <div id="festivalpage">
      <h4><br /></h4>
      <Link
        to="/festival/Seoul"
        style={{ color: "inherit", textDecoration: "inherit" }}
      >
        <div style={{ float: "left" }}>
          {/* <img src={img10} alt="불꽃축제" /> */}
          <img className="thumb" alt="불꽃축제" src={img10t} />
        </div>
        <div className="title">서울 세계불꽃축제</div>
        <br />
        <span>
          <AiOutlineCalendar /> 2022. 10. 08.
        </span>
        <br />
        <span>
          <CiLocationOn /> 서울 영등포구 여의동로 330
        </span>
      </Link>
      <br />
      <br />
      <hr className="hr-first" align="left" />

      <Link
        to="/festival/jinhae"
        style={{ color: "inherit", textDecoration: "inherit" }}
      >
        <div style={{ float: "left" }}>
          <img className="thumb" alt="군항제" src={img04t} />
        </div>
        <div className="title">진해 군항제</div>
        <br />
        <span>
          <AiOutlineCalendar /> 2023. 03. 25. ~ 2023. 04. 03.
        </span>
        <br />
        <span>
          <CiLocationOn /> 창원시 진해구 중원로타리 등 진해구
        </span>
      </Link>
      <br />
      <br />
      <hr className="hr-first" align="left" />

      <Link
        to="/festival/songdo"
        style={{ color: "inherit", textDecoration: "inherit" }}
      >
        <div style={{ float: "left" }}>
          <img className="thumb" alt="맥주축제" src={img08t} />
        </div>
        <div className="title">송도 맥주축제</div>
        <br />
        <span>
          <AiOutlineCalendar /> 2022. 08. 26. ~ 2022. 09. 03.
        </span>
        <br />
        <span>
          <CiLocationOn /> 인천광역시 연수구 센트럴로 350
        </span>
      </Link>
      <br />
      <br />
      <hr className="hr-first" align="left" />

      <Link
        to="/festival/jeju"
        style={{ color: "inherit", textDecoration: "inherit" }}
      >
        <div style={{ float: "left" }}>
          <img className="thumb" alt="들불축제" src={img03t} />
        </div>
        <div className="title">제주 들불축제</div>
        <br />
        <span>
          <AiOutlineCalendar /> 2023. 03. 09. ~ 2023. 03. 12.
        </span>
        <br />
        <span>
          <CiLocationOn /> 제주 제주시 애월읍 봉성리 산59-8
        </span>
      </Link>
      <br />
      <br />
      <hr className="hr-first" align="left" />

      <Link
        to="/festival/hamp"
        style={{ color: "inherit", textDecoration: "inherit" }}
      >
        <div style={{ float: "left" }}>
          <img className="thumb" alt="나비대축제" src={img05t} />
        </div>
        <div className="title">함평 나비대축제</div>
        <br />
        <span>
          <AiOutlineCalendar /> 2022. 4. 29. ~ 2025. 05. 08.
        </span>
        <br />
        <span>
          <CiLocationOn /> 전라남도 함평군 함평읍 곤재로 27
        </span>
      </Link>
      <br />
      <br />
      <hr className="hr-first" align="left" />

      <Link
        to="/festival/bory"
        style={{ color: "inherit", textDecoration: "inherit" }}
      >
        <div style={{ float: "left" }}>
          <img className="thumb" alt="머드축제" src={img07t} />
        </div>
        <div className="title">보령 머드축제</div>
        <br />
        <span>
          <AiOutlineCalendar /> 2023. 07. 21. ~ 2023. 08. 06.
        </span>
        <br />
        <span>
          <CiLocationOn /> 충남 보령시 신흑동 대천해수욕장
        </span>
      </Link>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default App;
