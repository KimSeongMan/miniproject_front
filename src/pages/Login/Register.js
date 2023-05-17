import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../css/Login.css";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Register = () => {
  const idRef = useRef();
  const pwRef = useRef();
  const pwRef2 = useRef();
  const nameRef = useRef();

  const navigate = useNavigate();

  const handleMember = () => {
    if (nameRef.current.value === "" || nameRef.current.value === undefined) {
      alert("이름을 입력하세요!!!");
      nameRef.current.focus();
      return false;
    }
    if (idRef.current.value === "" || idRef.current.value === undefined) {
      alert("이이디를 입력하세요!!!");
      idRef.current.focus();
      return false;
    }
    if (pwRef.current.value === "" || pwRef.current.value === undefined) {
      alert("패스워드를 입력하세요!!!");
      pwRef.current.focus();
      return false;
    }
    if (!(pwRef.current.value === pwRef2.current.value)) {
      alert("패스워드가 다릅니다 !!!");
      pwRef.current.focus();
      return false;
    }

    axios
      .post("/insertMember", {
        id: idRef.current.value,
        pw: pwRef.current.value,
        name: nameRef.current.value,
      })
      .then((res) => {
        console.log("handleMember =>", res);
        console.log("handleMember((res.data) =>", res.data);
        if (res.data === 1) {
          navigate("/login");
        } else {
          alert("회원가입 실패!!!");
          navigate("/member");
        }
      })
      .catch((e) => {
        console.error(e);
      });
  };

  return (
    <div className="container">
      <div className="register">
        <form>
          <h2>Register</h2>
          <div className="id">
            <input
              type="text"
              placeholder="Enter your id"
              name="id"
              ref={idRef}
            />
          </div>
          <div className="name">
            <input
              type="text"
              placeholder="Full Name"
              name="name"
              ref={nameRef}
            />
          </div>

          <div className="pasword">
            <input
              type="password"
              placeholder="Password"
              name="pw"
              ref={pwRef}
            />
          </div>

          <div className="password">
            <input
              type="password"
              placeholder="Confirm Password"
              name="pw2"
              ref={pwRef2}
            />
          </div>

          <input type="button" onClick={handleMember} value="Resister" />
        </form>

        <Link to="/login">로그인 화면</Link>
      </div>
    </div>
  );
};

export default Register;
