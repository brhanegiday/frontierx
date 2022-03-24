import Banner from "./Banner";
import Descriprtion from "./Descriprtion";
import Accordion from "./Accordions";
function Home() {
  return (
    <div className="bg-gradient-to-r from-[#181919] to-[#2e233e]">
      <div className="xl:container mx-auto">
        <Banner />
        <Descriprtion />
        <Accordion />
      </div>
    </div>
  );
}

export default Home;
