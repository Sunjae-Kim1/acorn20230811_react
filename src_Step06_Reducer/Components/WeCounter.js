// src/Components/WeCounter.js

import { useReducer } from "react"

// 리듀서 함수 만들기
const reducer = (count , action) => {

    let newCount;

    // 상태 값 , 액션 값이 전달
    if(action == "minus"){
        newCount = count - 1;
    }else if(action == "plus"){
        newCount = count + 1;
    }else{
        newCount = count;
    }
    // 상태 값 , 액션 값을 활용해서 새로운 상태 값을 리턴한다.
    return newCount;
}

// 함수형 Component
function WeCounter(){
    /*
        [ 상태 값 , 상태를 변경할 때 사용할 함수 ]useReducer( 리듀서 함수 , 초기 값 )
    */

    const [count , dispatch] = useReducer(reducer , 0)

     return(
        <div>
            <button onClick = {() => {
                // Count 값을 감소시켜 달라는 액션을 발생 ( 발행 ) 한다.
                dispatch("minus");
            }}>-</button>
            <strong>{count}</strong>
            <button onClick = {() => {
                dispatch("plus");
            }}>+</button>
        </div>
    )
}

export default WeCounter