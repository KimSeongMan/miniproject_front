import { useState } from "react";
import Heart from "react-heart";
import "../../../css/detailcomponents.css";
import { AiOutlineCalendar } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { TbDeviceLandlinePhone } from "react-icons/tb";
import { RiRestaurant2Fill } from "react-icons/ri";
import { Routes, Route, useParams } from "react-router-dom";
import LikeButton from "../../LikeButton";
import Comments from "../../Comments";
const data = {
  cc1: {
    name: "천리포수목원",
    img0: "/img/cc_spot1.jpg",
    title1: "BAYBREEZE",
    img1: "/img/cc_hotel_1_1.jfif",
    add1: "충남 태안군 소원면 만리포2길 235-9",
    tel1: "041-675-9551",
    title2: "바다풍경 펜션<",
    add2: "충남 태안군 소원면 만리포2길 235-30",
    tel2: "041-673-9003",
    img2: "/img/cc_hotel_1_2.jfif",
    img3: "/img/cc_res_1_1.jfif",
    title3: "아재밥집",
    add3: "충남 태안군 소원면 천리포1길 170-4",
    tel3: "소박하지만 정성스러운 가정식 맛집",
    title4: "호남횟집",
    add4: "충남 태안군 소원면 서해로 6 호남횟집",
    tel4: "만리포 횟집으로 유명한 횟집",
    img4: "/img/cc_res_1_2.jfif",
    img5: "/img/cc_fes_1.jpg",
    title5: "제5회 천리포수목원 목련축제",
    tel5: "2022. 4. 9. ~ 2022. 4. 24 (종료)",
    add5: "천리포수목원",
    check: false,
    ctg: 4,
    board_num: 1,
  },
  cc2: {
    name: "알프스마을",
    img0: "/img/cc_spot2.jpg",
    title1: "알프스마을 펜션",
    img1: "/img/cc_hotel_2_1.jfif",
    add1: "충남 청양군 정산면 천장호길 230",
    tel1: "041-942-0066",
    title2: "알프스 하우스",
    img2: "/img/cc_hotel_2_2.jfif",
    add2: "경남 남해군 삼동면 독일로 84-2 민박",
    tel2: "010-5338-3101",
    title3: "천장리 알프스마을",
    img3: "/img/cc_res_2_1.jfif",
    add3: "충남 청양군 정산면 천장호길 24-3",
    tel3: "알프스마을 근처 한식 맛집",
    title4: "임꺽정",
    img4: "/img/cc_res_2_2.jfif",
    add4: "충남 청양군 정산면 효자길 19-1",
    tel4: "국내산 신선한 생고기로 제공하는 고깃집",
    title5: "칠갑산얼음분수축제",
    img5: "/img/cc_fes_2.jpeg",
    add5: "알프스마을",
    tel5: "2023. 1. 1 ~ 2023. 2. 12 (종료)",
    check: false,
    ctg: 4,
    board_num: 2,
  },
  cc3: {
    name: "서산유기방가옥",
    img0: "/img/cc_spot3.jpg",
    img1: "/img/cc_hotel_3_1.jfif",
    title1: "브라운도트호텔",
    add1: "충남 서산시 안견로 284",
    tel1: "041-429-0711",
    title2: "서산 한옥체험 숙소 갈산재<",
    add2: "충남 서산시 운산면 갈산무로치길 93-31",
    tel2: "0507-1335-0609",
    img2: "/img/cc_hotel_3_2.jfif",
    img3: "/img/cc_res_3_1.jfif",
    title3: "곱부장 서산점",
    add3: "충남 서산시 호수공원3로 33 1층 곱부장",
    tel3: "서산 시내 곱창 맛집",
    title4: "해미횟집",
    add4: "충남 서산시 해미면 남문5로 12-1 1층",
    tel4: "두툼하고 신선한 회를 자랑하는 서산 횟집",
    img4: "/img/cc_res_3_2.jfif",
    img5: "/img/cc_fes_3.jfif",
    title5: "서산유기방가옥 수선화 축제",
    tel5: "매년 3~4월",
    add5: "충남 서산시 운산면 이문안길 72-10",
    check: false,
    ctg: 4,
    board_num: 3,
  },
  cc4: {
    name: "독립기념관",
    img0: "/img/cc_spot4.jpg",
    title1: "독립기념관 캠핑장",
    img1: "/img/cc_hotel_4_1.jfif",
    add1: "충남 천안시 동남구 목천읍 독립기념관로 1",
    tel1: "041-560-0711",
    title2: "숲속아침펜션",
    img2: "/img/cc_hotel_4_2.jfif",
    add2: "충남 천안시 동남구 목천읍 삼방로 77-21",
    tel2: "0507-1409-7755",
    title3: "닭삼백집",
    img3: "/img/cc_res_4_1.jfif",
    add3: "충남 천안시 동남구 목천읍 충절로 989 1동 1층",
    tel3: "국물이 끝내주는 국가대표 보양음식 닭한마리 전 문 음식점",
    title4: "병천전통순대 본점",
    img4: "/img/cc_res_4_2.jfif",
    add4: "충남 천안시 동남구 목천읍 충절로 1166",
    tel4: "정직한 식재료와 깊은 맛을 자랑하는 순대 전문점",
    title5: "K-컬쳐박람회",
    img5: "/img/cc_fes_4.jfif",
    add5: "독립기념관",
    tel5: "2023. 8. 15 ~ 2023. 8. 15",
    check: false,
    ctg: 4,
    board_num: 4,
  },
  gg1: {
    name: "아침고요수목원",
    img0: "/img/gg_spot1.jpg",
    img1: "/img/gg_hotel_1_1.jfif",
    title1: "모아이 풀빌라",
    add1: "경기 가평군 상면 수목원로164번길 29 모아이풀빌라",
    tel1: "0507-1413-8595",
    title2: "더플래츠글램핑<",
    add2: "경기 가평군 상면 수목원로 181-28",
    tel2: "0507-1333-8008",
    img2: "/img/gg_hotel_1_2.jfif",
    img3: "/img/gg_res_1_1.jfif",
    title3: "언덕마루 가평잣두부집",
    add3: "경기 가평군 상면 수목원로 248",
    tel3: "가평잣두부를 최초로 만든집",
    title4: "본가곱돌숯불닭갈비",
    add4: "경기 가평군 상면 수목원로 209 1층",
    tel4: "아침고요수목원 맛집 인근에 있는 숯불닭갈비 전문점",
    img4: "/img/gg_res_1_2.png",
    img5: "/img/gg_fes_1.jpg",
    title5: "아침고요수목원 봄나들이 봄꽃축제",
    tel5: "2022. 4. 16. ~ 2022. 5. 22.(종료)",
    add5: "아침고요수목원 내",
    check: false,
    ctg: 5,
    board_num: 1,
  },
  gg2: {
    name: "화담숲",
    img0: "/img/gg_spot2.jpg",
    img1: "/img/gg_hotel_2_1.jfif",
    title1: "리디자인 호텔",
    add1: "경기 용인시 기흥구 동백3로11번길 43 리디자인호텔",
    tel1: "031-284-3435",
    title2: "더숨포레스트 호텔<",
    add2: "경기 용인시 처인구 포곡읍 성산로 633",
    tel2: "1522-2777",
    img2: "/img/gg_hotel_2_2.jfif",
    img3: "/img/gg_res_2_1.jfif",
    title3: "곤지암 숯불고기",
    add3: "경기 광주시 도척면 독고개길302번길 49 1층",
    tel3: "곤지암리조트와 화담숲에서 100미터 앞이며 리 조트에서 도보로 1분거리의 유일한 식당",
    title4: "담하",
    add4: "경기 광주시 도척면 도척윗로 278 곤지암리조트 빌리지센터",
    tel4: "곤지암리조트 내 불고기 전문 한식당",
    img4: "/img/gg_res_2_2.jfif",
    img5: "/img/gg_fes_2.jpg",
    title5: "화담숲 봄 수선화 축제",
    tel5: "4월 개최 예정",
    add5: "화담숲 내",
    check: false,
    ctg: 5,
    board_num: 2,
  },
  gg3: {
    name: "수원화성",
    img0: "/img/gg_spot3.jpg",
    img1: "/img/gg_hotel_3_1.jfif",
    title1: "코트야드 메리어트 수원",
    add1: "경기 수원시 영통구 광교호수공원로 320",
    tel1: "031-267-5600",
    title2: "노보텔 앰배서더 수원",
    add2: "경기 수원시 팔달구 덕영대로 902",
    tel2: "031-547-6600",
    img2: "/img/gg_hotel_3_2.jfif",
    img3: "/img/gg_res_3_1.jfif",
    title3: "냅다청양집 호매실점",
    add3: "경기 수원시 권선구 금곡로118번길 24 리치빌딩 1층",
    tel3: "밑반찬이 풍성한 냉동 삼겹살 전문점",
    title4: "행궁정찬",
    add4: "경기 수원시 영통구 광교중앙로 140 수원컨벤션센터3층 300호",
    tel4: "수원 화성의 옛스러움과 전통을 담은 한식정찬 식당",
    img4: "/img/gg_res_3_2.jfif",
    img5: "/img/gg_fes_3.jpg",
    title5: "수원화성 미디어아트쇼",
    tel5: "2022. 9. 23. ~ 2022. 10. 23.(종료)",
    add5: "수원화성 화홍문, 남수문 및 수원천 일원",
    check: false,
    ctg: 5,
    board_num: 3,
  },
  gg4: {
    name: "탄도항",
    img0: "/img/gg_spot4.jpg",
    img1: "/img/gg_hotel_4_1.jfif",
    title1: "탄도항 노을캠핑장",
    add1: "경기 안산시 단원구 대부황금로 17-2",
    tel1: "02-856-8188",
    title2: "하루펜션",
    add2: "경기 안산시 단원구 대부황금로 37",
    tel2: "1577-4374",
    img2: "/img/gg_hotel_4_2.jfif",
    img3: "/img/gg_res_4_1.jfif",
    title3: "새싹바지락칼국수",
    add3: "경기 안산시 단원구 대부황금로 102",
    tel3: "대부도에 위치한 365아고라시티 복합레저가 공존하는 칼국수집",
    title4: "해금강횟집",
    add4: "경기 화성시 서신면 전곡항로14번길 1-24",
    tel4: "해상 케이블가 근처 2분 거리 횟집",
    img4: "/img/gg_res_4_2.jfif",
    img5: "/img/gg_fes_4.jpg",
    title5: "탄도항 갯벌 생태탐험 행사",
    tel5: "2022. 5 ~ 2022. 10 (종료)",
    add5: "경기 안산시 단원구 선감동 717-5",
    check: false,
    ctg: 5,
    board_num: 4,
  },
  gs1: {
    name: "지리산",
    img0: "/img/gs_spot1.jpg",
    img1: "/img/gs_hotel_1_1.jfif",
    title1: "아름다운산골",
    add1: "경남 하동군 화개면 범왕길 198 아름다운산골",
    tel1: "010-6273-7743",
    title2: "켄싱턴리조트 지리산하동점",
    add2: "경남 하동군 화개면 쌍계로 532-6",
    tel2: "055-880-8000",
    img2: "/img/gs_hotel_1_2.jfif",
    img3: "/img/gs_res_1_1.jfif",
    title3: "삼포가든",
    add3: "전북 남원시 요천로 2264",
    tel3: "50년의 전통을 자랑하는 장어구이 맛집",
    title4: "육모정",
    add4: "시원한 국물이 일품인 갈비탕 맛집",
    tel4: "전북 남원시 숲정이1길 4",
    img4: "/img/gs_res_1_2.jfif",
    img5: "/img/gs_fes_1.jpg",
    title5: "지리산 피아골 단풍축제",
    tel5: "2022. 10. 29 ~ 2022. 10. 30 (종료)",
    add5: "전남 구례군 토지면 피아골로 774",
    check: false,
    ctg: 6,
    board_num: 1,
  },
  gs2: {
    name: "해인사",
    img0: "/img/gs_spot2.jfif",
    img1: "/img/gs_hotel_2_1.jfif",
    title1: "달의 정원",
    add1: "경남 합천군 가야면 치인1길 13-31 달의정원",
    tel1: "055-934-0107",
    title2: "해인관광호텔",
    add2: "경남 합천군 가야면 치인1길 13-45",
    tel2: "055-933-2000",
    img2: "/img/gs_hotel_2_2.jfif",
    img3: "/img/gs_res_2_1.jfif",
    title3: "해인사 뚝배기가든식당",
    add3: "경남 합천군 가야면 치인1길 13-11",
    tel3: "자연의 맛과 친환경 반찬을 제공하는 한정식집",
    title4: "향토산채본가식당",
    add4: "경남 합천군 가야면 치인1길 24-10",
    tel4: "50년 전동 향토산채본가식당",
    img4: "/img/gs_res_2_2.jfif",
    img5: "/img/gs_fes_2.jfif",
    title5: "제 62회 고려팔만대장경의날",
    tel5: "2023. 4. 8 ~ 2023. 4. 9",
    add5: "경남 합천군 가야면 해인사길 122",
    check: false,
    ctg: 6,
    board_num: 2,
  },
  gs3: {
    name: "외도보타니아",
    img0: "/img/gs_spot3.jpg",
    img1: "/img/gs_hotel_3_1.jfif",
    title1: "소노캄 거제",
    add1: "경남 거제시 일운면 거제대로 2660",
    tel1: "1588-4888",
    title2: "호텔 상상",
    add2: "경남 거제시 일운면 거제대로 2752",
    tel2: "0507-1474-5252",
    img2: "/img/gs_hotel_3_2.jfif",
    img3: "/img/gs_res_3_1.jfif",
    title3: "웅아물회",
    add3: "경남 거제시 일운면 지세포해안로 171",
    tel3: "055-682-6688",
    title4: "박정현게장백반",
    add4: "경남 거제시 장승포로 2",
    tel4: "055-681-6222",
    img4: "/img/gs_res_3_2.jfif",
    img5: "/img/gs_fes_3.jfif",
    title5: "조세민 초대전 사이의,산보",
    tel5: "23.03.15 ~ 23.04.05",
    add5: "거제문화예술회관 전시실",
    check: false,
    ctg: 6,
    board_num: 3,
  },

  gs4: {
    name: "우포늪",
    img0: "/img/gs_spot4.jpg",
    img1: "/img/gs_hotel_4_1.jfif",
    title1: "우포5마일",
    add1: "경남 창녕군 이방면 우포2로 213-7",
    tel1: "0507-1310-3560",
    title2: "우포고요펜션",
    add2: "경남 창녕군 이방면 노동길 32",
    tel2: "0507-1408-3955",
    img2: "/img/gs_hotel_4_2.jfif",
    img3: "/img/gs_res_4_1.jfif",
    title3: "우포랑따오기랑",
    add3: "경남 창녕군 유어면 우포늪길 191",
    tel3: "고동정식 맛집",
    title4: "식당오늘",
    add4: "경남 창녕군 유어면 우포늪길 137",
    tel4: "창녕 우포늪 카레 맛집",
    img4: "/img/gs_res_4_2.jfif",
    img5: "/img/gs_fes_4.jpg",
    title5: "창녕 낙동강 유채 축제",
    tel5: "2023. 4. 13~ 4. 16",
    add5: "남지읍 낙동강 유채단지(남지유채단지) 및 남지체육공원 일원",
    check: false,
    ctg: 6,
    board_num: 4,
  },
  gw1: {
    name: "대관령 양때목장",
    img0: "/img/gw_spot1.jfif",
    img1: "/img/gw_hotel_1_1.jfif",
    title1: "대관령 양떼마을 펜션 ",
    add1: "강원 평창군 대관령면 대관령마루길 365-8",
    tel1: "0507-1322-1691",
    title2: "대관령 목장길 펜션",
    add2: "강원 평창군 대관령면 대관령마루길 365-34 23호",
    tel2: "010-9793-0968",
    img2: "/img/gw_hotel_1_2.jfif",
    img3: "/img/gw_res_1_1.jfif",
    title3: "가시머리 식당",
    add3: "강원 평창군 대관령면 대관령마루길 369",
    tel3: "막국수로 유명한 양떼목장 근처 식당",
    title4: "금강숯불닭갈비 메밀막국수",
    add4: "강원 평창군 대관령면 강변길 87",
    tel4: "참숯향이 압권인 숯불 닭갈비 전문점",
    img4: "/img/gw_res_1_2.jfif",
    img5: "/img/gw_fes_1.jpg",
    title5: "대관령눈꽃축제",
    tel5: "2023. 1. 20. ~ 2023. 1. 29.(종료)",
    add5: "대관령면 송천일원",
    check: false,
    ctg: 7,
    board_num: 1,
  },
  gw2: {
    name: "남이섬",
    img0: "/img/gw_spot2.jfif",
    img1: "/img/gw_hotel_2_1.png",
    title1: "남이섬 호텔 정관루",
    add1: "강원 춘천시 남산면 남이섬길 1",
    tel1: "031-580-8000",
    title2: "별빛나루",
    add2: "강원 춘천시 남산면 방하로 800",
    tel2: "010-7941-3650",
    img2: "/img/gw_hotel_2_2.jfif",
    img3: "/img/gw_res_2_1.jfif",
    title3: "해광은갈치",
    add3: "경기 가평군 가평읍 장터2길 12 114호",
    tel3: "제주산 은갈치만 취급하는 뼈없는 순살 갈치 전문점",
    title4: "힐링닭갈비 가평본점",
    add4: "경기 가평군 가평읍 북한강변로 1083",
    tel4: "특제 양념이 맛있는 닭갈비 맛집",
    img4: "/img/gw_res_2_2.jfif",
    img5: "/img/gw_fes_2.jpg",
    title5: "남이섬 벗(友)꽃놀자",
    tel5: "2022. 4. 9. ~ 2022. 5. 1.(종료)",
    add5: "남이섬 왕벚나무길",
    check: false,
    ctg: 7,
    board_num: 2,
  },
  gw3: {
    name: "속삭이는 자작나무숲",
    img0: "/img/gw_spot3.jfif",
    img1: "/img/gw_hotel_3_1.jfif",
    title1: "인제 캠핑타운",
    add1: "강원 인제군 인제읍 한석산로 1423-15",
    tel1: "010-6251-3826",
    title2: "인제 스피디움",
    add2: "강원 인제군 기린면 상하답로 130",
    tel2: "1644-3366",
    img2: "/img/gw_hotel_3_2.jfif",
    img3: "/img/gw_res_3_1.jfif",
    title3: "산마을",
    add3: "강원 인제군 북면 미시령로 1205-20",
    tel3: "100년 넘게 용대리에서만 살던 토박이 가족이 운영하는 인제맛집",
    title4: "평화막국수",
    add4: "강원 인제군 북면 미시령로 1146",
    tel4: "인제군 용대리에서 2대째 약 50년동안 막국수와 한식을 대접하고 있는 음식점",
    img4: "/img/gw_res_3_2.jfif",
    img5: "/img/gw_fes_3.jfif",
    title5: "인제 빙어축제",
    tel5: "2023. 1. 20 ~ 2023. 1. 29(종료)",
    add5: "인제군 남면 빙어호 일원",
    check: false,
    ctg: 7,
    board_num: 3,
  },
  gw4: {
    name: "정동진",
    img0: "/img/gw_spot4.jfif",
    img1: "/img/gw_hotel_4_1.jfif",
    title1: "하슬라아트월드뮤지엄호텔",
    add1: "강원 강릉시 강동면 정동진리 산33-1",
    tel1: "0507-1308-9414",
    title2: "썬크루즈 호텔&리조트",
    add2: "강원 강릉시 강동면 헌화로 950-39",
    tel2: "033-610-7000",
    img2: "/img/gw_hotel_4_2.jfif",
    img3: "/img/gw_res_4_1.jfif",
    title3: "정동진초당순두부 정동진 본점",
    add3: "강원 강릉시 강동면 헌화로 1094",
    tel3: "신선한 재료와 정동진 현지인 30년운영 맛집 정동진초당순두부",
    title4: "바다마을횟집",
    add4: "강원 강릉시 강동면 정동등명길 23",
    tel4: "정동진 대게, 회 전문점",
    img4: "/img/gg_res_1_2.jfif",
    img5: "/img/gg_fes_1.jpg",
    title5: "정동진 해맞이 축제",
    tel5: "2022. 12. 31. ~ 2023. 1. 1.(종료)",
    add5: "정동진 모래시계 공원",
    check: false,
    ctg: 7,
    board_num: 4,
  },
  jeju1: {
    name: "용머리 해안",
    img0: "/img/jj_spot1.jpeg",
    img1: "/img/jj_hotel_1_1.jfif",
    title1: "제주 신라호텔",
    add1: "제주 서귀포 중문관광로72번길 75",
    tel1: "064-735-5114",
    title2: "해비치호텔앤드리조트",
    add2: "제주 서귀포 표선면 민속해안로 537",
    tel2: "064-780-8100",
    img2: "/img/jj_hotel_1_2.jfif",
    img3: "/img/jj_res_1_1.jpg",
    title3: "달팽이식당",
    add3: "제주특별자치도 서귀포시 일주서로 1322-3",
    tel3: "농사지은 콩으로 만든 청국장과 석쇠불고기 한상",
    title4: "돗통",
    add4: "제주특별자치도 서귀포시 사계북로41번길 189",
    tel4: "장작불 솥뚜껑에 구워먹는 흑돼지 맛집",
    img4: "/img/jj_res_1_2.jpg",
    img5: "/img/jj_fes_1_1.jpg",
    title5: "휴애리 유채꽃 축제",
    tel5: "2023. 1. 1.~ 2023. 4. 15.",
    add5: "제주도 서귀포시 신례동로 256 휴애리",
    check: true,
    img6: "/img/jj_fes_1_2.jpg",
    title6: "마노르블랑 봄에 꽃향기축제",
    tel6: "2023. 3. 5.~ 2023. 4. 16.",
    add6: "제주도 서귀포시 안덕면 일주서로2100번길 46",
    ctg: 8,
    board_num: 1,
  },
  jeju2: {
    name: "우도",
    img0: "/img/jj_spot2.jpg",
    img1: "/img/jj_hotel_2_1.jfif",
    title1: "우도다올펜션",
    add1: "제주 제주시 우도면 우도해안길 288",
    tel1: "0507-1438-8804",
    title2: "우도피아 펜션",
    add2: "제주 제주시 우도면 영일진사길 51-40 우도피아펜션",
    tel2: "064-784-9621",
    img2: "/img/jj_hotel_2_2.jfif",
    img3: "/img/jj_res_2_1.jfif",
    title3: "봉끄랑",
    add3: "제주시 우도면 우도해안길 144",
    tel3: "야외테라스 경치와 이색적인 데이트 공간을 자랑하는 우도맛집",
    title4: "우도해녀식당",
    add4: "제주시 우도면 우도해안길 440 우도해녀식당",
    tel4: "우도 해녀가 갓 잡은 싱싱한 해산물을 이용해 요리하는 식당",
    img4: "/img/jj_res_2_2.jfif",
    img5: "/img/jj_fes_2.jpg",
    title5: "우도소라축제",
    tel5: "2023. 4. 14 ~ 2023. 4. 16",
    add5: "천진항 광장(메인 무대), 우도면 일원",
    check: false,
    ctg: 8,
    board_num: 2,
  },
  jeju3: {
    name: "카멜리아힐",
    img0: "/img/jj_spot3.jfif",
    img1: "/img/jj_hotel_3_1.jfif",
    title1: "디 아넥스 호텔",
    add1: "제주 서귀포시 안덕면 산록남로762번길 71",
    tel1: "0507-1329-6005",
    title2: "루체빌",
    add2: "제주 서귀포시 안덕면 산록남로 786 루체빌",
    tel2: "064-805-0114",
    img2: "/img/jj_hotel_3_2.jfif",
    img3: "/img/jj_res_3_1.jpg",
    title3: "동광메밀짬뽕",
    add3: "제주특별자치도 서귀포시 신화역사로 581",
    tel3: "밀가루 대신 메밀로 요리하는 짬뽕 전문점",
    title4: "봉순이네흑돼지",
    add4: "제주특별자치도 서귀포시 대정읍 영어도시로 64",
    tel4: "나영석 PD의 단골 음식점으로 유명한 흑돼지 전문점",
    img4: "/img/jj_res_3_2.jpg",
    img5: "/img/jj_fes_3_1.jpg",
    title5: "제주 다이노스 어라이브",
    tel5: "2022. 8. 10 ~ 2023. 8. 9",
    add5: "제주특별자치도 서귀포시 안덕면녹차분재로 218",
    check: true,
    img6: "/img/jj_fes_3_2.jpg",
    title6: "JSW SPRING BREEZE CONCERT",
    tel6: "2023. 3. 18 ~ 2023. 4. 22",
    add6: "제주신화월드 신화테마파크 46",
    ctg: 8,
    board_num: 3,
  },
  jeju4: {
    name: "사려니숲길",
    img0: "/img/jj_spot4.jpg",
    img1: "/img/jj_hotel_4_1.jpg",
    title1: "바다파파",
    add1: "제주도 제주시 조천읍 신촌10길 7",
    tel1: "064-752-3551",
    title2: "길섶나그네펜션",
    add2: "제주도 제주시 조천읍 미래로 241",
    tel2: "064-782-5971",
    img2: "/img/jj_hotel_4_2.gif",
    img3: "/img/jj_res_4_1.jpg",
    title3: "교래손칼국수(원조교래손칼국수)",
    add3: "제주도 제주시 조천읍 비자림로 645",
    tel3: "제주의 느낌 가득한 손칼국수집",
    title4: "손맛촌",
    add4: "제주도 제주시 조천읍 비자림로 661",
    tel4: "제주도 통갈치구이와 갈치조림 전문점",
    img4: "/img/jj_res_4_2.jpg",
    img5: "/img/jj_fes_4.jpg",
    title5: "사려니숲 에코힐링 체험",
    tel5: "2022.06.09. ~ 2022.06.12. (종료)",
    add5: "제주도 서귀포시 표선면 남조로 1487-73",
    check: false,
    ctg: 8,
    board_num: 4,
  },
  jl1: {
    name: "오동도",
    img0: "/img/jl_spot1.jpg",
    img1: "/img/jl_hotel_1_1.jfif",
    title1: "신라스테이 여수",
    add1: "전남 여수시 수정3길 8",
    tel1: "061-924-5300",
    title2: "여수 베네치아 호텔&리조트",
    add2: "전남 여수시 오동도로 61-13",
    tel2: "061-664-0001",
    img2: "/img/jl_hotel_1_2.jfif",
    img3: "/img/jl_res_1_1.jfif",
    title3: "낭만포차 별밤포차",
    add3: "전남 여수시 하멜로 102",
    tel3: "여수낭만포차거리에 위치한 인기 포차",
    title4: "카멜리아 회센터",
    add4: "전남 여수시 오동도로 24",
    tel4: "오동도 내에 있는 유일한 횟집",
    img4: "/img/jl_res_1_2.jfif",
    img5: "/img/jl_fes_1.jpg",
    title5: "글로컬전시 '연옥에 핀 꽃'",
    tel5: "2023.02.24 ~ 2023.10.16",
    add5: "엑스포아트갤러리(여수시 박람회길 1 한국관 3층)",
    check: false,
    ctg: 9,
    board_num: 1,
  },
  jl2: {
    name: "보성녹차밭",
    img0: "/img/jl_spot2.jpeg",
    img1: "/img/jl_hotel_2_1.jfif",
    title1: "보성다비치콘도",
    add1: "전남 보성군 회천면 충의로 36",
    tel1: "061-850-1100",
    title2: "보성여관",
    add2: "전남 보성군 벌교읍 태백산맥길 19",
    tel2: "061-858-7528",
    img2: "/img/jl_hotel_2_2.jfif",
    img3: "/img/jl_res_2_1.jfif",
    title3: "특미관",
    add3: "전남 보성군 보성읍 봉화로 53 녹차골향토시장내",
    tel3: "보성 녹차 요리의 원조이며 떡갈비 전문점",
    title4: "장도웰빙꼬막정식",
    add4: "전남 보성군 벌교읍 시장1길 8-8",
    tel4: "착한 가격과 푸짐한 재료의 꼬막 정식 맛집",
    img4: "/img/jl_res_2_2.jfif",
    img5: "/img/jl_fes_2.jfif",
    title5: "보성 세계차 엑스포",
    tel5: "2023.04.29 ~ 2023.05.07",
    add5: "보성군 일원(한국차문화공원 등)",
    check: false,
    ctg: 9,
    board_num: 2,
  },
  jl3: {
    name: "돌산공원",
    img0: "/img/jl_spot3.jfif",
    img1: "/img/jl_hotel_3_1.jfif",
    title1: "소노캄 여수",
    add1: "전남 여수시 오동도로 111",
    tel1: "061-660-5800",
    title2: "라마다프라자 여수",
    add2: "전남 여수시 돌산읍 강남로 11",
    tel2: "061-642-0000",
    img2: "/img/jl_hotel_3_2.jfif",
    img3: "/img/jl_res_3_1.png",
    title3: "거북이식당",
    add3: "전남 여수시 국포1로 26",
    tel3: "1박2일여수 여행 갔을 때 다녀온 게장 전문점",
    title4: "좌수영바게트버거",
    add4: "전남 여수시 동문로 10 1층",
    tel4: "여수 바게트버거의 원조 맛집",
    img4: "/img/jl_res_3_2.jfif",
    img5: "/img/jl_fes_3.jfif",
    title5: "여수불꽃축제",
    tel5: "2022. 10. 20 (종료)",
    add5: "장군도 해상",
    check: false,
    ctg: 9,
    board_num: 3,
  },
  jl4: {
    name: "순천만습지",
    img0: "/img/jl_spot4.jpg",
    img1: "/img/jl_hotel_4_1.jfif",
    title1: "더스카이 풀빌라",
    add1: "전남 순천시 순천만길 686-12",
    tel1: "010-6203-6629",
    title2: "순천만 풍경 펜션",
    add2: "전남 순천시 순천만길 696",
    tel2: "0507-1435-2289",
    img2: "/img/jl_hotel_4_2.jfif",
    img3: "/img/jl_res_4_1.jfif",
    title3: "순천만 전라도밥상",
    add3: "전남 순천시 순천만길 496-1",
    tel3: "남도식으로 차려지는 푸짐한 상차림이 으뜸인 식당",
    title4: "순천만가든",
    add4: "전남 순천시 순천만길 576",
    tel4: "맛있는녀석들에서 소개한 순천 꼬막정식 맛집",
    img4: "/img/jl_res_4_2.jfif",
    img5: "/img/jl_fes_4.jfif",
    title5: "흑두루미의 날 기념 행사",
    tel5: "2022. 2. 26~ 3. 1 (종료)",
    add5: "순천만국제습지센터, 순천만습지 일원",
    check: false,
    ctg: 9,
    board_num: 4,
  },
};

