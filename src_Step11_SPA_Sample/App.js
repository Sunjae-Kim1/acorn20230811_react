import {Routes , Route , Link} from 'react-router-dom';

function App() {
  return (
    <div className = "container">
      <h1> React Router Test </h1>
      <Routes>
        <Route path = '/' Component = {Home}/>
        <Route path = "/about" Component = {About}/>
        <Route path = "/*" Component = {NotFound}/>
      </Routes>
    </div>
  );
}

function Home() {
  return (
    <div className = "container">
      <h3> Home 페이지입니다. </h3>
      <Link to = "/about">About 페이지 가기</Link>
      <br/>
      <a href = "/about">about ?</a>
    </div>
  );
}

function About() {
  return (
    <div className = "container">
      <h3> About 페이지입니다. </h3>
      <Link to = "/">Home 페이지 가기</Link>
      <br/>
      <a href = "/">Home ?</a>
    </div>
  );
}


function NotFound() {
  return (
    <div className = "container">
      <h3> NotFound 페이지입니다. </h3>
      <Link to = "/">Home 페이지 가기</Link>
      <br/>
      <a href = "/">Home ?</a>
    </div>
  );
}

// import 한 곳에 무엇을 리턴할지 결정
export default App;
