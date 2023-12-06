import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
// DATA Files
import dataNavbar from "../../data/Navbar/nav-main-data.json";
import dataServices from "../../data/Services/services-nine-data.json";
import dataSkills from "../../data/Skill/skill-one-data.json";
import dataFeatures from "../../data/Services/services-four-data.json";
import dataTeam from "../../data/Team/team-one-data.json";
import dataCounter from "../../data/Counter/counter-one-data.json";
// Images
// import imgBg from "../../assets/images/slides/title-bg-20.jpg";
// import imgVideo from "../../assets/images/startup-video-img.jpg";
// import imgAbout from "../../assets/images/about-img.jpg";
// Components
import NavbarLeftSide from "../../components/Navbar/NavbarLeftSide";
import PageTitleTwo from "../../components/PageTitle/PageTitleTwo";
import WhoWeAreEight from "../../components/WhoWeAre/WhoWeAreEight";
import AboutUsFour from "../../components/About/AboutUsFour";
import TeamSix from "../../components/Team/TeamSix";
import CounterOne from "../../components/Counter/CounterOne";
import FooterOne from "../../components/Footer/FooterOne";
import Loader from "../../components/Loader/Loader";

const AboutUsPage = () => {
  const [toggler, setToggler] = useState(false);

  return (
    <Loader>
      <FsLightbox
        toggler={toggler}
        sources={["https://www.youtube.com/watch?v=sU3FkzUKHXU"]}
      />
      <NavbarLeftSide data={dataNavbar} type="white" />
      <PageTitleTwo
        title="About Us"
        tagline="Dynamic Photo Agency"
        image={'https://c4.wallpaperflare.com/wallpaper/643/512/984/anime-original-camera-girl-wallpaper-preview.jpg'}
      />
      <WhoWeAreEight
        data={dataServices}
        title="About Company"
        text="We are an Creative agency, based in New York. Vision Every company
            is performing best online. Mission Helping businesses to find the
            perfect and most succesful strategy, to be online."
      />
      <AboutUsFour
        titleSkills="Our Skills"
        dataSkills={dataSkills}
        dataFeatures={dataFeatures}
        imgVideo={'https://www.teahub.io/photos/full/125-1252683_moon.jpg'}
        imgAbout={'https://live.staticflickr.com/5572/14679880028_c4fe773a01_b.jpg'}
        pathVideo="https://www.youtube.com/watch?v=sU3FkzUKHXU"
        setToggler={setToggler}
        toggler={toggler}
      />
      <TeamSix data={dataTeam} title="Creative Team" />
      <CounterOne data={dataCounter} />
      <FooterOne />
    </Loader>
  );
};

export default AboutUsPage;
