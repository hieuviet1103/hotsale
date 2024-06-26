"use client";

import styleHome from "@@styles/pages/home/home.module.scss";

const PromotionCard = () => {
  return (
    <>
      <div className={styleHome["dealpromo-item"]}>
        <div className={styleHome["dealpromo-item-card"]}>
          <div className={styleHome["dealpromo-item-card--logo"]}>
            <div className={styleHome["dealpromo-item-card--logo-image"]}></div>
          </div>
          <div className={styleHome["dealpromo-item-card--content"]}>
            <div className={styleHome["dealpromo-item-card--content-title"]}></div>
            <div className={styleHome["dealpromo-item-card--content-time"]}></div>
            <div className={styleHome["dealpromo-item-card--content-merchant"]}></div>
          </div>
          <div className={styleHome["dealpromo-item-card--get"]}>
            <div className={styleHome["dealpromo-item-card--get-remain"]}></div>
            <div className={styleHome["dealpromo-item-card--get-code"]}></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PromotionCard;
