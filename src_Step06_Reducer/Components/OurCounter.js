// src/Components/OurCounter.js

import { useState } from "react";

// 함수형 Component
function OurCounter(){

    /*
        함수형 Component 에서 State 관리

        const [ 상태 값 , 상태 값을 변화시키는 함수 ] = useState( 상태의 초기 값 )
    */
    const [state , setState] = useState({count: 0})

     return(
        <div>
            <button onClick = {() => {
                setState({
                    count: state.count - 1
                });
            }}>-</button>
            <strong>{state.count}</strong>
            <button onClick = {() => {
                setState({
                    count: state.count + 1
                });
            }}>+</button>
        </div>
    )
}

export default OurCounter