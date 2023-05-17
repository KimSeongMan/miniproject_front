import "../../../css/detailcomponents.css";
import { useState } from "react";
import Heart from "react-heart";
import { AiOutlineCalendar } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { TbDeviceLandlinePhone } from "react-icons/tb";
import { RiRestaurant2Fill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import LikeButton from "../../LikeButton";
import Comments from "../../Comments";
function SeoulS() {
  const [article, setArticle] = useState({
    ctg: 10,
    board_num: 6,
  });
  return (
    <div className="detail">
      <section className="posts">
        <article className="post">
          <header>
            <h2>서울숲</h2>
          </header>
          <div className="spotImg">
            <a
              href="https://hanok.seoul.go.kr/front/index.do"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="spot"
                src="/img/seoul_spot6.jfif"
                alt="여행지 사진"
              />
            </a>
          </div>
          <h2>주변 숙소</h2>
          <div className="hotel">
            <a
              href="http://www.shilla.net/seoul/"
              target="_blank"
              rel="noreferrer"
            >
              <img src="/img/hotel3-1" alt="숙소img" />
            </a>
            <div className="InfoOdd">
              <p>서울 신라 호텔</p>
              <p>
                <CiLocationOn />
                &nbsp;서울 중구 동호로 249
              </p>
              <p>
                <TbDeviceLandlinePhone />
                &nbsp;02-2233-3131
              </p>
            </div>
            <div className="InfoEven">
              <p>호텔 리베라 서울</p>
              <p>
                <CiLocationOn />
                &nbsp;서울 강남구 영동대로 737
              </p>
              <p>
                <TbDeviceLandlinePhone />
                &nbsp;02-3438-4000
              </p>
            </div>
            <a
              href="http://www.hotelriviera.co.kr/index.asp"
              target="_blank"
              rel="noreferrer"
            >
              <div>
                <img src="/img/hotel6-2" alt="숙소img" />
              </div>
            </a>
          </div>
          <h2>주변 맛집</h2>
          <div className="eatPlace">
            <a
              href="https://naver.me/xFprbvoO"
              target="_blank"
              rel="noreferrer"
            >
              <img src="/img/eatP6-1" alt="맛집img" />
            </a>
            <div className="InfoOdd">
              <p>중화카츠 성수본점</p>
              <p>
                <CiLocationOn />
                &nbsp;서울 성동구 서울숲2길 46-10 1층
              </p>
              <p>
                <RiRestaurant2Fill />
                &nbsp;중화카츠
              </p>
            </div>
            <div className="InfoEven">
              <p>난포</p>
              <p>
                <CiLocationOn />
                &nbsp;서울 성동구 서울숲4길 18-8 지층
              </p>
              <p>
                <RiRestaurant2Fill />
                &nbsp;한식
              </p>
            </div>
            <a
              href="https://naver.me/GvkXrMsb"
              target="_blank"
              rel="noreferrer"
            >
              <div>
                <img src="/img/eatP6-2.jfif" alt="맛집img" />
              </div>
            </a>
          </div>
          <h2>주변 축제&행사</h2>
          <div className="festival">
            <a
              href="https://laneigelifeoasis.com/?utm_source=Naversmartplace&utm_medium=Naverbooking&utm_campaign=online"
              target="_blank"
              rel="noreferrer"
            >
              <img src="/img/fes6-1.jfif" alt="축제img" />
            </a>
            <div className="InfoOdd">
              <p>라네즈: 라이프 오아시스 2.0</p>
              <p>
                <AiOutlineCalendar />
                &nbsp;2023.03.22. (수) ~ 2023.04.21. (금)
              </p>
              <p>
                <CiLocationOn />
                &nbsp;서울 성동구 연무장15길 11 에스팩토리 D동
              </p>
            </div>
            <div className="InfoEven">
              <p>Unfold X 2022</p>
              <p>
                <AiOutlineCalendar />
                &nbsp;2022.11.07. (월) ~ 2022.11.19. (토)
              </p>
              <p>
                <CiLocationOn />
                &nbsp;서울 성동구 연무장15길 11
              </p>
            </div>
            <a href="http://unfoldx.org/" target="_blank" rel="noreferrer">
              <div>
                <img src="/img/fes6-2.jfif" alt="맛집img" />
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

export default SeoulS;
