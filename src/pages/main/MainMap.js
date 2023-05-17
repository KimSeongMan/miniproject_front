import { useEffect } from "react";
import "../../css/MainMap.css";
function MainMap() {
  const new_script = (src) => {
    return new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = src;
      script.addEventListener("load", () => {
        resolve();
      });
      script.addEventListener("error", (e) => {
        reject(e);
      });
      document.head.appendChild(script);
    });
  };

  useEffect(() => {
    const my_script = new_script(
      "https://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=edc5fa41a7f56c0e780cd3b1aee79408"
    );

    my_script.then(() => {
      console.log("script loaded!!!");
      const kakao = window["kakao"];
      kakao.maps.load(() => {
        const mapContainer = document.getElementById("map");
        const options = {
          center: new kakao.maps.LatLng(36.4328, 128.0728),
          level: 14,
        };
        const map = new kakao.maps.Map(mapContainer, options);

        //마커설정
        const positions = [
          {
            content: "<a href=http://localhost:3000/tour/seoul>서울</a>",
            latlng: new kakao.maps.LatLng(37.560003, 126.975405),
          },
          {
            content: "<a href=http://localhost:3000/tour/gw>강원도</a>",
            latlng: new kakao.maps.LatLng(37.8621, 128.1661),
          },
          {
            content: "<a href=http://localhost:3000/tour/gg>경기도</a>",
            latlng: new kakao.maps.LatLng(37.4068, 127.498),
          },
          {
            content: "<a href=http://localhost:3000/tour/cc>충청북도</a>",
            latlng: new kakao.maps.LatLng(37.0109, 127.6767),
          },
          {
            content: "<a href=http://localhost:3000/tour/cc>충청남도</a>",
            latlng: new kakao.maps.LatLng(36.7063, 126.8066),
          },
          {
            content: "<a href=http://localhost:3000/tour/jl>전라북도</a>",
            latlng: new kakao.maps.LatLng(35.716, 127.1406),
          },
          {
            content: "<a href=http://localhost:3000/tour/jl>전라남도</a>",
            latlng: new kakao.maps.LatLng(34.8727, 126.9542),
          },
          {
            content: "<a href=http://localhost:3000/tour/gs>경상북도</a>",
            latlng: new kakao.maps.LatLng(36.2941, 128.9118),
          },
          {
            content: "<a href=http://localhost:3000/tour/gs>경상남도</a>",
            latlng: new kakao.maps.LatLng(35.4569, 128.1894),
          },
          {
            content: "<a href=http://localhost:3000/tour/jeju>제주도</a>",
            latlng: new kakao.maps.LatLng(33.3942, 126.5609),
          },
        ];
        const imageSrc =
          "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";

        for (var i = 0; i < positions.length; i++) {
          const imageSize = new kakao.maps.Size(24, 35);

          const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);
          const marker = new kakao.maps.Marker({
            map: map,
            position: positions[i].latlng,
            image: markerImage,
          });

          const infowindow = new kakao.maps.InfoWindow({
            content: positions[i].content,
          });

          kakao.maps.event.addListener(
            marker,
            "mouseover",
            makeOverListener(map, marker, infowindow)
          );
          kakao.maps.event.addListener(marker, "click");
          kakao.maps.event.addListener(
            marker,
            "mouseout",
            makeOutListener(infowindow)
          );
        }

        function makeOverListener(map, marker, infowindow) {
          return function () {
            infowindow.open(map, marker);
          };
        }
        function makeOutListener(infowindow) {
          return function () {
            infowindow.close();
          };
        }
      });
    });
  }, []);

  return (
    <div className="MainMap">
      <p></p>
      <h3>
        <b>전국지도</b>
      </h3>
      <div id="map" className="map" />
    </div>
  );
}

export default MainMap;
