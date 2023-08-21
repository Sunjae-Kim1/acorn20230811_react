import ChildComponent from './Components/ChildComponent.js';
import './css/Custom.css';

// 함수형  Component 에서 클래스형 Component 로 변경시키기 
function App(){
    return (
      <div className = "container">
        <h1> Index 페이지입니다. </h1>
        <div className = "box"></div>
        <p className = "bg-yellow">p 요소</p>
        
        <ChildComponent/>
      </div>
    );
  }

// import 한 곳에 무엇을 리턴할지 결정
export default App;
