import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const menuList = [
    "여성",
    "Divied",
    "남성",
    "신생아/유아",
    "아동",
    "H&M HOME",
    "지속가능성",
  ];
  return (
    <div>
      <div className="login-btn">
        <FontAwesomeIcon icon={faUser} />
        <div>로그인</div>
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
          {menuList.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
        <div class="search-container">
          <input class="search-input" placeholder="검색" />
          <button class="search-button">
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
