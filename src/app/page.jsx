import Categories from "@/components/template/homePage/Categories";
import Hero from "@/components/template/homePage/Hero";
import NewDrops from "@/components/template/homePage/NewDrops";
import Reviews from "@/components/template/homePage/Reviews";
const Home = () => {
  return (
    <div>
      <div>
        <Hero />
        <NewDrops />
        <Categories />
        <Reviews />
      </div>
    </div>
  );
};

export default Home;
