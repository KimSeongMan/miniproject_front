import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "../../css/Member.css";
const Memberdetail = () => {
  const location = useLocation();
  const state = location.state;
  const [memberdetail, setMemberdetail] = useState([]);
  const updatememberform = () => {
    axios
      .post("/memberinfo", {
        id: state.id,
      })
      .then((res) => {
        setMemberdetail(res.data);
      })
      .catch((e) => {
        console.error(e);
      });
  };
  useEffect(() => {
    updatememberform();
  }, []);

  return (
    <div className="container">
      <div className="member">
        <table
          border="1"
          width="400px"
          align="center"
          className="detailmemeberlist"
        >
          <tr align="center">
            <th colSpan={2}>회원 정보</th>
          </tr>
          <tr align="center">
            <td width="100px" className="detailmemeber">
              아이디
            </td>
            <td width="300px" className="detailmemeber">
              {memberdetail.id}
            </td>
          </tr>
          <tr align="center">
            <td width="100px" className="detailmemeber">
              이름
            </td>
            <td width="300px" className="detailmemeber">
              {memberdetail.name}
            </td>
          </tr>
          <tr align="center">
            <td width="100px" className="detailmemeber">
              비밀번호
            </td>
            <td width="300px" className="detailmemeber">
              {memberdetail.pw}
            </td>
          </tr>

          <tr>
            <td colspan="2" align="center">
              <Link to={"/memberlist"}>
                <button>글목록</button>
              </Link>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Memberdetail;
