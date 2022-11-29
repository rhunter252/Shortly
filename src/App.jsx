import Advanced from "./components/Advanced";
import Boost from "./components/Boost";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Showcase from "./components/Showcase";
import Shortener from "./components/Shortener";

function App() {
  return (
    <div className="App">
      <Header />
      <Showcase />
      <Shortener />
      <Advanced />
      <Boost />
      <Footer />
    </div>
  );
}

export default App;
