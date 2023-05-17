import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../css/Tourshow.css";
import seoul_spot1 from "../../images/seoul_spot1.jpg";
import jeju_spot1 from "../../images/jj_spot1.jpeg";
import right_btn from "../../images/right.png";
import left_btn from "../../images/left.png";
import { Link } from "react-router-dom";
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <img src={right_btn} alt="arrow next" id="right_btn"></img>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <img src={left_btn} alt="arrow pre" id="left_btn"></img>
    </div>
  );
}
const data = [
  {
    img: seoul_spot1,
    url: "/tour/seoul/chon",
    text: "북촌한옥마을",
  },
  {
    img: "/img/gg_spot1.jpg",
    url: "/tour/gg/gg1",
    text: "아침고요수목원",
  },
  {
    img: "/img/gw_spot1.jfif",
    url: "/tour/gw/gw1",
    text: "대관령 양때목장",
  },
  {
    img: "/img/cc_spot1.jpg",
    url: "/tour/cc/cc1",
    text: "천리포수목원",
  },
  {
    img: "/img/jl_spot1.jpg",
    url: "/tour/jl/jl1",
    text: "오동도",
  },
  {
    img: "/img/gs_spot1.jpg",
    url: "/tour/gs/gs1",
    text: "지리산",
  },
  {
    img: jeju_spot1,
    url: "/tour/jeju/jeju1",
    text: "용머리 해안",
  },
];
const Tourshow = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    VariableWidthSlide: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  }; 
  return (
    <div id="event_show">
      <h3>인기 여행지</h3>
      <Slider {...settings}>
        {data.map((d) => (
          <div>
            <Link to={d.url}>
              <img src={d.img} alt={d.img} />
              <div className="tstext">
                <p>{d.text}</p>
              </div>
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
};
export default Tourshow;
