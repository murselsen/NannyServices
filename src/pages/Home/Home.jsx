import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Css from "./Home.module.css";

// Icons
import { GoArrowUpRight } from "react-icons/go";

const Home = () => {
  return (
    <div className={Css.HomePage}>
      <Navbar />
      <div className={Css.Content}>
        <div className={Css.HeaderSection}>
          <h1 className={Css.Title}>Make Life Easier for the Family:</h1>
          <h3 className={Css.SubTitle}>
            Find Babysitters Online for All Occasions
          </h3>
          <a
            href="/nannies"
            className={Css.FindNannyButton}
            title="Get Started"
          >
            Get Started <GoArrowUpRight size={24} />
          </a>
        </div>
        <div className={Css.InfoSection}></div>
      </div>
    </div>
  );
};

export default Home;
