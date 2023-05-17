import React, { Component } from "react";
import { Link } from "react-router-dom";
import { useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../../css/Login.css";
const Login = () => {
  const idRef = useRef();
  const pwRef = useRef();

  const navigate = useNavigate();

  const handleLogin = () => {
    if (idRef.current.value === "" || idRef.current.value === undefined) {
      alert("아이디를 입력하세요!!!");
      idRef.current.focus();
      return false;
    }
    if (pwRef.current.value === "" || pwRef.current.value === undefined) {
      alert("패스워드를 입력하세요!!!");
      pwRef.current.focus();
      return false;
    }

    axios
      .post("/login", {
        id: idRef.current.value,
        pw: pwRef.current.value,
      })
      .then((res) => {
        console.log("handleLogin =>", res);
        if (res.data === 1) {
          window.sessionStorage.setItem("id", idRef.current.value);
          navigate("/");
        } else {
          navigate("/login");
        }
      })
      .catch((e) => {
        console.error(e);
      });
  };

  return (
    <div className="container">
      <div className="login">
        <form>
          <h2>Login</h2>
          <div className="username">
            <input type="text" placeholder="아이디" ref={idRef} name="id" />
          </div>

          <div className="password">
            <input
              type="password"
              placeholder="비밀번호"
              ref={pwRef}
              name="password"
            />
          </div>

          <input type="button" value="로그인" onClick={handleLogin}></input>
        </form>

        <Link to="/register">회원가입</Link>
      </div>
    </div>
  );
};

export default Login;
