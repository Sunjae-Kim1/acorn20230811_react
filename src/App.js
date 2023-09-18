import { NavLink, Route, Routes } from "react-router-dom";
import { Home } from "./pages";

function App() {

  return (
    <div className = "container">
      <ul>
        <li>
          <NavLink to = "/">Home</NavLink>
          <NavLink to = "/member">Member</NavLink>
        </li>
      </ul>
      <Routes>
        <Route path = "/" Component = {Home}/>
      </Routes>
    </div>
  );
}

// import 한 곳에 무엇을 리턴할지 결정
export default App;
