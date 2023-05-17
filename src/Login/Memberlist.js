import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import "../../css/Member.css";
const Memberlist = () => {
  const navigate = useNavigate();
  const [memberlist, setMemberlist] = useState([]);

  if (!(window.sessionStorage.getItem("id") === "admin")) {
    navigate("/");
  }

  const memberList = () => {
    axios
      .post("/memberlist", {})
      .then((res) => {
        console.log(res.data);
        setMemberlist(res.data);
      })
      .catch((e) => {
        console.error(e);
      });
  };
  useEffect(() => {
    memberList();
  }, []);

  const deleteMember = (id) => {
    axios
      .post("/memberdelete", {
        id: id,
      })
      .then((res) => {
        memberList();
      })
      .catch((e) => {
        console.error(e);
      });
  };
  return (
    <div className="container">
      <div className="member">
        <table width="400" align="center">
          <tr align="center">
            <th colSpan={3}>회원 목록</th>
          </tr>

          {memberlist.map((mem) => (
            <tr className="detaillist">
              <td className="detailid">
                <Link to={"/memberdetail"} state={{ id: mem.id }}>
                  <span>{mem.id}</span>
                </Link>
              </td>
              <td width="50px">
                <Link to={"/mypage"} state={{ id: mem.id }}>
                  <span>수정</span>
                </Link>
              </td>
              <td width="50px">
                <button onClick={() => deleteMember(mem.id)}>삭제</button>
              </td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
};

export default Memberlist;
