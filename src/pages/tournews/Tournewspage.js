import { useNavigate } from "react-router-dom";
import "../../css/Tournewspage.css";
import pic01 from "../../images/pic01.jpg";
import pic02 from "../../images/pic02.jpg";
import pic03 from "../../images/pic03.jpg";

// 버튼에 함수를 만들어주세요
function Tournewspage() {
  const navigate = useNavigate();
  return ( 
    <div id="Tournewspage">
      <div className="tn">여행 소식지</div>
      <div className="line"></div>
      <div className="posts">
        <div className="article">
          <img className="image" src={pic01} alt="꽃" width="310px" />
          <div className="tnn">봄꽃 가득한 나들이 가고 싶은 곳</div>
          <div className="tnc">
            어디로든 떠나고 싶은 봄날, 사랑하는 사람들과
            <br />
            함께 봄을 만끽할 수 있는 아름다운 경남의 <br />
            매력적인 관광지로 떠나보자.
            <br />
            <br />
          </div>
          <div className="btn-main" onClick={() => navigate("/tournews/home")}>
            상세보기
          </div>
        </div>

        <div className="article">
          <img className="image" src={pic02} alt="한복" width="310px" />
          <div className="tnn">K-문화유산, 여행 패키지 시동</div>
          <div className="tnc">
            문화재청은 올해 중 한국 대표 문화유산의
            <br />
            관광브랜드 육성, 보편적인 문화유산
            <br />
            향유 환경 조성, 문화유산 산업 생태계 육성 등을
            <br />
            실현하여 문화유산의 사회경제적 가치를 확대한다.
          </div>
          <div className="btn-main" onClick={() => navigate("/tournews/kcul")}>
            상세보기
          </div>
        </div>

        <div className="article">
          <img className="image" src={pic03} alt="케이팝" width="310px" />
          <div className="tnn">음악에 몸을 싣는다</div>
          <div className="tnc">
            봄의 시작이다. 한껏 부풀어 오른 꽃봉오리를
            <br />
            시작으로 주변 곳곳에서 봄 향기가 물씬 나기
            <br />
            시작했다. 봄은 축제의 계절이기도 하다.
            <br />
            <br />
          </div>
          <div className="btn-main" onClick={() => navigate("/tournews/mu")}>
            상세보기
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tournewspage;
