import "../../../css/detailcomponents.css";
import { AiOutlineCalendar } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { TbDeviceLandlinePhone } from "react-icons/tb";
import { RiRestaurant2Fill } from "react-icons/ri";
import seoul_spot1 from "../../../images/seoul_spot1.jpg";
import hotel1_1 from "../../../images/hotel1-1.webp";
import hotel1_2 from "../../../images/hotel1-2.jpg";
import eatP1 from "../../../images/eatP1.jfif";
import eatP2 from "../../../images/eatP2.jfif";
import fes1 from "../../../images/fes1.jfif";
import fes2 from "../../../images/fes2.jpg";
import { useState } from "react";
import LikeButton from "../../LikeButton";
import Comments from "../../Comments";
const Bukchon = () => {
  const [article, setArticle] = useState({
    ctg: 10,
    board_num: 1,
  });
  return (
    <div className="detail">
      <section className="posts">
        <article className="post">
          <header>
            <h2>북촌한옥마을</h2>
          </header>
          <div className="spotImg">
            <a
              href="https://hanok.seoul.go.kr/front/index.do"
              target="_blank"
              rel="noreferrer"
            >
              <img className="spot" src={seoul_spot1} alt="여행지 사진" />
            </a>
          </div>
          <h2>주변 숙소</h2>
          <div className="hotel">
            <a
              href="https://search.naver.com/p/crd/rd?m=1&px=1385&py=652&sx=1385&sy=652&p=isUi9wp0J1ZssRC1id4ssssssNw-424148&q=%EB%82%98%EC%9D%B8%ED%8A%B8%EB%A6%AC+%ED%94%84%EB%A6%AC%EB%AF%B8%EC%96%B4+%ED%98%B8%ED%85%94+%EC%9D%B8%EC%82%AC%EB%8F%99&ie=utf8&rev=1&ssc=tab.nx.all&f=nexearch&w=nexearch&s=Ki6WasBtXaTcfzALUtjEFw%3D%3D&time=1678105099654&abt=%5B%7B%22eid%22%3A%22PWL-AREA-EX%22%2C%22vid%22%3A%2218%22%7D%2C%7B%22eid%22%3A%22SBR1%22%2C%22vid%22%3A%22792%22%7D%5D&a=nmb_lpb*H.site&r=&i=&u=http%3A%2F%2Fwww.ninetreehotels.com%2Fnth3%2F&cr=1"
              target="_blank"
              rel="noreferrer"
            >
              <img src={hotel1_1} alt="숙소img" />
            </a>
            <div className="InfoOdd">
              <p>나인트리 프리미어 호텔 인사</p>
              <p>
                <CiLocationOn />
                &nbsp;서울 종로구 인사동길 49
              </p>
              <p>
                <TbDeviceLandlinePhone />
                &nbsp;02-6917-3099
              </p>
            </div>
            <div className="InfoEven">
              <p>신라스테이 광화문</p>
              <p>
                <CiLocationOn />
                &nbsp;서울 종로구 수송동 51-8
              </p>
              <p>
                <TbDeviceLandlinePhone />
                &nbsp;02-6060-9000
              </p>
            </div>
            <div>
              <a
                href="http://www.shillastay.com/gwanghwamun/index.do"
                target="_blank"
                rel="noreferrer"
              >
                <img src={hotel1_2} alt="숙소img" />
              </a>
            </div>
          </div>
          <h2>주변 맛집</h2>
          <div className="eatPlace">
            <a
              href="https://naver.me/5Gy5yQZr"
              target="_blank"
              rel="noreferrer"
            >
              <img src={eatP1} alt="맛집img" />
            </a>
            <div className="InfoOdd">
              <p>만가타</p>
              <p>
                <CiLocationOn />
                &nbsp;서울 종로구 삼청로2길 40-5
              </p>
              <p>
                <RiRestaurant2Fill />
                &nbsp;한옥에서 즐기는 스웨덴 레스토랑
              </p>
            </div>
            <div className="InfoEven">
              <p>삼청동수제비</p>
              <p>
                <CiLocationOn />
                &nbsp;서울 종로구 삼청로 101-1
              </p>
              <p>
                <RiRestaurant2Fill />
                &nbsp;미쉐린 가이드 서울 2023
              </p>
            </div>
            <div>
              <a
                href="https://naver.me/Gw5EaR1A"
                target="_blank"
                rel="noreferrer"
              >
                <img src={eatP2} alt="맛집img" />
              </a>
            </div>
          </div>
          <h2>주변 축제&행사</h2>
          <div className="festival">
            <a
              href="https://search.naver.com/p/crd/rd?m=1&px=1423&py=405&sx=1423&sy=405&p=isUhwlprvxZssFp1%2B6sssssstA0-124119&q=%EA%B6%81%EC%A4%91%EB%AC%B8%ED%99%94%EC%B6%95%EC%A0%84&ie=utf8&rev=1&ssc=tab.nx.all&f=nexearch&w=nexearch&s=Ki6WasBtXaTcfzALUtjEFw%3D%3D&time=1678104774199&abt=%5B%7B%22eid%22%3A%22PWL-AREA-EX%22%2C%22vid%22%3A%2218%22%7D%2C%7B%22eid%22%3A%22SBR1%22%2C%22vid%22%3A%22792%22%7D%5D&a=nco_x4m*F.sumlink&r=1&i=88144928_00000035A508&u=https%3A%2F%2Fblog.naver.com%2Froyalculture&cr=1"
              target="_blank"
              rel="noreferrer"
            >
              <img src={fes1} alt="축제img" />
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
            <div>
              <a
                href="https://search.naver.com/p/crd/rd?m=1&px=1299&py=571&sx=1299&sy=571&p=isUiKlprvTVss5qzmN0sssssscV-330619&q=%EC%99%95%EA%B6%81+%EC%88%98%EB%AC%B8%EC%9E%A5+%EA%B5%90%EB%8C%80%EC%9D%98%EC%8B%9D&ie=utf8&rev=1&ssc=tab.nx.all&f=nexearch&w=nexearch&s=Ki6WasBtXaTcfzALUtjEFw%3D%3D&time=1678104972689&abt=%5B%7B%22eid%22%3A%22PWL-AREA-EX%22%2C%22vid%22%3A%2218%22%7D%2C%7B%22eid%22%3A%22SBR1%22%2C%22vid%22%3A%22792%22%7D%5D&a=nco_x4m*F.sumlink&r=1&i=88144928_0000018623EA&u=http%3A%2F%2Fwww.royalguard.kr%2F&cr=1"
                target="_blank"
                rel="noreferrer"
              >
                <img src={fes2} alt="맛집img" />
              </a>
            </div>
          </div>
        </article>
        <LikeButton article={article} />
        <Comments article={article} />
      </section>
    </div>
  );
};

export default Bukchon;
