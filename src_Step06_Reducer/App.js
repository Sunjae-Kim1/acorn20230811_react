import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import MyCounter from './Components/MyCounter';
import YourCounter from './Components/YourCount';
import WeCounter from './Components/WeCounter';
import OurCounter from './Components/OurCounter';
import WeCounter2 from './Components/WeCounter2';

// function App() {
//   return (
//     <div className = "container">
//       <h1> 인덱스 페이지입니다. </h1>
//     </div>
//   );
// }

// 함수형  Component 에서 클래스형 Component 로 변경시키기 
class App extends Component{
  // render() 메소드에서 리턴해주는 jsx 를 활용해서 화면구성이 된다.
  render(){
    return (
      <div className = "container">
        <h1> Index 페이지입니다. </h1>
        <h3> MyCounter </h3>
        <MyCounter/>
        <h3> YourCounter </h3>
        <YourCounter/>
        <h3> OurCounter </h3>
        <OurCounter/>
        <h3> WeCounter </h3>
        <WeCounter/>
        <h3> WeCounter2 </h3>
        <WeCounter2/>
      </div>
    )
  }
}

// import 한 곳에 무엇을 리턴할지 결정
export default App;
