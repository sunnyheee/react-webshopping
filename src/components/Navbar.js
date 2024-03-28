import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Navbar = ({ authenticate, logoutUser }) => {
  const menuList = [
    "여성",
    "Divied",
    "남성",
    "신생아/유아",
    "아동",
    "H&M HOME",
    "지속가능성",
  ];
  const navigate = useNavigate();

  const handleAuthAction = () => {
    if (authenticate) {
      logoutUser();
    } else {
      navigate("/login");
    }
  };
  return (
    <div>
      <div className="login-btn-box">
        <div className="login-btn" onClick={handleAuthAction}>
          <FontAwesomeIcon icon={authenticate ? faSignOutAlt : faUser} />
          <div>{authenticate ? "로그아웃" : "로그인"}</div>
        </div>
      </div>
      <div className="logo">
        <img
          width={100}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/2560px-H%26M-Logo.svg.png"
          alt="hm"
        />
      </div>
      <div className="menu-area">
        <ul className="menu-lsit">
          {menuList.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
        <div className="search-container">
          <input className="search-input" placeholder="검색" />
          <button className="search-button">
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
