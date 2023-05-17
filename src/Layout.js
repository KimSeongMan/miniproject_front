import { Link, Outlet } from "react-router-dom";
import place1 from "./images/place1-1.jpg";
import logo from "./images/logo-mul.png";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./css/Layout.css";

const Layout = () => {
  var login_check = false;
  const login_id = window.sessionStorage.getItem("id");
  if (login_id === null) {
    login_check = false;
  } else {
    login_check = true;
  }

  const navigate = useNavigate();
  const handleLogout = () => {
    window.sessionStorage.clear(); // 세션스토리지에 저장된 속성값 모두 삭제

    navigate("/");
  };
  return (
    <div id="layout">
      <header>
        <div id="container">
          <div className="logo-main">
            <a href="/">
              <img src={logo} alt="로고" width="200px" />
            </a>
          </div>

          <div className="header-buttons">
            {login_check ? (
              <div className="header-buttons">
                <span className="login-button">
                  {login_id === "admin" ? (
                    <Link to={"/memberlist"}>
                      <span className="mypage-button">회원관리</span>
                      &nbsp;&nbsp;&nbsp;
                    </Link>
                  ) : (
                    <div></div>
                  )}
                  <button id="logout" onClick={handleLogout}>
                    로그아웃
                  </button>
                </span>
                <Link
                  to={"/mypage"}
                  state={{ id: window.sessionStorage.getItem("id") }}
                >
                  <span className="mypage-button">{login_id}</span>
                </Link>
              </div>
            ) : (
              <div className="header-buttons">
                <Link to="/login">
                  <span className="login-button">로그인</span>
                </Link>
                <Link to="/register">
                  <span className="mypage-button">회원가입</span>
                </Link>
              </div>
            )}
          </div>
        </div>
        <div className="tirpImg">
          <img src={place1} alt="여행지 사진" />
        </div>
        <div className="onBoardBar">
          <nav>
            <ul>
              <li className="dropdown">
                <Link to="/tour/seoul">여행지</Link>
                <div className="dropdown-content">
                  <Link to="/tour/seoul">서울</Link>
                  <Link to="/tour/gg">경기</Link>
                  <Link to="/tour/gw">강원</Link>
                  <Link to="/tour/cc">충청</Link>
                  <Link to="/tour/jl">전라</Link>
                  <Link to="/tour/gs">경상</Link>
                  <Link to="/tour/jeju">제주</Link>
                </div>
              </li>

              <li className="dropdown">
                <Link to="/festival">축제</Link>
              </li>
              <li className="dropdown">
                <Link to="/tournews/home">소식</Link>
              </li>
              <li className="dropdown">
                <Link to="/reviewboard">리뷰</Link>
              </li>
              <form className="search">
                <input className="search" type="text" size="6px" />
                <button className="search" type="submit">
                  검색
                </button>
              </form>
            </ul>
          </nav>
        </div>
      </header>
      <main>
        <Outlet></Outlet>
      </main>
      <div className="clear"></div>
      <footer id="container">
        <div className="footer-content">
          <span className="footsp">상호명: Team 3</span>
          <span className="footsp">고객센터: 1533-33333</span>
          <span className="footsp">대표이사: 삼사오 abc@3333mt.com</span>
          <span className="footsp">서울시 강남구 여행로 33333</span>
          <span className="footsp">사업자등록번호: 33-33-33333</span>
          <div className="footer-logo">
            <img src={logo} alt="로고" width="150px" />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
