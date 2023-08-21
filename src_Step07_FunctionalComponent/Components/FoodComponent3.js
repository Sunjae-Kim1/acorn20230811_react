// src/Components/FoodComponent3.js

// useRef 함수도 추가로 import 한다.
import { useState ,useRef } from "react";

function FoodComponent3(){

    const [state , setState] = useState({
        foods: [] ,
        index: 0
    });

    // input 요소의 참조값을 저장할 지역변수 만들기
    let inputFood = useRef();

    return (
        <div>
            <h3> 좋아하는 음식 </h3>
            <input ref = {inputFood} type = "text" placeholder = "음식 입력"/>
            <button onClick = {() => {
                setState({
                    ...state ,
                    foods: [...state.foods ,<li key = {state.index}>{inputFood.current.value}</li>] ,
                    index: state.index + 1
                });
                inputFood.current.value = "";
            }}>추가</button>
            <ul>
                {state.foods}
            </ul>
        </div>
    );
}

export default <FoodComponent3/>