import "./assets/global.css";
import Header from "./components/Header/Header";
import Home from "./Pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Leadership from "./Pages/Leadership";
import Track from "./Pages/Track";
import Events from "./Pages/Events";
import Footer from "./Pages/Footer";
function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Header />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="Leadership.jsx" element={<Leadership />} />
            <Route path="Track.jsx" element={<Track />} />
            <Route path="Events.jsx" element={<Events />} />
            <Route path="Footer.jsx" element={<Footer />} />
          </Routes>
          <Footer/>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
