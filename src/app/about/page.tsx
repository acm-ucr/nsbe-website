import OurMission from "@/components/about/OurMission";
import History from "@/components/about/History";
import JoinUs from "@/components/about/JoinUs";
import Landing from "@/components/about/Landing";
import Gallery from "@/components/Gallery";
import aboutGallery from "@/data/aboutGallery";
const About = () => {
  return (
    <>
      <Landing />
      <Gallery images={aboutGallery} />
      <OurMission />
      <History />
      <JoinUs />
    </>
  );
};

export default About;
