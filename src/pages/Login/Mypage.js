import { useRef, useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import "../../css/Login.css";
const Mypage = () => {
  const location = useLocation();
  const state = location.state;
  const idRef = useRef();
  const pwRef = useRef();
  const pwRef2 = useRef();
  const nameRef = useRef();
  const [memberdetail, setMemberdetail] = useState([]);
  const navigate = useNavigate();

  const updatememberform = () => {
    axios
      .post("/memberinfo", {
        id: state.id,
      })
      .then((res) => {
        const { data } = res;

        setMemberdetail(data);
      })
      .catch((e) => {
        console.error(e);
      });
  };
  useEffect(() => {
    updatememberform();
  }, []);

  const updateMember = () => {
    if (nameRef.current.value === "" || nameRef.current.value === undefined) {
      alert("이름을 입력하세요!!!");
      nameRef.current.focus();
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
      .post("/updatemember", {
        id: idRef.current.value,
        pw: pwRef.current.value,
        name: nameRef.current.value,
      })
      .then((res) => {
        navigate("/");
      })
      .catch((e) => {
        console.error(e);
      });
  };

  const deleteMember = () => {
    axios
      .post("/memberdelete", {
        id: state.id,
      })
      .then((res) => {
        if (res.data === 1) {
          window.sessionStorage.clear();
          navigate("/");
        }
      })
      .catch((e) => {
        console.error(e);
      });
  };

  return (
    <div className="container">
      <div className="register">
        <div>
          <h2>정보 수정</h2>
          <div className="id">
            <input type="text" name="id" value={memberdetail.id} ref={idRef} />
          </div>
          <div className="name">
            <input
              type="text"
              placeholder="Full Name"
              name="name"
              defaultValue={memberdetail.name}
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

          <input type="button" onClick={updateMember} value="정보 수정" />
        </div>
        <button onClick={deleteMember}>회원탈퇴</button>
      </div>
    </div>
  );
};

export default Mypage;
