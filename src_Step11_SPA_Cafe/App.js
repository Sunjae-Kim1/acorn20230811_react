import './css/bootstrap.css';
import {NavLink , Routes , Route} from 'react-router-dom';
import {Home , Cafe, CafeForm, CafeDetail, CafeUpdateForm} from './pages';
// axios 사용 준비 (baseURL 설정은 한번만 하면 전역으로 적용된다)
import axios from 'axios';
import CafeDatail from './pages/CafeDetail';
axios.defaults.baseURL="http://localhost:3001";

function App() {
  return (
    <div className="container">
      <ul className='nav nav-pills'>
        <li className='nav-item'><NavLink className="nav-link" to="/">Home</NavLink></li>
        <li className='nav-item'><NavLink className="nav-link" to="/cafes">Cafes</NavLink></li>
      </ul>
      <Routes>
        <Route path='/' Component={Home}/>
        <Route path='/cafes' Component={Cafe}/>
        <Route path='/cafes/new' Component={CafeForm}/>
        {/* 
          Component 속성대신에 element 속성을 사용할수도 있다. 
          경로변수를 사용할때는  :변수명 
        */}
        <Route path='/cafes/:id' element={<CafeDatail/>}/>
        <Route path='/cafes/:id/edit' Component={CafeUpdateForm}/>
      </Routes>
    </div>
  );
}

// import 한 곳에 무엇을 리턴할지 결정
export default App;
