import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import { Home, About, Contact } from "./Home.jsx";
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
import Todo from "./Todo.jsx";
import StringOperations from "./StringOperations.jsx";
import CountdownTimer from "./CountdownTimer.jsx";
import PasswordToggle from "./PasswordToggle.jsx";
import DigitalClock from "./DigitalClock.jsx";
import GuessNumber from "./GuessNumber.jsx";
import BasicCalculator from "./BasicCalculator.jsx";
import Calculator from "./Calculator.jsx";
import GSTCalculator from "./GSTCalculator.jsx";
import ThemeToggle from "./ThemeToggle.jsx";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <div className="main-content">
        <Routes>
          {/* Basic Pages */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* String Operations */}
          <Route path="/string-operations" element={<StringOperations />} />
          
          {/* React Demos */}
          <Route path="/lifecycle" element={<LifeCycle />} />
          <Route path="/state1" element={<StateDemo />} />
          <Route path="/state2" element={<StateDemo2 />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/addition" element={<Addition />} />
          <Route path="/sum" element={<SumUsingObject />} />
          <Route path="/countdown" element={<CountdownTimer />} />
          <Route path="/passwordtoggle" element={<PasswordToggle />} />
          <Route path="/digitalclock" element={<DigitalClock />} />
          <Route path="/guess-number" element={<GuessNumber />} />
           
          
          {/* Calculators */}
          <Route path="/basic-calc" element={<BasicCalculator />} />
          <Route path="/advanced-calc" element={<Calculator />} />
          <Route path="/gst-calc" element={<GSTCalculator />} />
          
          {/* Todo */}
          <Route path="/todo" element={<Todo />} />
          
          {/* Theme Toggle */}
          <Route path="/theme-toggle" element={<ThemeToggle />} />
          
          {/* User Management */}
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/editprofile" element={<EditProfile />} />
          <Route path="/changePassword" element={<ChangePassword />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
