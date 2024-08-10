import Navbar from "../components/home/Navbar";
import Hero from "../components/home/Hero"

const HomeLand = () => {

  return (
    <>
      <div className="flex flex-col">
        <Navbar className="fixed"/>
        <Hero />
      </div>
    </>
  );
};

export default HomeLand;
