import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

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
    // render 함수 안에 지역변수 선언 후 문자열 저장
    let myName = "김구라";

    // 요소에 적용할 인라인 CSS 를 Object 로 정의하고 적용 가능
    const boxStyle = {
      width: "100px" ,
      height: "100px" ,
      border: "1px solid red" ,
      backgroundColor: "yellow" // 여러 단어로 구성된 속성은 Camel Case
    }

    return (
      <div className = "container">
        {/*
          jsx 객체 안에서 작성하는 주석
          어쩌구...
          저쩌구...
        */}
        <h1> Index 페이지입니다. </h1>
        <p>내 이름은 <strong>{myName}</strong></p>
        <button onClick = {() => {
          alert("버튼을 눌렀습니다.");
        }}>누르기</button>
        <div style = {boxStyle}></div>
      </div>
    )
  }
}

// import 한 곳에 무엇을 리턴할지 결정
export default App;
