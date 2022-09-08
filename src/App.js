import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Header from "./Components/header/Header";
import Numbers from "./Components/number/Numbers";
import Footer2 from "./Components/Footer/Footer2";
import Footer from "./Components/Footer/Footer";
import Hash from "./Components/hash/Hash";
import CoinCard from "./Components/coincard/CoinCard";
import Section2 from "./Components/section2/Section2";
import Section0 from "./Components/section0/Section0";
import { ContextProvider } from "./store/context";

// import arrow from "./Assest/Arrow.png"
function App() {
  return (
    <ContextProvider>
      <div className="container" id="light">
        <Navbar />
        <div className="container-body ">
          <Header />
          <Numbers />
          <Section0 />
          <Hash />
          <CoinCard />
          <Section2 />
          <Footer />
          <Footer2 />
        </div>
      </div>
    </ContextProvider>
  );
}

export default App;
