import Banner from "./Banner";
import Descriprtion from "./Descriprtion";
import Accordion from "./Accordions";
function Home() {
  return (
    <div className="">
      <div className="container 2xl:max-w-[1700px]  mx-auto">
        <Banner />
        <Descriprtion />
        <Accordion />
      </div>
    </div>
  );
}

export default Home;
