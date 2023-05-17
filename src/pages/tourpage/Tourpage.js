import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "../../css/TourPage.css";
import gw_spot1 from "../../images/gw_spot1.jfif";
import gw_spot2 from "../../images/gw_spot2.jfif";
import gw_spot3 from "../../images/gw_spot3.jfif";
import gw_spot4 from "../../images/gw_spot4.jfif";
import gg_spot1 from "../../images/gg_spot1.jpg";
import gg_spot2 from "../../images/gg_spot2.jpg";
import gg_spot3 from "../../images/gg_spot3.jpg";
import gg_spot4 from "../../images/gg_spot4.jpg";
import seoul_spot1 from "../../images/seoul_spot1.jpg";
import seoul_spot2 from "../../images/seoul_spot2.jfif";
import seoul_spot3 from "../../images/seoul_spot3.jfif";
import seoul_spot4 from "../../images/seoul_spot4.jfif";
import seoul_spot5 from "../../images/seoul_spot5.jfif";
import seoul_spot6 from "../../images/seoul_spot6.jfif";
import jl_spot1 from "../../images/jl_spot1.jpg";
import jl_spot2 from "../../images/jl_spot2.jpeg";
import jl_spot3 from "../../images/jl_spot3.jfif";
import jl_spot4 from "../../images/jl_spot4.jpg";
import jj_spot1 from "../../images/jj_spot1.jpeg";
import jj_spot2 from "../../images/jj_spot2.jpg";
import jj_spot3 from "../../images/jj_spot3.jfif";
import jj_spot4 from "../../images/jj_spot4.jpg";
import gs_spot1 from "../../images/gs_spot1.jpg";
import gs_spot2 from "../../images/gs_spot2.jfif";
import gs_spot3 from "../../images/gs_spot3.jpg";
import gs_spot4 from "../../images/gs_spot4.jpg";
const data = {
  gw: {
    name: "강원도 여행지",
    data: [
      {
        name: "대관령양떼목장",
        id: "spot1",
        url: "/tour/gw/gw1",
        img: gw_spot1,
      },
      {
        name: "남이섬",
        id: "spot2",
        url: "/tour/gw/gw2",
        img: gw_spot2,
      },
      {
        name: "속삭이는자작나무숲",
        id: "spot3",
        url: "/tour/gw/gw3",
        img: gw_spot3,
      },
      {
        name: "정동진",
        id: "spot4",
        url: "/tour/gw/gw4",
        img: gw_spot4,
      },
    ],
  },
  cc: {
    name: "충청도 여행지",
    data: [
      {
        name: "천리포수목원",
        id: "spot1",
        url: "/tour/cc/cc1",
        img: "/img/cc_spot1.jpg",
      },
      {
        name: "알프스마을",
        id: "spot2",
        url: "/tour/cc/cc2",
        img: "/img/cc_spot2.jpg",
      },
      {
        name: "서산유기방가옥",
        id: "spot3",
        url: "/tour/cc/cc3",
        img: "/img/cc_spot3.jpg",
      },
      {
        name: "독립기념관",
        id: "spot4",
        url: "/tour/cc/cc4",
        img: "/img/cc_spot4.jpg",
      },
    ],
  },
  gg: {
    name: "경기도 여행지",
    data: [
      {
        name: "아침고요수목원",
        id: "spot1",
        url: "/tour/gg/gg1",
        img: gg_spot1,
      },
      {
        name: "화담숲",
        id: "spot2",
        url: "/tour/gg/gg2",
        img: gg_spot2,
      },
      {
        name: "수원화성",
        id: "spot3",
        url: "/tour/gg/gg3",
        img: gg_spot3,
      },
      {
        name: "탄도항",
        id: "spot4",
        url: "/tour/gg/gg4",
        img: gg_spot4,
      },
    ],
  },
  seoul: {
    name: "서울시 여행지",
    data: [
      {
        name: "북촌 한옥마을",
        id: "spot1",
        url: "/tour/seoul/chon",
        img: seoul_spot1,
      },
      {
        name: "경복궁",
        id: "spot2",
        url: "/tour/seoul/gbg",
        img: seoul_spot2,
      },
      {
        name: "남산타워",
        id: "spot3",
        url: "/tour/seoul/nstw",
        img: seoul_spot3,
      },
      {
        name: "서울스카이",
        id: "spot4",
        url: "/tour/seoul/seoulsky",
        img: seoul_spot4,
      },
      {
        name: "서대문형무소",
        id: "spot5",
        url: "/tour/seoul/sdmh",
        img: seoul_spot5,
      },
      {
        name: "서울숲",
        id: "spot6",
        url: "/tour/seoul/seouls",
        img: seoul_spot6,
      },
    ],
  },
  jl: {
    name: "경기도 여행지",
    data: [
      {
        name: "오동도",
        id: "spot1",
        url: "/tour/jl/jl1",
        img: jl_spot1,
      },
      {
        name: "보성녹차밭",
        id: "spot2",
        url: "/tour/jl/jl2",
        img: jl_spot2,
      },
      {
        name: "돌산공원",
        id: "spot3",
        url: "/tour/jl/jl3",
        img: jl_spot3,
      },
      {
        name: "순천만습지",
        id: "spot4",
        url: "/tour/jl/jl4",
        img: jl_spot4,
      },
    ],
  },
  jeju: {
    name: "제주도 여행지",
    data: [
      {
        name: "용머리해안",
        id: "spot1",
        url: "/tour/jeju/jeju1",
        img: jj_spot1,
      },
      {
        name: "우도",
        id: "spot2",
        url: "/tour/jeju/jeju2",
        img: jj_spot2,
      },
      {
        name: "카멜리아힐",
        id: "spot3",
        url: "/tour/jeju/jeju3",
        img: jj_spot3,
      },
      {
        name: "사려니숲길",
        id: "spot4",
        url: "/tour/jeju/jeju4",
        img: jj_spot4,
      },
    ],
  },
  gs: {
    name: "경상도 여행지",
    data: [
      {
        name: "지리산",
        id: "spot1",
        url: "/tour/gs/gs1",
        img: gs_spot1,
      },
      {
        name: "해인사",
        id: "spot2",
        url: "/tour/gs/gs2",
        img: gs_spot2,
      },
      {
        name: "외도보타니아",
        id: "spot3",
        url: "/tour/gs/gs3",
        img: gs_spot3,
      },
      {
        name: "우포늪",
        id: "spot4",
        url: "/tour/gs/gs4",
        img: gs_spot4,
      },
    ],
  },
};

function Tourpage() {
  const params = useParams();
  const Detail = data[params.area];
  return (
    <div>
      {Detail ? (
        <div>
          <section id="posts">
            <article className="post">
              <h3>{Detail.name}</h3>
              {Detail.data.map((d) => (
                <div id={d.id}>
                  <Link to={d.url}>
                    <img src={d.img} alt={d.name} />
                  </Link>
                  <div>{d.name} </div>
                </div>
              ))}
            </article>
          </section>
        </div>
      ) : (
        <p>존재하지 않음</p>
      )}
    </div>
  );
}

export default Tourpage;