const Detailpage = () => {
  const params = useParams();
  const Detail = data[params.detail];
  return (
    <div className="detail">
      {Detail ? (
        <div>
          <section className="posts">
            <article className="post">
              <header>
                <h2>{Detail.name}</h2>
              </header>
              <div className="spotImg">
                <img className="spot" src={Detail.img0} alt="여행지 사진" />
              </div>
              <h2>주변 숙소</h2>
              <div className="hotel">
                <img src={Detail.img1} alt="숙소img" />
                <div className="InfoOdd">
                  <p>{Detail.title1}</p>
                  <p>
                    <CiLocationOn />
                    &nbsp;{Detail.add1}
                  </p>
                  <p>
                    <TbDeviceLandlinePhone />
                    &nbsp;{Detail.tel1}
                  </p>
                </div>
                <div className="InfoEven">
                  <p>{Detail.title2}</p>
                  <p>
                    <CiLocationOn />
                    &nbsp;{Detail.add2}
                  </p>
                  <p>
                    <TbDeviceLandlinePhone />
                    &nbsp;{Detail.tel2}
                  </p>
                </div>
                <div>
                  <img src={Detail.img2} alt="숙소img" />
                </div>
              </div>
              <h2>주변 맛집</h2>
              <div className="eatPlace">
                <img src={Detail.img3} alt="맛집img" />
                <div className="InfoOdd">
                  <p>{Detail.title3}</p>
                  <p>
                    <CiLocationOn />
                    &nbsp;{Detail.add3}
                  </p>
                  <p>
                    <RiRestaurant2Fill />
                    &nbsp;{Detail.tel3}
                  </p>
                </div>
                <div className="InfoEven">
                  <p>{Detail.title4}</p>
                  <p>
                    <CiLocationOn />
                    &nbsp;{Detail.add4}
                  </p>
                  <p>
                    <RiRestaurant2Fill />
                    &nbsp;{Detail.tel4}
                  </p>
                </div>
                <div>
                  <img src={Detail.img4} alt="맛집img" />
                </div>
              </div>
              <h2>주변 축제&행사</h2>
              <div className="festival">
                <img src={Detail.img5} alt="축제img" />
                <div className="InfoOdd">
                  <p>{Detail.title5}</p>
                  <p>
                    <AiOutlineCalendar />
                    &nbsp;{Detail.tel5}
                  </p>
                  <p>
                    <CiLocationOn />
                    &nbsp;{Detail.add5}
                  </p>
                </div>
                {Detail.check ? (
                  <div>
                    <div className="InfoEven">
                      <p>{Detail.title6}</p>
                      <p>
                        <AiOutlineCalendar />
                        &nbsp; {Detail.tel6}
                      </p>
                      <p>
                        <CiLocationOn />
                        &nbsp;{Detail.add6}
                      </p>
                    </div>
                    <div>
                      <img src={Detail.img6} alt="축제img" />{" "}
                    </div>
                  </div>
                ) : (
                  <div></div>
                )}
              </div>
            </article>
            <LikeButton article={Detail} />
            <Comments article={Detail} />
          </section>
        </div>
      ) : (
        <p>존재하지 않음</p>
      )}
    </div>
  );
};

export default Detailpage;
