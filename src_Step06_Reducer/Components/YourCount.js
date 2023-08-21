// src/Components/YourCount.js

// import React from "react"; 
import { useState } from "react";

// 함수형 Component
function YourCounter(){

    /*
        함수형 Component 에서 State 관리

        const [ 상태 값 , 상태 값을 변화시키는 함수 ] = useState( 상태의 초기 값 )
    */
    // const [count , setCount] = React.useState(0)
    const [count , setCount] = useState(0)

     return(
        <div>
            <button onClick = {() => {
                setCount(count - 1)
            }}>-</button>
            <strong>{count}</strong>
            <button onClick = {() => {
                setCount(count + 1)
            }}>+</button>
        </div>
    )
}

export default YourCounter