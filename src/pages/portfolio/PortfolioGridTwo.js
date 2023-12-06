import React from "react";
// DATA Files
import dataNavbar from "../../data/Navbar/nav-main-data.json";
import dataPortfolio from "../../data/Portfolio/portfolio-two-data.json";
// Images
// import imgBg from "../../assets/images/slides/title-bg.jpg";
// Components
import NavbarLeftSide from "../../components/Navbar/NavbarLeftSide";
import PageTitleThree from "../../components/PageTitle/PageTitleThree";
import FooterTwo from "../../components/Footer/FooterTwo";
import PortfolioGrid from "../../components/Portfolio/PortfolioGrid";
import Loader from "../../components/Loader/Loader";

const PortfolioGridTwo = () => (
  <Loader>
    <NavbarLeftSide data={dataNavbar} type="white" />
    <PageTitleThree
      title="Our Portfolio"
      tagline="Recent Works"
      image={'https://amateurphotographer.com/wp-content/uploads/sites/7/2022/12/nikon-z9-in-hand-1000px.jpg'}
    />
    <PortfolioGrid data={dataPortfolio} />
    <FooterTwo />
  </Loader>
);

export default PortfolioGridTwo;
