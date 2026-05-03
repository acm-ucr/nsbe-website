import Landing from "@/components/home/Landing";
import Gallery from "@/components/Gallery";
import gallery from "@/data/gallery";

const Home = () => {
  return (
    <div>
      <Landing />
      <Gallery images={gallery} />
    </div>
  );
};

export default Home;
