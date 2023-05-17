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
function SDMH() {
  const [article, setArticle] = useState({
    ctg: 10,
    board_num: 5,
  });
  return (
    <div className="detail">
      <section className="posts">
        <article className="post">
          <header>
            <h2>서대문 형무소</h2>
          </header>
          <div className="spotImg">
            <a
              href="https://sphh.sscmc.or.kr/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="spot"
                src="/img/seoul_spot5.jfif"
                alt="여행지 사진"
              />
            </a>
          </div>
          <h2>주변 숙소</h2>
          <div className="hotel">
            <a
              href="http://www.shillastay.com/seodaemun/index.do"
              target="_blank"
              rel="noreferrer"
            >
              <img src="/img/hotel5-1" alt="숙소img" />
            </a>
            <div className="InfoOdd">
              <p>신라스테이 서대문</p>
              <p>
                <CiLocationOn />
                &nbsp;서울 서대문구 미근동 163
              </p>
              <p>
                <TbDeviceLandlinePhone />
                &nbsp;02-6388-9000
              </p>
            </div>
            <div className="InfoEven">
              <p>포시즌스 호텔 서울</p>
              <p>
                <CiLocationOn />
                &nbsp;서울 종로구 새문안로 97
              </p>
              <p>
                <TbDeviceLandlinePhone />
                &nbsp;02-6388-5000
              </p>
            </div>
            <a
              href="http://www.fourseasons.com/kr/seoul"
              target="_blank"
              rel="noreferrer"
            >
              <div>
                <img src="/img/hotel5-2.jfif" alt="숙소img" />
              </div>
            </a>
          </div>
          <h2>주변 맛집</h2>
          <div className="eatPlace">
            <a
              href="https://naver.me/5Gy5zhR2"
              target="_blank"
              rel="noreferrer"
            >
              <img src="/img/eatP5-1.jfif" alt="맛집img" />
            </a>
            <div className="InfoOdd">
              <p>작은스페인</p>
              <p>
                <CiLocationOn />
                &nbsp;서울 서대문구 연희로25길 37
              </p>
              <p>
                <RiRestaurant2Fill />
                &nbsp;스페인 음식
              </p>
            </div>
            <div className="InfoEven">
              <p>대성집</p>
              <p>
                <CiLocationOn />
                &nbsp;서울 종로구 사직로 5
              </p>
              <p>
                <RiRestaurant2Fill />
                &nbsp;미쉐린 가이드 서울 2023
              </p>
            </div>
            <a
              href="https://naver.me/x35iOLs6"
              target="_blank"
              rel="noreferrer"
            >
              <div>
                <img src="/img/eatP5-2" alt="맛집img" />
              </div>
            </a>
          </div>
          <h2>주변 축제&행사</h2>
          <div className="festival">
            <a
              href="http://korean.visitkorea.or.kr/kor/inut/where/festival/festival.jsp?cid=2005233"
              target="_blank"
              rel="noreferrer"
            >
              <img src="/img/fes5-1" alt="축제img" />
            </a>
            <div className="InfoOdd">
              <p>정동야행</p>
              <p>
                <AiOutlineCalendar />
                &nbsp; 2022.09.22(목) ~ 2022.09.25(일)
              </p>
              <p>
                <CiLocationOn />
                &nbsp;서울 중구 정동
              </p>
            </div>
            <div className="InfoEven">
              <p>마리오폰테의트웰브</p>
              <p>
                <AiOutlineCalendar />
                &nbsp;2023.02.08. (수) ~
              </p>
              <p>
                <CiLocationOn />
                &nbsp;종로구 경희궁1길 1 1층 마리오폰테의트웰브
              </p>
            </div>
            <a
              href="https://booking.naver.com/booking/5/bizes/837936?area=bmp"
              target="_blank"
              rel="noreferrer"
            >
              <div>
                <img src="/img/fes5-2.jfif" alt="행사img" />
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

export default SDMH;
