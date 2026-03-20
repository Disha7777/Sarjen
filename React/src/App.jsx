import { Routes, Route, Link } from "react-router-dom";
import {Home,About,Contact} from "./Home.jsx";
import LifeCycle from "./LifeCycle.jsx";
import StateDemo from "./StateDemo.jsx";
import Counter from "./Counter.jsx";
import StateDemo2 from "./StateDemo2.jsx";
import Addition from "./Addition.jsx";
import SumUsingObject from "./SumUsingObject.jsx";
import Signup from "./Signup.jsx";
import Login from "./Login.jsx";
import Dashboard from "./Dashboard.jsx";
import EditProfile from "./EditProfile.jsx";
import ChangePassword from "./ChangePassword.jsx";

function App() {
  return (
    <>
      {/* Navigation */}
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/about">About</Link> |{" "}
        <Link to="/contact">Contact</Link> | {" "}
        <Link to="/lifecycle">LifeCycle</Link> | {" "}
        <Link to="/state1">StateDemo 1</Link> | {" "}
        <Link to="/state2">StateDemo 2</Link> | {" "}
        <Link to="/counter">Counter </Link> | {" "}
        <Link to="/addition">Sum with validation </Link> | {" "}
        <Link to="/sum">Sum using Object </Link> | {" "}
        <Link to="/Signup">Signup</Link> |{" "}
        <Link to="/Login">Login</Link> |{" "}
        <Link to="/Dashboard">Dashboard</Link> |{" "}

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
         {/* NEW ROUTES */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/editprofile" element={<EditProfile />} />
        <Route path="/changePassword" element={<ChangePassword />} />

      </Routes>
    </>
  );
}

export default App;