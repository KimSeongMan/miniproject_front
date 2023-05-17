import axios from "axios";
import LikeButton from "../LikeButton";
import Comments from "../Comments";
import { Link, useNavigate } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
const BoardDetail = () => {
  const titleRef = useRef();
  const navigate = useNavigate();
  const contentRef = useRef();
  const [actionMode, setActionMode] = useState(0);
  const [boarddetail, setBoarddetail] = useState([]);
  const article = {
    ctg: window.sessionStorage.getItem("ctg"),
    board_num: window.sessionStorage.getItem("board_num"),
  };

  const getDetail = () => {
    // console.log("handleUpdate =>", article);
    axios
      .post("/detail", {
        ctg: window.sessionStorage.getItem("ctg"),
        board_num: window.sessionStorage.getItem("board_num"),
      })
      .then((res) => {
        setBoarddetail(res.data);
      })
      .catch((e) => {
        console.error(e);
      });
  };
  useEffect(() => {
    getDetail();
  }, []);
  const handleUpdate = () => {
    // console.log("handleUpdate =>", article);
    axios
      .post("/update", {
        ctg: boarddetail.ctg,
        board_num: boarddetail.board_num,
        board_title: titleRef.current.value,
        board_content: contentRef.current.value,
      })
      .then((res) => {
        getDetail();
        setActionMode(0);
      })
      .catch((e) => {
        console.error(e);
      });
  };
  const handleDelete = () => {
    if (
      boarddetail.board_writer === window.sessionStorage.getItem("id") ||
      window.sessionStorage.getItem("id") === "admin"
    ) {
      axios
        .post("/delete", {
          board_num: boarddetail.board_num,
          ctg: boarddetail.ctg,
        })
        .then((res) => {
          navigate("/reviewboard");
        })
        .catch((e) => {
          console.error(e);
        });
    } else alert("삭제 권한이 없습니다!!!");
  };

  if (actionMode === 0) {
    return (
      <div>
        <form>
          <table border="0" width="900px" align="center" bgcolor="#FBF5EF">
            <tr>
              <td colSpan="2">
                <hr />
              </td>
            </tr>
            <tr>
              <td width="200px"> {boarddetail.board_title}</td>
              <td align="right" width="600px">
                {boarddetail.board_date}&nbsp;&nbsp;{boarddetail.board_writer}
              </td>
            </tr>
            <tr>
              <td colSpan="2">
                <hr />
              </td>
            </tr>
            <tr>
              <td colSpan="2">{boarddetail.board_content}</td>
            </tr>
            <tr>
              <td colspan="2" align="center">
                <LikeButton article={article} />
              </td>
            </tr>
            <tr>
              <td align="right" colSpan="2">
                <Link to="/reviewboard">
                  <input type="button" value="목록"></input>
                </Link>
                &nbsp;
                <input
                  type="button"
                  value="수정"
                  onClick={() => setActionMode(1)}
                ></input>
                &nbsp;
                <input
                  type="button"
                  value="삭제"
                  onClick={handleDelete}
                ></input>
              </td>
            </tr>
            <tr>
              <td colSpan="2">
                <hr />
              </td>
            </tr>
          </table>
        </form>
        <Comments article={article} />
      </div>
    );
  } else {
    return (
      <div>
        <form>
          <table border="1" width="900px" align="center" bgcolor="#FBF5EF">
            <tr>
              <td width="100px">제목</td>
              <td align="left" width="600px">
                <input
                  type="text"
                  name="board_title"
                  defaultValue={boarddetail.board_title}
                  ref={titleRef}
                ></input>
              </td>
            </tr>
            <tr>
              <td width="100px">글쓴이</td>
              <td align="left" width="600px">
                {boarddetail.board_writer}
              </td>
            </tr>
            <tr>
              <td width="100px">글내용</td>
              <td align="left" width="600px">
                <textarea
                  rows="30"
                  cols="70"
                  name="board_content"
                  defaultValue={boarddetail.board_content}
                  ref={contentRef}
                ></textarea>
              </td>
            </tr>
            <tr>
              <td colSpan="2" align="center">
                <input
                  type="button"
                  value="글수정"
                  onClick={handleUpdate}
                ></input>
              </td>
            </tr>
          </table>
        </form>
      </div>
    );
  }
};

export default BoardDetail;
