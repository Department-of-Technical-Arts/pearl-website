import "./App.css";
import NavbarMain from "./components/NavbarNew/NavbarNew";
import { Routes, Route } from "react-router-dom";
import P404page from "./components/Contest/404page";
import './fonts/tan-pearl/TAN_-_PEARL/TAN-PEARL.ttf';
import { lazy, Suspense } from "react";
const App = () => {
  const Landing = lazy(()=> import('./components/Landing/Landing'))
  const Passes = lazy(()=> import("./components/Events/Passes"))
  const Sponsors = lazy(()=>import("./components/Sponsors/Sponsors"))
  const EventPage = lazy(()=>import("./components/EventPage/EventPage"))
  const Workshops = lazy(()=>import("./components/Workshops/Workshops"))
  const ProShows = lazy(()=>import("./components/Proshows/Proshows")) 
  const Gallery = lazy(()=>import("./components/Gallery/Gallery"))
  return (
    <div>
      <div className="App">
        <NavbarMain />
        <Routes>
          <Route path="/" element={<Suspense fallback={<h1>Loading...</h1>}><Landing /></Suspense>} />
          <Route path="passes" element={<Suspense fallback={<h1>Loading...</h1>}><Passes /></Suspense>} />
          <Route path="gallery" element={<Suspense fallback={<h1>Loading...</h1>}><Gallery /></Suspense>} />
          <Route path="sponsors" element={<Suspense fallback={<h1>Loading...</h1>}><Sponsors /></Suspense>} />
          <Route path="events" element={<Suspense fallback={<h1>Loading...</h1>}><EventPage  /></Suspense>} />
          <Route path="accommodations" element={<Suspense fallback={<h1>Loading...</h1>}><Workshops /></Suspense>} />
          <Route path="proshows" element={<Suspense fallback={<h1>Loading...</h1>}><ProShows /></Suspense>} />
          <Route path="404" element={<P404page />} />
          <Route path="*" element={<P404page />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
