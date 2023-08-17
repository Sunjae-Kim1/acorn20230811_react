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
    msg: "" ,
    msgs: [] ,
    index: 0
  };

  // input 요소에 input 이벤트가 발생 시 호출되는 함수
  onInput = () => {
    // 필드에 저장된 Input 요소의 참조값을 이용해서 문자열 읽어온 다음 State 변경하기
    this.setState({
        msg: this.inputMsg.value
    });
  }

  // 추가 버튼을 누를 시 호출되는 함수
  addClicked = () => {
    // State 에 저장된 Msg 를 이용해서 li 요소를 만들어서 Msgs 배열에 추가
    
    // 현재까지 입력한 문자열 읽기
    const msg = this.inputMsg.value;
    
    // JSX 객테를 기존에  배열에 추가해서 새로운 배열 얻어내기
    const newArray = this.state.msgs.concat(<li key = {this.state.index}>{msg}</li>);
    
    // 상태값 변경해서 UI Update 
    this.setState({
        msgs: newArray ,
        index: this.state.index + 1
    });
  }
  
  // render() 메소드에서 리턴해주는 jsx 를 활용해서 화면구성이 된다.
  render(){
    return (
      <div className = "container">
        <h1> Index 페이지입니다. </h1>
        {/* 
            UI 가 초기화 되는 시점에 Ref 속성에 전달한 함수의 매개 변수로
            해당 Ui 의 참조값이 전달
            나중에 그 참조값을 사용하렴녀 참조값을 필드에 저장해 놓고 사용
        */}
        <input type = "text" onInput = {this.onInput} ref = {(ref) => {
            // inputMsg 라는 이름의 필드를 만들어서 저장
            this.inputMsg = ref;
        }}/>
        <button onClick = {this.addClicked}>추가</button>
        <p>{this.state.msg}</p>
        <ul>
            {this.state.msgs}
        </ul>
      </div>
    )
  }
}

// import 한 곳에 무엇을 리턴할지 결정
export default App;
