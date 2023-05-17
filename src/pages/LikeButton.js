import { useEffect, useState } from "react";
import axios from "axios";
import "../css/LikeButton.css";
const LikeButton = ({ article }) => {
  const bno = article.board_num;
  const ctg = article.ctg;

  const [likecount, setlikecount] = useState(0);
  const [active, setactive] = useState(false);

  //추천 확인
  const selectLike = () => {
    axios
      .post("/selectLike", {
        bno: bno,
        ctg: ctg,
        id: window.sessionStorage.getItem("id"),
      })
      .then((res) => {
        if (res.data === 1) {
          setactive(true);
        } else {
          setactive(false);
        }
      })
      .catch((e) => {
        console.error(e);
      });
  };

  useEffect(() => {
    selectLike();
    countLike();
  }, []);

  const countLike = () => {
    axios
      .post("/countLike", {
        bno: bno,
        ctg: ctg,
      })
      .then((res) => {
        setlikecount(res.data);
      })
      .catch((e) => {
        console.error(e);
      });
  };

  const LikeClick = () => {
    if (
      window.sessionStorage.getItem("id") === null ||
      window.sessionStorage.getItem("id") === undefined
    ) {
      alert("로그인 하세요");
      return false;
    }
    if (active) {
      deleteLike();
    } else {
      insertLike();
    }
  };

  //추천
  const insertLike = () => {
    if (
      window.sessionStorage.getItem("id") === null ||
      window.sessionStorage.getItem("id") === undefined
    ) {
      alert("로그인 하세요");
      return false;
    }
    axios
      .post("/insertLike", {
        bno: bno,
        ctg: ctg,
        id: window.sessionStorage.getItem("id"),
      })
      .then((res) => {
        selectLike();
        countLike();
      })
      .catch((e) => {
        console.error(e);
      });
  };

  //추천 삭제
  const deleteLike = (cno) => {
    axios
      .post("/deleteLike", {
        bno: bno,
        ctg: ctg,
        id: window.sessionStorage.getItem("id"),
      })
      .then((res) => {
        selectLike();
        countLike();
      })
      .catch((e) => {
        console.error(e);
      });
  };

  return (
    <div>
      {active ? (
        <div>
          <button onClick={LikeClick} className="likebtn">
            <p>추천</p>
            <h3>{likecount}</h3>
          </button>
        </div>
      ) : (
        <div>
          <button onClick={LikeClick} className="likebtn2">
            <p>추천</p>
            <h3>{likecount}</h3>
          </button>
        </div>
      )}
    </div>
  );
};

export default LikeButton;
