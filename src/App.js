import GridPart from "./components/GridPart";
import Ipad from "./components/Ipad";
import Iphone13 from "./components/Iphone13";
import IphoneSE from "./components/IphoneSE";
import Navbar from "./components/Navbar";
import Unicef from "./components/Unicef";
import Information from "./components/Information";
import Outro from "./components/Outro";
import Impressum from "./components/Impressum";

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
      <Outro />
      <Impressum />
    </>
  );
}

export default App;
