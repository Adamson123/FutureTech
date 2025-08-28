import BePart from "./components/BePart";
import Explore from "./components/explore/Explore";
import FutureTech from "./components/furturetech/FutureTech";
import Hero from "./components/hero/Hero";
import Navbar from "./components/Navbar";
import RealWords from "./components/RealWords";
import Unlock from "./components/unlock/Unlock";

function App() {
  return (
    <main className="font-kubh-sans text-xl_16-md_14-sm_12">
      <Navbar />
      <Hero />
      <FutureTech />
      <Explore />
      <Unlock />
      <RealWords />
      <BePart />
    </main>
  );
}

export default App;
