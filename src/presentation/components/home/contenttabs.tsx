"use client";

import styleHome from "@@styles/pages/home/home.module.scss";
import PromotionCard from "../promotioncard";
const ContentTabHome = () => {
  return (
    <>
      <div className={styleHome["tab-content"]}>
        <div className={styleHome["dealpromo-body"]}>
          <div className={styleHome["dealpromo-row"]}>
            <PromotionCard/>
            <PromotionCard/>
          </div>

          <div className={styleHome["dealpromo-row"]}>
            <PromotionCard/>
            <PromotionCard/>
          </div>
          <div className={styleHome["dealpromo-row"]}>
            <PromotionCard/>
            <PromotionCard/>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContentTabHome;
