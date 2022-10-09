import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <div className="order">
        <Link to="/orderlist">
          <div>
            <a>주문목록</a>
          </div>
        </Link>
      </div>
      <div className="menu">
        <Link to="/menulist">
          <div>
            <a>메뉴관리</a>
          </div>
        </Link>
      </div>
    </nav>
  );
}
