import "./styles/App.css";

import { Header, Footer, Hero, Program, Promo } from "./components";

function App() {
  return (
    <div className="w-full">
      <Header />
      <Hero />
      <Program />
      <Promo />
      <Footer />
    </div>
  );
}

export default App;
