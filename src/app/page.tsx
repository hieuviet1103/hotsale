import styleHome from "@@styles/pages/home/home.module.scss";

const Home = () => {
  return (
    <div className={styleHome["main"]}>
      <div className={styleHome["voucher-dealcoupon"]}>
        <div className={styleHome["title-tabs"]}>
          <div className={styleHome["title-tabs--name"]}>
            <span>Danh sách mã khuyến mãi</span>
          </div>
          <div className={styleHome["title-tabs--type"]}>
            <div className={styleHome["title-tabs--type-item"]}>
              <span>Đang mở</span>
            </div>{" "}
            <div className={styleHome["title-tabs--type-item"]}>
              <span>Sắp mở</span>
            </div>
          </div>
        </div>

        <div className={styleHome["tab-content"]}>
          <div className={styleHome["dealpromo-body"]}>
            <div className={styleHome["dealpromo-item"]}></div>

            <div className={styleHome["dealpromo-item"]}></div>

            <div className={styleHome["dealpromo-item"]}></div>

            <div className={styleHome["dealpromo-item"]}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
