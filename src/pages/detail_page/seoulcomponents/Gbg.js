import { useState } from "react";
import Heart from "react-heart";
import "../../../css/detailcomponents.css";
import { AiOutlineCalendar } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { TbDeviceLandlinePhone } from "react-icons/tb";
import { RiRestaurant2Fill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import LikeButton from "../../LikeButton";
import Comments from "../../Comments";
function Gbg() {
  const [article, setArticle] = useState({
    ctg: 10,
    board_num: 2,
  });
  return (
    <div className="detail">
      <section className="posts">
        <article className="post">
          <header>
            <h2>경복궁</h2>
          </header>
          <div className="spotImg">
            <img
              className="spot"
              src="/img/seoul_spot2.jfif"
              alt="여행지 사진"
            />
          </div>
          <h2>주변 숙소</h2>
          <div className="hotel">
            <a
              href="https://www.marriott.co.kr/hotels/travel/seldp-jw-marriott-dongdaemun-square-seoul/"
              target="_blank"
              rel="noreferrer"
            >
              <img src="/img/hotel2-1" alt="숙소img" />
            </a>
            <div className="InfoOdd">
              <p>JW 메리어트 동대문 스퀘어 서울</p>
              <p>
                <CiLocationOn />
                &nbsp;서울특별시 종로구 중구 청계천로 279
              </p>
              <p>
                <TbDeviceLandlinePhone />
                &nbsp;02-2276-3000
              </p>
            </div>
            <div className="InfoEven">
              <p>오라카이 대학로 호텔</p>
              <p>
                <CiLocationOn />
                &nbsp;서울 종로구 율곡로 180
              </p>
              <p>
                <TbDeviceLandlinePhone />
                &nbsp;02-6353-7700
              </p>
            </div>
            <a
              href="http://dh.orakaihotels.com/"
              target="_blank"
              rel="noreferrer"
            >
              <div>
                <img src="/img/hotel2-2" alt="숙소img" />
              </div>
            </a>
          </div>
          <h2>주변 맛집</h2>
          <div className="eatPlace">
            <a
              href="https://naver.me/GsTCFecd"
              target="_blank"
              rel="noreferrer"
            >
              <img src="/img/eatP2-1" alt="맛집img" />
            </a>
            <div className="InfoOdd">
              <p>이화오하나</p>
              <p>
                <CiLocationOn />
                &nbsp;서울 종로구 낙산성곽서1길 13-1
              </p>
              <p>
                <RiRestaurant2Fill />
                &nbsp;이화 벽화마을 스시맛집
              </p>
            </div>
            <div className="InfoEven">
              <p>리버티 힐스테이크 하우스</p>
              <p>
                <CiLocationOn />
                &nbsp;서울 종로구 이화장1나길 17
              </p>
              <p>
                <RiRestaurant2Fill />
                &nbsp;대학로 스테이크 맛집
              </p>
            </div>
            <a
              href="https://naver.me/FcI01Wnd"
              target="_blank"
              rel="noreferrer"
            >
              <div>
                <img src="/img/eatP2-2" alt="맛집img" />
              </div>
            </a>
          </div>
          <h2>주변 축제&행사</h2>
          <div className="festival">
            <a
              href="https://naver.me/GaMqvJLb"
              target="_blank"
              rel="noreferrer"
            >
              <img src="/img/fes2-1.jfif" alt="축제img" />
            </a>
            <div className="InfoOdd">
              <p>서울빛초롱축제</p>
              <p>
                <AiOutlineCalendar />
                &nbsp;2022.12.19. (월) ~ 2023.01.24. (화)
              </p>
              <p>
                <CiLocationOn />
                &nbsp;서울 중구 다동 1
              </p>
            </div>
            <div className="InfoEven">
              <p>연등회</p>
              <p>
                <AiOutlineCalendar />
                &nbsp;2022.04.29. (금) ~ 2022.05.01. (일)
              </p>
              <p>
                <CiLocationOn />
                &nbsp;서울 종로구 우정국로 55
              </p>
            </div>
            <a
              href="https://naver.me/501mZPPL"
              target="_blank"
              rel="noreferrer"
            >
              <div>
                <img src="/img/fes2-2" alt="맛집img" />
              </div>
            </a>
          </div>
        </article>
        <LikeButton article={article} />
        <Comments article={article} />
      </section>
    </div>
  );
}

export default Gbg;
