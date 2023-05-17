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
function NSTW() {
  const [article, setArticle] = useState({
    ctg: 10,
    board_num: 3,
  });
  return (
    <div className="detail">
      <section className="posts">
        <article className="post">
          <header>
            <h2>남산타워</h2>
          </header>
          <div className="spotImg">
            <a
              href="https://www.seoultower.co.kr/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="spot"
                src="/img/seoul_spot3.jfif"
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
              <p>몬드리안 서울 이태원</p>
              <p>
                <CiLocationOn />
                &nbsp;서울 용산구 장문로 23
              </p>
              <p>
                <TbDeviceLandlinePhone />
                &nbsp;02-2076-2000
              </p>
            </div>
            <a
              href="https://ko.sbe.com/hotels/mondrian/seoul"
              target="_blank"
              rel="noreferrer"
            >
              <div>
                <img src="/img/hotel3-2" alt="숙소img" />
              </div>
            </a>
          </div>
          <h2>주변 맛집</h2>
          <div className="eatPlace">
            <a
              href="https://naver.me/52lhhcFi"
              target="_blank"
              rel="noreferrer"
            >
              <img src="/img/eatP3-1" alt="맛집img" />
            </a>
            <div className="InfoOdd">
              <p>101번지남산돈까스</p>
              <p>
                <CiLocationOn />
                &nbsp;서울 중구 소파로 101
              </p>
              <p>
                <RiRestaurant2Fill />
                &nbsp;남산에서 먹는 추억의 왕돈까스
              </p>
            </div>
            <div className="InfoEven">
              <p>진작</p>
              <p>
                <CiLocationOn />
                &nbsp;서울 중구 수표로12길 12
              </p>
              <p>
                <RiRestaurant2Fill />
                &nbsp;대창덮밥과 후토마끼가 맛있는 혼밥가능 일식
              </p>
            </div>
            <a
              href="https://naver.me/GQ4YwVOE"
              target="_blank"
              rel="noreferrer"
            >
              <div>
                <img src="/img/eatP3-2" alt="맛집img" />
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
              <img src="/img/fes1.jfif" alt="축제img" />
            </a>
            <div className="InfoOdd">
              <p>궁중문화축전</p>
              <p>
                <AiOutlineCalendar />
                &nbsp;2023.04.29. (토) ~ 2023.05.07. (일)
              </p>
              <p>
                <CiLocationOn />
                &nbsp;경복궁, 창덕궁, 창경궁, 덕수궁
                <br /> 경희궁, 종묘, 사직단
              </p>
            </div>
            <div className="InfoEven">
              <p>왕궁 수문장 교대의식</p>
              <p>
                <AiOutlineCalendar />
                &nbsp;2023.01.01. (일) ~ 2023.12.31. (일)
              </p>
              <p>
                <CiLocationOn />
                &nbsp;덕수궁대한문
              </p>
            </div>
            <a
              href="https://search.naver.com/p/crd/rd?m=1&px=1299&py=571&sx=1299&sy=571&p=isUiKlprvTVss5qzmN0sssssscV-330619&q=%EC%99%95%EA%B6%81+%EC%88%98%EB%AC%B8%EC%9E%A5+%EA%B5%90%EB%8C%80%EC%9D%98%EC%8B%9D&ie=utf8&rev=1&ssc=tab.nx.all&f=nexearch&w=nexearch&s=Ki6WasBtXaTcfzALUtjEFw%3D%3D&time=1678104972689&abt=%5B%7B%22eid%22%3A%22PWL-AREA-EX%22%2C%22vid%22%3A%2218%22%7D%2C%7B%22eid%22%3A%22SBR1%22%2C%22vid%22%3A%22792%22%7D%5D&a=nco_x4m*F.sumlink&r=1&i=88144928_0000018623EA&u=http%3A%2F%2Fwww.royalguard.kr%2F&cr=1"
              target="_blank"
              rel="noreferrer"
            >
              <div>
                <img src="/img/fes2.jpg" alt="맛집img" />
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

export default NSTW;
