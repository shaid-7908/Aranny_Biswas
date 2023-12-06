import React from "react";
// DATA Files
import dataNavbar from "../../data/Navbar/nav-main-data.json";
import dataPortfolio from "../../data/Portfolio/portfolio-eight-data.json";
// Images
import imgBg from "../../assets/images/slides/title-bg-10.jpg";
// Components
import NavbarSocial from "../../components/Navbar/NavbarSocial";
import PageTitleThree from "../../components/PageTitle/PageTitleThree";
import FooterTwo from "../../components/Footer/FooterTwo";
import PortfolioGrid from "../../components/Portfolio/PortfolioGrid";
import Loader from "../../components/Loader/Loader";

const PortfolioGridSpaceThree = () => (
  <Loader>
    <NavbarSocial data={dataNavbar} type="white" />
    <PageTitleThree
      title="Our Portfolio"
      tagline="Recent Works"
      image={imgBg}
    />
    <PortfolioGrid data={dataPortfolio} cols="3" spacing items="9" />
    <FooterTwo />
  </Loader>
);

export default PortfolioGridSpaceThree;
