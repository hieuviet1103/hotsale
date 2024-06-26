"use client"
import styleHome from "@@styles/pages/home/home.module.scss";
import { useState } from "react";


const TitleTabHome = () => {

    const [typeItemActive, setTypeItemActive] = useState(1)


  return (
    <>
      <div className={styleHome["title-tabs"]}>
        <div className={styleHome["title-tabs--name"]}>
          <span>Danh sách mã khuyến mãi</span>
        </div>
        <div className={styleHome["title-tabs--type"]}>
          <div
            className={
              styleHome[
                `title-tabs--type-item${typeItemActive == 1 ? "--active" : ""}`
              ]
            }
            onClick={() => {
              setTypeItemActive(1);
            }}
          >
            <span>Đang mở</span>
          </div>{" "}
          <div
            className={
              styleHome[
                `title-tabs--type-item${typeItemActive == 0 ? "--active" : ""}`
              ]
            }
            onClick={() => {
                setTypeItemActive(0);
            }}
          >
            <span>Sắp mở</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default TitleTabHome;
