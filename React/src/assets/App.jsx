import { Routes, Route, Link } from "react-router-dom";
import {Home,About,Contact} from "./Home.jsx";
import LifeCycle from "./LifeCycle.jsx";
import StateDemo from "./StateDemo.jsx";
import Counter from "./Counter.jsx";
import StateDemo2 from "./StateDemo2.jsx";
import Addition from "./Addition.jsx";
import SumUsingObject from "./SumUsingObject.jsx";

function App() {
  return (
    <>
      {/* Navigation */}
      <nav>

      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/lifecycle" element={<LifeCycle />} />
        <Route path="/state1" element={<StateDemo />} />
        <Route path="/state2" element={<StateDemo2 />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/addition" element={<Addition />} />
        <Route path="/sum" element={<SumUsingObject />} />
      </Routes>
    </>
  );
}

export default App;