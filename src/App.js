import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import PostComponent from './Components/PostComponent';
import PostComponent2 from './Components/PostComponent2';

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
        <PostComponent/>
        <PostComponent2/>
      </div>
    )
  }
}

// import 한 곳에 무엇을 리턴할지 결정
export default App;
