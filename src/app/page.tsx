import Landing from "@/components/home/Landing";
import OurMission from "@/components/home/OurMission";
import Photos from "@/components/home/Photos";
import Opportunities from "@/components/home/Opportunities";
import Newsletter from "@/components/home/Newsletter";
import UpcomingEvents from "@/components/home/UpcomingEvents";

const Home = () => {
  return (
    <div>
      <Landing />
      <OurMission />
      <Photos />
      <UpcomingEvents />
      <Opportunities />
      <Newsletter />
    </div>
  );
};

export default Home;
