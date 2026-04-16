import Example from "@/components/practice";
import Button from "@/components/Button";

const Home = () => {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <Example text1="Change Me!" text2="Click" text3="Props" />
      <Button />
    </div>
  );
};

export default Home;
