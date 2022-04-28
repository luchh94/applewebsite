import GridPart from "./components/GridPart";
import Ipad from "./components/Ipad";
import Iphone13 from "./components/Iphone13";
import IphoneSE from "./components/IphoneSE";
import Navbar from "./components/Navbar";
import Unicef from "./components/Unicef";
import Information from "./components/Information";

function App() {
  return (
    <>
      <Navbar />
      <Unicef />
      <Iphone13 />
      <IphoneSE />
      <Ipad />
      <GridPart />
      <Information />
    </>
  );
}

export default App;
