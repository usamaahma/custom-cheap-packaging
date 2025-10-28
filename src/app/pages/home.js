import React from "react";
import Hero from "../components/hero/hero";
import Hero1 from "../components/hero/hero1";
import Welcome from "../components/welcome/welcome";
import WhoWeAre from "../components/whoweare/whoweare";
import ProductHomePage from "../components/productshomesection/productshome";
import EasySteps from "../components/steps/easysteps";
import StepsPrinting from "../components/printingsteps/printingsteps";
import Clients from "../components/clients/clients";
import ProductsSection from "../components/productsshowcase/productsshowcase";
import Footer from "../components/footer/footer";

function Home1() {
  return (
    <div>
      <Hero />
      <Hero1 />
      <Welcome />
      <WhoWeAre />
      <ProductHomePage />
      <EasySteps />
      <StepsPrinting />
      <Clients />
      <ProductsSection />
    </div>
  );
}

export default Home1;
