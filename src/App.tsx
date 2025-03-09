import { Routes, Route, useLocation } from "react-router-dom";
import "./App.scss";
import { Background } from "./components/layout";
import Menu from "./pages/Menu";
import Main from "./pages/Main";
import { AnimatePresence } from "framer-motion";
import { OptionProvider } from "./Contexts/OptionContext";

function App() {
  const location = useLocation();

  return (
    <OptionProvider>
      <Background />
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Menu />} />
          <Route path="/Main" element={<Main />} />
        </Routes>
      </AnimatePresence>
    </OptionProvider>
  );
}

export default App;