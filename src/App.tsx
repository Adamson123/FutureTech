import Explore from "./components/explore/Explore";
import FutureTech from "./components/furturetech/FutureTech";
import Hero from "./components/hero/Hero";
import Navbar from "./components/Navbar";
import Unlock from "./components/Unlock";

function App() {
  return (
    <main className="font-kubh-sans text-xl_16-md_14-sm_12">
      <Navbar />
      <Hero />
      <FutureTech />
      <Explore />
      <Unlock />
    </main>
  );
}

export default App;
