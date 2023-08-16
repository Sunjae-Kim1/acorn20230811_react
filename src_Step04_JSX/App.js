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

    // JSX 객체를 만들어서 변수에 담기
    let p1  = <p> p1 입니다. </p>;
    // 배열에 JSX 객체 넣기
    let msgs = [];
    msgs.push(<p> 안녕하세요! </p>);
    msgs.push(<p> JSX 객체 입니다. </p>);
    msgs.push(<p> 어쩌구 저쩌구 </p>);

    let animals = ["Cat" , "Dog" , "Elephant"];

    // 배열에 저장된 아이템을 이용해서 JSX 가 저장된 새로운 배열을 얻어낸다. 
    let result = animals.map((item , index) => {
      return <p key = {index}>{item}</p>
    });

    let result2 = animals.map((item , index) => <li key = {index}>{item}</li>)

    return (
      <div className = "container">
        <h1> Index 페이지입니다. </h1>
        {p1}
        {msgs}
        <h3> 동물들 </h3>
        {result}

        <h3> 동물 목록 </h3>
        {result2}
      </div>
    )
  }
}

// import 한 곳에 무엇을 리턴할지 결정
export default App;
