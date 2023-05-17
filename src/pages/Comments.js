import { useEffect, useRef, useState } from "react";
import "../css/Comments.css";
import axios from "axios";

const Comments = ({ article }) => {
  const bno = article.board_num;
  const ctg = article.ctg;

  const contentRef = useRef();
  const contentRef2 = useRef();
  const [commentlist, setCommentlist] = useState([]);
  const [upcoment, setupcoment] = useState();
  const [recoment, setrecoment] = useState([]);

  //댓글 목록
  const commentList = () => {
    axios
      .post("/comment_list", {
        ctg: ctg,
        bno: bno,
      })
      .then((res) => {
        const { data } = res;
        setCommentlist(data);
      })
      .catch((e) => {
        console.error(e);
      });
  };
  useEffect(() => {
    commentList();
    setupcoment();
    setrecoment();
  }, []);
  //댓글작성
  const commentInsert = (e) => {
    if (
      window.sessionStorage.getItem("id") === null ||
      window.sessionStorage.getItem("id") === undefined
    ) {
      alert("로그인 하세요");
      return false;
    }
    if (
      contentRef.current.value === "" ||
      contentRef.current.value === undefined
    ) {
      alert("내용을 입력하세요!!!");
      contentRef.current.focus();
      return false;
    }

    axios
      .post("/comment_insert", {
        ctg: ctg,
        bno: bno,
        content: contentRef.current.value,
        writer: window.sessionStorage.getItem("id"),
      })
      .then((res) => {
        if (res.data === 1) {
          contentRef.current.value = "";
        }
        commentList();
      })
      .catch((e) => {
        console.error(e);
      });
  };

  const commentUpdate = (cno) => {
    axios
      .post("/comment_update", {
        cno: cno,
        content: contentRef2.current.value,
        writer: window.sessionStorage.getItem("id"),
      })
      .then((res) => {
        console.log(res);
        commentList();
        if (res.data === 1) {
          contentRef2.current.value = "";
          setupcoment();
        }
      })
      .catch((e) => {
        console.error(e);
      });
  };

  //댓글 삭제
  const commentDelete = (cno, writer) => {
    if (
      window.sessionStorage.getItem("id") === null ||
      window.sessionStorage.getItem("id") === undefined
    ) {
      alert("로그인 하세요");
      return false;
    }
    if (
      !(
        window.sessionStorage.getItem("id") === writer ||
        window.sessionStorage.getItem("id") === "admin"
      )
    ) {
      return false;
    }
    axios
      .post("/comment_delete", {
        cno: cno,
        writer: writer,
      })
      .then((res) => {
        commentList();
      })
      .catch((e) => {
        console.error(e);
      });
  };

  const re_lev = (re_lev) => {
    var sp = "";
    if (re_lev !== 0) {
      for (let a = 0; a <= re_lev * 2; a++) {
        sp += "ㅤ";
      }
      return (
        <div className="space">
          <p>{sp}</p>
        </div>
      );
    } else {
      return (
        <div className="space">
          <p></p>
        </div>
      );
    }
  };
  const recommentInsert = (e) => {
    if (
      window.sessionStorage.getItem("id") === null ||
      window.sessionStorage.getItem("id") === undefined
    ) {
      alert("로그인 하세요");
      return false;
    }
    if (
      contentRef.current.value === "" ||
      contentRef.current.value === undefined
    ) {
      alert("내용을 입력하세요!!!");
      contentRef.current.focus();
      return false;
    }

    axios
      .post("/commentreply", {
        ctg: ctg,
        bno: bno,
        content: contentRef.current.value,
        writer: window.sessionStorage.getItem("id"),
        re_ref: recoment.re_ref,
        re_lev: recoment.re_lev,
        re_seq: recoment.re_seq,
      })
      .then((res) => {
        if (res.data === 1) {
          contentRef.current.value = "";
        }

        setrecoment();
        commentList();
      })
      .catch((e) => {
        console.error(e);
      });
  };
  return (
    <div className="comment">
      <label>comment</label>

      <div className="commentInsertForm">
        <input
          type="text"
          ref={contentRef}
          name="content"
          placeholder="댓글을 입력하세요."
        />
        <span>
          <input type="button" onClick={commentInsert} value="등록" />
        </span>
      </div>

      <div>
        <div className="commentArea">
          {commentlist.map((data) => (
            <div>
              <div className="commentInfo">
                작성자 : {data.writer} &nbsp;&nbsp;
                <div className="commentInfo_2">
                  {data.reg_date}&nbsp;&nbsp;
                  <input
                    type="button"
                    onClick={() => setupcoment(data.cno)}
                    value="수정"
                  />
                  &nbsp;
                  <input
                    type="button"
                    onClick={() => commentDelete(data.cno, data.writer)}
                    value="삭제"
                  />
                  &nbsp;
                  <input
                    type="button"
                    onClick={() => setrecoment(data)}
                    value="답글"
                  />
                </div>
              </div>
              {upcoment === data.cno ? (
                <div className="commentContent">
                  <p>
                    {re_lev(data.re_lev)}
                    <input
                      type="text"
                      ref={contentRef2}
                      defaultValue={data.content}
                    />
                    <input
                      type="button"
                      onClick={() => commentUpdate(data.cno)}
                      value="수정"
                    />
                  </p>
                </div>
              ) : (
                <div className="commentContent">
                  <p>
                    {re_lev(data.re_lev)} {data.content}
                  </p>
                  {recoment && recoment.cno === data.cno ? (
                    <div className="commentInsertForm">
                      <input type="hidden" name="bno" value={bno} />
                      <input
                        type="text"
                        ref={contentRef}
                        name="content"
                        defaultValue="ㄴ"
                        placeholder="답글을 입력하세요."
                      />
                      <span>
                        <input
                          type="button"
                          onClick={recommentInsert}
                          value="등록"
                        />
                      </span>
                    </div>
                  ) : (
                    <div></div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Comments;
