import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./Components/Benefits";
import Collaboration from "./Components/Collaboration";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Pricing from "./Components/Pricing";
import Services from "./Components/Services";
const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Benefits />
        <Collaboration />
        <Services />
        <Pricing />
      </div>
      <ButtonGradient />
    </>
  );
};

export default App;
