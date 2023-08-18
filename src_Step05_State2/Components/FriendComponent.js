//src/components/FriendComponent.js

import {Component} from "react";

class FriendComponent extends Component{
    render(){
        // 부모 Component 에서 전달된 Props 얻어내서 사용하기
        const friends = this.props.friends;

        // 배열에 저장된 아이템을 이용해서 <li></li> 요소가 여러 개 들어간 JSX 배열을 얻어낸다.
        const jsxList = friends.map((item , index) => {
            return (
                <li key = {index}>
                    {item}
                    <button onClick = {() => {
                        const newName = prompt(`${item} 의 새로운 이름을 입력하세요.`);
                        
                        // 부모 Component 로부터 전달받은 함수 호출되면서 Object 전달
                        this.props.updateAction({index , newName});
                    }}>수정</button>
                    <button onClick = {() => {
                        this.props.deleteAction (index);
                    }}>삭제</button>
                </li>)
        });

        // 얻어낸 JSX 배열을 ul 의 자식 요소에 추가해서 리턴
        return (
            <ul>
                {jsxList}
            </ul>
        )
    }
}

export default FriendComponent