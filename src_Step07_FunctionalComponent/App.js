import './App.css';
import { useState } from 'react';
import FoodComponent from './Components/FoodComponent2';
import FoodComponent2 from './Components/FoodComponent2';
import FoodComponent3 from './Components/FoodComponent3';

function App(){

  // Object 를 이용해서 상태관리 하기
  const[state , setState] = useState({
    name: "김구라" ,
    age: 20
  });

    return (
      <div className = "container">
        <h1> Index 페이지입니다. </h1>
        <input type = "text" value = {state.name} onChange = {(e) => {
          setState({
            ...state ,
            name: e.target.value // 입력한 이름
          });
        }}/>
        <input type = "text" value = {state.age} onChange = {(e) => {
          setState({
            ...state ,
            age: e.target.value // 입력한 나이
          });
        }}/>
        <p>{`이름은 ${state.name}`}</p>
        <p>{`나이는 ${state.age}`}</p>

        <FoodComponent/>
        <FoodComponent2/>
        <FoodComponent3/>
      </div>
    );
}

// import 한 곳에 무엇을 리턴할지 결정
export default App;
