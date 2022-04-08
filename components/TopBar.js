import React, { useState } from "react";
import { SubText, TopBarCover } from "../styles/MobileNavStyles";

const TopBar = () => {
  const [open, setOpen] = useState(false);

  const openSideBar = () => {
    setOpen(true);
    const sideBar = document.getElementById("sidebar");
    const layout = document.getElementById("layout");
    if (!sideBar.classList.contains("comeIn")) {
      sideBar.classList.add("comeIn");
      layout.classList.add("overlay");
    }
  };

  const closeSideBar = () => {
    setOpen(false);
    const sideBar = document.getElementById("sidebar");
    const layout = document.getElementById("layout");
    if (sideBar.classList.contains("comeIn")) {
      sideBar.classList.remove("comeIn");
      layout.classList.remove("overlay");
    }
  };

  return (
    <TopBarCover>
      <div>
        <p>Frontend Mentor</p>
        <SubText className="sub-text">Feedback Board</SubText>
      </div>
      {!open ? (
        <img
          src="/assets/shared/mobile/icon-hamburger.svg"
          alt=""
          style={{ cursor: "pointer" }}
          onClick={openSideBar}
        />
      ) : (
        <img
          src="/assets/shared/mobile/icon-close.svg"
          alt=""
          style={{ cursor: "pointer" }}
          onClick={closeSideBar}
        />
      )}
    </TopBarCover>
  );
};

export default TopBar;
