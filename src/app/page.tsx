import ContentTabHome from "@/presentation/components/home/contenttabs";
import TitleTabHome from "@/presentation/components/home/titletabs";
import styleHome from "@@styles/pages/home/home.module.scss";

const Home = () => {
  var typeItemActive = 0;
  return (
    <div className={styleHome["main"]}>
      <div className={styleHome["voucher-dealcoupon"]}>
        <TitleTabHome />
        <ContentTabHome />
      </div>
    </div>
  );
};

export default Home;
