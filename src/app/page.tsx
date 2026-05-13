import Landing from "@/components/home/Landing";
import Gallery from "@/components/Gallery";
import gallery from "@/data/gallery";
import Opportunities from "@/components/home/Opportunities";

const Home = () => {
  return (
    <div>
      <Landing />
      <Gallery images={gallery} />
      <Opportunities />
    </div>
  );
};

export default Home;
