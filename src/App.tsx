import "./styles/App.css";

import {
  Header,
  Footer,
  Hero,
  Program,
  MentorList,
  Promo,
} from "./components";

function App() {
  return (
    <div className="w-full">
      <Header />
      <Hero />
      <Program />
      <MentorList />
      <Promo />
      <Footer />
    </div>
  );
}

export default App;
