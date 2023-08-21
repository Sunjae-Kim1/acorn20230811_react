// src/Components/FoodComponent2.js

import { useState } from "react";

function FoodComponent2(){

    const [state , setState] = useState({
        foods: [] ,
        index: 0
    });

    // input 요소의 참조값을 저장할 지역변수 만들기
    let inputFood;

    return (
        <div>
            <h3> 좋아하는 음식 </h3>
            <input ref = {(ref) => {
                // 전달된 참조값을 지역변수에 저장
                inputFood = ref;
            }} type = "text" placeholder = "음식 입력"/>
            <button onClick = {() => {
                setState({
                    ...state ,
                    foods: [...state.foods ,<li key = {state.index}>{inputFood.value}</li>] ,
                    index: state.index + 1
                });
            }}>추가</button>
            <ul>
                {state.foods}
            </ul>
        </div>
    );
}

export default <FoodComponent2/>