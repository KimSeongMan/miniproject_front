import React from "react";
import "./css/App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/main/Home";
import FestivalPage from "./pages/festival/FestivalPage";
import Notfound from "./pages/Notfound";
import "bootstrap/dist/css/bootstrap.min.css";
import SeoulFs from "./pages/festival/components/Seoul";
import Jinhae from "./pages/festival/components/Jinhae";
import Songdo from "./pages/festival/components/Songdo";
import JejuFs from "./pages/festival/components/Jeju";
import Hamp from "./pages/festival/components/Hamp";
import Bory from "./pages/festival/components/Bory";
import Bukchon from "./pages/detail_page/seoulcomponents/Bukchon";
import Gbg from "./pages/detail_page/seoulcomponents/Gbg";
import NSTW from "./pages/detail_page/seoulcomponents/NSTW";
import Seoulsky from "./pages/detail_page/seoulcomponents/Seoulsky";
import SDMH from "./pages/detail_page/seoulcomponents/SDMH";
import SeoulS from "./pages/detail_page/seoulcomponents/SeoulS";
import Login from "./pages/Login/Login";
import Register from "./pages/Login/Register";
import Tournewspage from "./pages/tournews/Tournewspage";
import Home1 from "./pages/tournews/components/Home";
import Kcul from "./pages/tournews/components/Kcul";
import Mu from "./pages/tournews/components/Mu";
import TourDetail from "./pages/detail_page/TourDetail";
import Tourpage from "./pages/tourpage/Tourpage";

import Detailpage from "./pages/detail_page/components/Detailpage";
import Mypage from "./pages/Login/Mypage";
import Memberlist from "./pages/Login/Memberlist";
import Memberdetail from "./pages/Login/Memberdetail";

import BoardList from "./pages/reviewboard/BoardList";
import BoardDetail from "./pages/reviewboard/BoardDetail";
import BoardWrite from "./pages/reviewboard/BoardWrite";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/memberlist" element={<Memberlist />} />
        <Route path="/memberdetail" element={<Memberdetail />} />

        <Route path="/reviewboard" element={<BoardList />} />
        <Route path="/reviewdetail" element={<BoardDetail />} />
        <Route path="/reviewwrite" element={<BoardWrite />} />
        <Route path="/tournews" element={<Tournewspage />} />
        <Route path="/tournews/home" element={<Home1 />} />
        <Route path="/tournews/kcul" element={<Kcul />} />
        <Route path="/tournews/mu" element={<Mu />} />
        <Route path="/festival" element={<FestivalPage />} />
        <Route path="/festival/Seoul" exact element={<SeoulFs />} />
        <Route path="/festival/jinhae" exact element={<Jinhae />} />
        <Route path="/festival/songdo" exact element={<Songdo />} />
        <Route path="/festival/jeju" exact element={<JejuFs />} />
        <Route path="/festival/hamp" exact element={<Hamp />} />
        <Route path="/festival/bory" exact element={<Bory />} />
        <Route path="/tour/:area" element={<TourDetail />}>
          <Route path="/tour/:area" element={<Tourpage />} />
          <Route path="/tour/:area/:detail" exact element={<Detailpage />} />
          <Route path="/tour/:area/chon" exact element={<Bukchon />} />
          <Route path="/tour/:area/gbg" exact element={<Gbg />} />
          <Route path="/tour/:area/nstw" exact element={<NSTW />} />
          <Route path="/tour/:area/seoulsky" exact element={<Seoulsky />} />
          <Route path="/tour/:area/sdmh" exact element={<SDMH />} />
          <Route path="/tour/:area/seouls" exact element={<SeoulS />} />
        </Route>
        <Route path="*" element={<Notfound />} />
      </Route>
    </Routes>
  );
};

export default App;
