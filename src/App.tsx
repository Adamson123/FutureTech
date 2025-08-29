import BePart from "./components/BePart";
import Explore from "./components/explore/Explore";
import Footer from "./components/Footer";
import FutureTech from "./components/futuretech/FutureTech";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
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
      <Footer />
    </main>
  );
}

export default App;
