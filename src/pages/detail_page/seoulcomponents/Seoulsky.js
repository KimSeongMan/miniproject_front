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
function Seoulsky() {
  const [article, setArticle] = useState({
    ctg: 10,
    board_num: 4,
  });
  return (
    <div className="detail">
      <section className="posts">
        <article className="post">
          <header>
            <h2>서울스카이</h2>
          </header>
          <div className="spotImg">
            <a
              href="https://hanok.seoul.go.kr/front/index.do"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="spot"
                src="/img/seoul_spot4.jfif"
                alt="여행지 사진"
              />
            </a>
          </div>
          <h2>주변 숙소</h2>
          <div className="hotel">
            <a
              href="https://www.lottehotel.com/seoul-signiel/ko.html"
              target="_blank"
              rel="noreferrer"
            >
              <img src="/img/hotel4-1" alt="숙소img" />
            </a>
            <div className="InfoOdd">
              <p>시그니엘 서울</p>
              <p>
                <CiLocationOn />
                &nbsp;서울 송파구 올림픽로 300
              </p>
              <p>
                <TbDeviceLandlinePhone />
                &nbsp;02-3213-1000
              </p>
            </div>
            <div className="InfoEven">
              <p>소피텔 엠버서더 서울</p>
              <p>
                <CiLocationOn />
                &nbsp;서울 송파구 잠실로 209
              </p>
              <p>
                <TbDeviceLandlinePhone />
                &nbsp;02-2092-6000
              </p>
            </div>
            <a
              href="https://www.sofitel-seoul.com/"
              target="_blank"
              rel="noreferrer"
            >
              <div>
                <img src="/img/hotel4-2" alt="숙소img" />
              </div>
            </a>
          </div>
          <h2>주변 맛집</h2>
          <div className="eatPlace">
            <a
              href="https://naver.me/G0fJ8b7E"
              target="_blank"
              rel="noreferrer"
            >
              <img src="/img/eatP4-1" alt="맛집img" />
            </a>
            <div className="InfoOdd">
              <p>비채나</p>
              <p>
                <CiLocationOn />
                &nbsp;서울 송파구 올림픽로 300 롯데월드타워 81층
              </p>
              <p>
                <RiRestaurant2Fill />
                &nbsp;미쉐린 가이드 서울 2023
              </p>
            </div>
            <div className="InfoEven">
              <p>STAY</p>
              <p>
                <CiLocationOn />
                &nbsp;서울 송파구 올림픽로 300 롯데월드타워 81층
              </p>
              <p>
                <RiRestaurant2Fill />
                &nbsp;미쉐린 가이드 서울 2023
              </p>
            </div>
            <a
              href="https://naver.me/5h3EZUg0"
              target="_blank"
              rel="noreferrer"
            >
              <div>
                <img src="/img/eatP4-2" alt="맛집img" />
              </div>
            </a>
          </div>
          <h2>주변 축제&행사</h2>
          <div className="festival">
            <a
              href="https://search.naver.com/p/crd/rd?m=1&px=1423&py=405&sx=1423&sy=405&p=isUhwlprvxZssFp1%2B6sssssstA0-124119&q=%EA%B6%81%EC%A4%91%EB%AC%B8%ED%99%94%EC%B6%95%EC%A0%84&ie=utf8&rev=1&ssc=tab.nx.all&f=nexearch&w=nexearch&s=Ki6WasBtXaTcfzALUtjEFw%3D%3D&time=1678104774199&abt=%5B%7B%22eid%22%3A%22PWL-AREA-EX%22%2C%22vid%22%3A%2218%22%7D%2C%7B%22eid%22%3A%22SBR1%22%2C%22vid%22%3A%22792%22%7D%5D&a=nco_x4m*F.sumlink&r=1&i=88144928_00000035A508&u=https%3A%2F%2Fblog.naver.com%2Froyalculture&cr=1"
              target="_blank"
              rel="noreferrer"
            >
              <img src="/img/fes4-1" alt="축제img" />
            </a>
            <div className="InfoOdd">
              <p>롯데월드 마스크페스티벌</p>
              <p>
                <AiOutlineCalendar />
                &nbsp;상시
              </p>
              <p>
                <CiLocationOn />
                &nbsp;서울 송파구 올림픽로 240 롯데월드
              </p>
            </div>
            <div className="InfoEven">
              <p>석촌호수단풍축제</p>
              <p>
                <AiOutlineCalendar />
                &nbsp;10월 말 ~ 11월 초
              </p>
              <p>
                <CiLocationOn />
                &nbsp;서울 송파구 잠실로 180 송파관광정보센터
              </p>
            </div>
            <a
              href="https://search.naver.com/p/crd/rd?m=1&px=1299&py=571&sx=1299&sy=571&p=isUiKlprvTVss5qzmN0sssssscV-330619&q=%EC%99%95%EA%B6%81+%EC%88%98%EB%AC%B8%EC%9E%A5+%EA%B5%90%EB%8C%80%EC%9D%98%EC%8B%9D&ie=utf8&rev=1&ssc=tab.nx.all&f=nexearch&w=nexearch&s=Ki6WasBtXaTcfzALUtjEFw%3D%3D&time=1678104972689&abt=%5B%7B%22eid%22%3A%22PWL-AREA-EX%22%2C%22vid%22%3A%2218%22%7D%2C%7B%22eid%22%3A%22SBR1%22%2C%22vid%22%3A%22792%22%7D%5D&a=nco_x4m*F.sumlink&r=1&i=88144928_0000018623EA&u=http%3A%2F%2Fwww.royalguard.kr%2F&cr=1"
              target="_blank"
              rel="noreferrer"
            >
              <div>
                <img src="/img/fes4-2" alt="축제img" />
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

export default Seoulsky;
