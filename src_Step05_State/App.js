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
  // 상태값 (State) 관리하기
  state = {
    count: 0
  };

  buttonClicked = () => {
    /*
    this.state.count++
    console.log(this.state.count);
    */

    // 상태를 변화시켜야 UI 가 Update
    /*
      부모 (React.Component) 가  가지고 있는 setState() 함수를 호출하면서
      새로운 Object 의 참조값을 전달해야 상태가 변화되었다고 간주
    */
    this.setState({
      count: this.state.count + 1
    });
  };
  // render() 메소드에서 리턴해주는 jsx 를 활용해서 화면구성이 된다.
  render(){
    return (
      <div className = "container">
        <h1> Index 페이지입니다. </h1>
         {/* 만일 모델을 적절한 방법 ( setState ) 으로 변경한다면 UI 는 자동 업데이트 */}
        <button onClick = {this.buttonClicked}>{this.state.count}</button> {/* count 라는 모델을 참조하는 방법 */}
      </div>
    )
  }
}

// import 한 곳에 무엇을 리턴할지 결정
export default App;
