import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
// DATA Files
import dataNavbar from "../../data/Navbar/nav-fitness-data.json";
import dataClasses from "../../data/Classes/classes-one-data.json";
import dataCounter from "../../data/Counter/counter-two-data.json";
import dataSchedule from "../../data/Schedule/schedule-one-data.json";
// Images
import imgAbout from "../../assets/images/fitness-video-img.jpg";
import imgParallax from "../../assets/images/background/parallax-bg-3.jpg";
// Components
import NavbarSimpleSocial from "../../components/Navbar/NavbarSimpleSocial";
import FitnessSlider from "../../components/Slider/FitnessSlider";
import FooterTwo from "../../components/Footer/FooterTwo";
import AboutUsThree from "../../components/About/AboutUsThree";
import ClassesOne from "../../components/Classes/ClassesOne";
import CounterTwo from "../../components/Counter/CounterTwo";
import ScheduleOne from "../../components/Schedule/ScheduleOne";
import ParallaxTwo from "../../components/Parallax/ParallaxTwo";
import ContactFive from "../../components/Contact/ContactFive";
import Loader from "../../components/Loader/Loader";

const HomeFitness = () => {
  const [toggler, setToggler] = useState(false);
  return (
    <Loader>
      <FsLightbox
        toggler={toggler}
        sources={["https://www.youtube.com/watch?v=sU3FkzUKHXU"]}
      />
      <NavbarSimpleSocial data={dataNavbar} />
      <FitnessSlider />
      <AboutUsThree
        image={imgAbout}
        pathVideo="https://www.youtube.com/watch?v=sU3FkzUKHXU"
        setToggler={setToggler}
        toggler={toggler}
      />
      <ClassesOne data={dataClasses} title="Our classes" />
      <CounterTwo data={dataCounter} bg="dark" />
      <ScheduleOne data={dataSchedule} title="The Schedule" />
      <ParallaxTwo image={imgParallax}>
        "Those who do not find time for exercise will have to find time for
        illness"
      </ParallaxTwo>
      <ContactFive />
      <FooterTwo />
    </Loader>
  );
};

export default HomeFitness;
