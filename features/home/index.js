import Banner from "./Banner";
import Descriprtion from "./Descriprtion";
import Accordion from "./Accordions";
function Home() {
  return (
    <div className="px-3 md:px-6 2xl:px-8">
      <div className="min-h-screen w-full  mx-auto">
        <Banner />
        <Descriprtion />
        <Accordion />
      </div>
    </div>
  );
}

export default Home;
