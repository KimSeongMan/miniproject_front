import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import "../../css/BoardList.css";

const BoardList = ({}) => {
  const [boardlist, setBoardlist] = useState([]);
  const navigate = useNavigate();
  const [PageLink, setPageLink] = useState([]); //페이지 링크 저장
  var page_num = 1; // 페이지 번호
  const page_size = 10; // 한 페이지에 나타낼 글 수
  var page_count = 1; // 페이지 갯수
  var article_count = 0; // 총 글의 갯수

  useEffect(() => {
    getList();
  }, []);

  const handlePage = (e) => {
    page_num = e.target.id;
    getList();
  };

  const goDetail = (ctg, board_num) => {
    window.sessionStorage.setItem("ctg", ctg);
    window.sessionStorage.setItem("board_num", board_num);
    navigate("/reviewdetail?");
  };

  const getList = () => {
    axios
      .get("/count", {})
      .then((res) => {
        const { data } = res;
        article_count = data;
        page_count = Math.ceil(article_count / page_size);
        var page_link = [];
        for (let i = 1; i <= page_count; i++) page_link.push(i);

        setPageLink(page_link);
      })
      .catch((e) => {
        console.error(e);
      });

    axios
      .post("/list", {
        page_num: page_num,
        limit: page_size,
      })
      .then((res) => {
        const { data } = res; // data = res.data

        setBoardlist(data);
      })
      .catch((e) => {
        console.error(e);
      });
  };

  if (boardlist.length === 0) {
    return (
      <div>
        <table
          width="900px"
          border="0"
          align="center"
          bgcolor="#FBF5EF"
          className="retitle"
        >
          <thead>
            <tr>
              <th width="60" align="center">
                번호
              </th>
              <th width="600" align="center">
                제목
              </th>
              <th width="140" text-align="center">
                작성자
              </th>
              <th width="100" align="center">
                작성일
              </th>
            </tr>
          </thead>
        </table>
        <table align="center">
          <tr>
            <td colSpan="2" align="center">
              {PageLink.map((page) => (
                <div class="page">
                  [
                  <a href="#" id={page} onClick={handlePage}>
                    {page}
                  </a>
                  ]&nbsp;
                </div>
              ))}
            </td>
          </tr>
          <br />
          <tr>
            <td width="800px">&nbsp;</td>
            <td align="right">
              <Link to="/reviewwrite">
                <input type="button" value="글쓰기"></input>
              </Link>
            </td>
          </tr>
        </table>
      </div>
    );
  } else {
    return (
      <div>
        <table
          width="900px"
          border="0"
          align="center"
          bgcolor="#FBF5EF"
          className="retitle"
        >
          <thead>
            <tr>
              <th width="60" align="center">
                번호
              </th>
              <th width="600" align="center">
                제목
              </th>
              <th width="140" align="center">
                작성자
              </th>
              <th width="100" align="center">
                작성일
              </th>
            </tr>
          </thead>
        </table>

        {boardlist.map((article) => (
          <table width="900px" border="0" align="center" bgcolor="#FBF5EF">
            <tbody>
              <tr>
                <td colSpan="5">
                  <hr />
                </td>
              </tr>
              <tr>
                <td width="60" align="center">
                  {article.board_num}
                </td>

                <td width="600">
                  <a
                    href="#"
                    onClick={() => goDetail(article.ctg, article.board_num)}
                  >
                    &nbsp;{article.board_title}
                  </a>
                </td>

                <td width="140" align="center">
                  {article.board_writer}
                </td>
                <td width="100" align="center">
                  {article.board_date}
                </td>
              </tr>
            </tbody>
          </table>
        ))}
        <table align="center">
          <tr>
            <td colSpan="2" align="center">
              {PageLink.map((page) => (
                <div class="page">
                  [
                  <a href="#" id={page} onClick={handlePage}>
                    {page}
                  </a>
                  ]&nbsp;
                </div>
              ))}
            </td>
          </tr>
          <br />
          <tr>
            <td width="800px">&nbsp;</td>
            <td align="right">
              <Link to="/reviewwrite">
                <input type="button" value="글쓰기"></input>
              </Link>
            </td>
          </tr>
        </table>
      </div>
    );
  }
};

export default BoardList;
