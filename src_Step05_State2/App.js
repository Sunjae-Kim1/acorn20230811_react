import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import FriendComponent from './Component/FriendComponent';

// 함수형  Component 에서 클래스형 Component 로 변경시키기 
class App extends Component{
  // render() 메소드에서 리턴해주는 jsx 를 활용해서 화면구성이 된다.

  state = {
    friends: ["김구라" , "해골" , "원숭이"]
  }

  render(){
    return (
      <div className = "container">
        <h1> Index 페이지입니다. </h1>
        {/* Friends 라는 Props 명으로 Array 전달하기 */}
        <FriendComponent friends = {this.state.friends}
          updateAction = {this.updateAction}
          deleteAction = {this.deleteAction}/>
          {/* updateAction 라는 Props 명으로 Function 전달하기 */}
      </div>
    )
  }

  // 자식 Component 가 특정 시점에서 호출하는 함수
  updateAction = (data) => {
    // data 는 (index: x , newNAme: x) 형식의 Object

    /*
      this.state.firends 배열에서 index에 해당하는 아이템을 newName 으로 수정된 새로운 배열
      얻어내서 state 변경하기 
    */
    const newArray = this.state.friends.map((item , index) => {
      // 만일 수정할 Index 라면
      if(index == data.index){
        // 새로운 이름을 리턴하고
        return data.newName;
      }else{ // 아니라면 원래 이름을 리턴
        return item;
      }
    });

    // 위의 동작을 간략히 하면
    const newArray2 = this.state.friends
                        .map((item , index) => index == data.index ? data.newName : item);

    this.setState({
      friends: newArray
    });
  }

  deleteAction = (idx) => {
    /*
      this.state.firends 배열에서 index에 해당하는 아이템을 삭제한 새로운 배열
      얻어내서 state 변경하기 
    */
    const newArray = this.state.friends.filter((item , index) => {
      if(index != idx){
        return true; // true 가 리턴된 item 만 남겨지고
      }else{
        return false; // false 가 리턴된 item 은 제거된 새로운 배열이 구성
      }
    });

    const newArray2 = this.state.friends.filter((item , index) => index != idx);

    this.setState({
      friends: newArray2
    })
  }

}

// import 한 곳에 무엇을 리턴할지 결정
export default App;
