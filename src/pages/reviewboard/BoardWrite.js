import { useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const BoardWrite = () => {
  const titleRef = useRef();
  const writerRef = useRef();
  const contentRef = useRef();
  const navigate = useNavigate();
  const handleInsert = () => {
    console.log("handleInsert =>", titleRef.current.value);
    if (titleRef.current.value === "" || titleRef.current.value === undefined) {
      alert("제목을 입력하세요!!!");
      titleRef.current.focus();
      return false;
    }
    if (
      writerRef.current.value === "" ||
      writerRef.current.value === undefined
    ) {
      alert("글쓴이를 입력하세요!!!");
      writerRef.current.focus();
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
      .post("/insert", {
        ctg: 1,
        board_title: titleRef.current.value,
        board_writer: writerRef.current.value,
        board_content: contentRef.current.value,
      })
      .then((res) => {
        titleRef.current.value = "";
        writerRef.current.value = "";
        contentRef.current.value = "";
        navigate("/reviewboard");
      })
      .catch((e) => {
        console.error(e);
      });
  };

  return (
    <div>
      <form>
        <table border="1" width="900px" align="center" bgcolor="#FBF5EF">
          <tr>
            <td width="100px" align="center">
              제목
            </td>
            <td align="left" width="550px">
              <input
                type="text"
                name="title"
                size="68"
                ref={titleRef}
                placeholder="제목을 입력하세요"
              ></input>
              <input
                type="hidden"
                name="writer"
                size="68"
                ref={writerRef}
                defaultValue={window.sessionStorage.getItem("id")}
              ></input>
            </td>
          </tr>
          {/* <tr>
            <td width="100px">글쓴이</td>
            <td align="left" width="550px">
              
            </td>
          </tr> */}
          <tr>
            <td align="center">내용</td>
            <td align="left">
              <textarea
                rows="30"
                cols="70"
                name="content"
                ref={contentRef}
                placeholder="내용을 입력하세요"
              ></textarea>
            </td>
          </tr>
          <tr>
            <td colSpan="2" align="center">
              <input type="button" value="등록" onClick={handleInsert}></input>
              &nbsp;
              <input type="reset" value="취소"></input>
            </td>
          </tr>
          <tr>
            <td colSpan={2} align="center">
              <Link to="/reviewboard">
                <input type="button" value="목록"></input>
              </Link>
            </td>
          </tr>
        </table>
      </form>
    </div>
  );
};

export default BoardWrite;
