import Navbar from "@/components/Navbar";
import Home from "@/pages/Home";
import Projects from "@/pages/Projects";
import NotFound from "@/pages/NotFound";
import { HashRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./utils/ScrollToTop";

function App() {
  return (
    <>
      <HashRouter>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
