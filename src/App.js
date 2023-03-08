import "./App.css";
import NavbarMain from "./components/NavbarNew/NavbarNew";
import { Routes, Route } from "react-router-dom";
import P404page from "./components/Contest/404page";
import './fonts/tan-pearl/TAN_-_PEARL/TAN-PEARL.ttf';
import { lazy, Suspense, useState } from "react";
import Talks from "./components/Talks/Talks";
const App = () => {
  const Landing = lazy(()=> import('./components/Landing/Landing'))
  const Passes = lazy(()=> import("./components/Events/Passes"))
  const Sponsors = lazy(()=>import("./components/Sponsors/Sponsors"))
  const EventPage = lazy(()=>import("./components/EventPage/EventPage"))
  const Workshops = lazy(()=>import("./components/Workshops/Workshops"))
  const ProShows = lazy(()=>import("./components/Proshows/Proshows")) 
  const Gallery = lazy(()=>import("./components/Gallery/Gallery"))
  const [page, setPage] = useState(null)
  return (
    <div>
      <div className="App">
        <NavbarMain page={page} />
        <Suspense fallback={<h1>Loading...</h1>}>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="passes" element={<Passes />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="sponsors" element={<Sponsors />} />
            <Route path="events" element={<EventPage setPage={setPage}  />} />
            <Route path="accommodations" element={<Workshops />} />
            <Route path="proshows" element={<ProShows />} />
            <Route path="404" element={<P404page />} />
            <Route path="*" element={<P404page />} />
            <Route path="talks" element={<Talks/>} />
          </Routes>
        </Suspense>
      </div>
    </div>
  );
};

export default App;
