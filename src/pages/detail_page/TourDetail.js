import "../../css/TourDetail.css";
import { Outlet, useParams } from "react-router-dom";
import { useState } from "react";
import Heart from "react-heart";
import { Link } from "react-router-dom";
const data = {
  cc: {
    url: "/tour/cc",
    name: "충청도",
    data: [
      { name: "천리포수목원", url: "/tour/cc/cc1" },
      { name: "알프스마을", url: "/tour/cc/cc2" },
      { name: "서산유기방가옥", url: "/tour/cc/cc3" },
      { name: "독립기념관", url: "/tour/cc/cc4" },
    ],
  },
  gg: {
    url: "/tour/gg",
    name: "경기도",
    data: [
      { name: "아침고요수목원", url: "/tour/gg/gg1" },
      { name: "화담숲", url: "/tour/gg/gg2" },
      { name: "수원화성", url: "/tour/gg/gg3" },
      { name: "탄도항", url: "/tour/gg/gg4" },
    ],
  },
  gs: {
    url: "/tour/gs",
    name: "경상도",
    data: [
      { name: "지리산", url: "/tour/gs/gs1" },
      { name: "해인사", url: "/tour/gs/gs2" },
      { name: "외도보타니아", url: "/tour/gs/gs3" },
      { name: "우포늪", url: "/tour/gs/gs4" },
    ],
  },
  gw: {
    url: "/tour/gw",
    name: "강원도",
    data: [
      { name: "대관령 양때목장", url: "/tour/gw/gw1" },
      { name: "남이섬", url: "/tour/gw/gw2" },
      { name: "속삭이는 자작나무숲", url: "/tour/gw/gw3" },
      { name: "정동진", url: "/tour/gw/gw4" },
    ],
  },
  jeju: {
    url: "/tour/jeju",
    name: "제주시",
    data: [
      { name: "용머리해안", url: "/tour/jeju/jeju1" },
      { name: "우도", url: "/tour/jeju/jeju2" },
      { name: "카멜리아 힐", url: "/tour/jeju/jeju3" },
      { name: "사려니숲길", url: "/tour/jeju/jeju4" },
    ],
  },
  jl: {
    url: "/tour/jl",
    name: "전라도",
    data: [
      { name: "오동도", url: "/tour/jl/jl1" },
      { name: "보성녹차밭", url: "/tour/jl/jl2" },
      { name: "돌산공원", url: "/tour/jl/jl3" },
      { name: "순천만습지", url: "/tour/jl/jl4" },
    ],
  },
  seoul: {
    url: "/tour/seoul",
    name: "서울",
    data: [
      { name: "북촌한옥마을", url: "/tour/seoul/chon" },
      { name: "경복궁", url: "/tour/seoul/gbg" },
      { name: "남산타워", url: "/tour/seoul/nstw" },
      { name: "서울스카이", url: "/tour/seoul/seoulsky" },
      { name: "서대문형무소", url: "/tour/seoul/sdmh" },
      { name: "서울숲", url: "/tour/seoul/seouls" },
    ],
  },
};

const TourDetail = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const params = useParams();
  const Detail = data[params.area];

  return (
    <div className="TourSide">
      {Detail ? (
        <div>
          <aside className="sidebar">
            <nav>
              <Link to={Detail.url}>
                <h3>{Detail.name}</h3>
              </Link>
              <ul>
                {Detail.data.map((d) => (
                  <li>
                    <Link to={d.url}>{d.name}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>
        </div>
      ) : (
        <p>존재하지 않음</p>
      )}

      <div className="scroll__container">
        <button id="top" onClick={scrollToTop} type="button">
          Top
        </button>
      </div>
      <main>
        <Outlet></Outlet>
      </main>
    </div>
  );
};
export default TourDetail;
