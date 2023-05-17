import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img10 from "../../images/img10.jpg";
import img04 from "../../images/img04.jpg";
import img08 from "../../images/img08.jpg";
import img03 from "../../images/img03.jpg";
import img05 from "../../images/img05.jpg";
import img07 from "../../images/img07.jpg";
import "../../css/Festivalshow.css";
import { Link } from "react-router-dom";
const data = [
  {
    img: img10,
    url: "/festival/Seoul",
    title: "서울 세계불꽃축제",
    text1: "기간 | 2022. 10. 08. 13:00 - 21:30",
    text2: "장소 | 서울 영등포구 여의동로 330",
  },
  {
    img: img04,
    url: "/festival/jinhae",
    title: "진해 군항제",
    text1: "기간 | 2023. 03. 25. ~ 2023. 04. 03.",
    text2: "장소 | 창원시 진해구 중원로타리 등 진해구",
  },
  {
    img: img08,
    url: "/festival/songdo",
    title: "송도 맥주축제",
    text1: "기간 | 2022. 08. 26. ~ 2022. 09. 03.",
    text2: "장소 | 인천광역시 연수구 센트럴로 350",
  },
  {
    img: img03,
    url: "/festival/jeju",
    title: "제주 들불축제",
    text1: "기간 | 2023. 03. 09. ~ 2023. 03. 12.",
    text2: "장소 | 제주 제주시 애월읍 봉성리 산59-8",
  },
  {
    img: img05,
    url: "/festival/hamp",
    title: "함평 나비대축제",
    text1: "기간 | 2022. 4. 29. ~ 2025. 05. 08.",
    text2: "장소 | 전라남도 함평군 함평읍 곤재로 27",
  },
  {
    img: img07,
    url: "/festival/bory",
    title: "보령 머드축제",
    text1: "기간 | 2023. 07. 21. ~ 2023. 08. 06.",
    text2: "장소 | 충남 보령시 신흑동 대천해수욕장",
  },
];

const Festival1 = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    VariableWidthSlide: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    draggable: true,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <div id="festival_show">
      <Link to="/festival">
        <h3>요즘 뜨는 축제</h3>
      </Link>
      <Slider {...settings}>
        {data.map((d) => (
          <Link
            to={d.url}
            style={{ color: "black", textDecoration: "inherit" }}
          >
            <div>
              <img src={d.img} alt={d.img} />
              <h6>{d.title}</h6>
              <p>{d.text1}</p>
              <p>{d.text2}</p>
            </div>
          </Link>
        ))}
      </Slider>
    </div>
  );
};
export default Festival1;
