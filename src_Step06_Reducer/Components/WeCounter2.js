// src/Components/WeCounter2.js

import { useReducer } from "react"

// 상수처럼 사용할 Object 정의하기
const ACTION = {
    MINUS: 0 ,
    PLUS: 1
};

// 리듀서 함수 만들기
const reducer = (state , action) => {

    let newState;

    // 상태 값 , 액션 값이 전달
    if(action == ACTION.MINUS){
        newState = {
            ...state ,
            count: state.count - 1
        };
    }else if(action == ACTION.PLUS){
        newState = {
            ...state ,
            count: state.count + 1
        };
    }else{
        newState = state;
    }
}

// 함수형 Component
function WeCounter2(){
    /*
        [ 상태 값 , 상태를 변경할 때 사용할 함수 ]useReducer( 리듀서 함수 , 초기 값 )
    */

    const [state , dispatch] = useReducer(reducer , {
        count: 0
    })

     return(
        <div>
            <button onClick = {() => {
                // Count 값을 감소시켜 달라는 액션을 발생 ( 발행 ) 한다.
                dispatch(ACTION.MINUS);
            }}>-</button>
            <strong>{state.count}</strong>
            <button onClick = {() => {
                dispatch(ACTION.PLUS);
            }}>+</button>
        </div>
    )
}

export default WeCounter2