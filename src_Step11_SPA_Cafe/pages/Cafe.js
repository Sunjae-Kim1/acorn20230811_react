import { useEffect , useState } from "react";
import {Link} from 'react-router-dom';
import axios from 'axios';

export default function Cafe(){
    // 글 목록을 list 로 관리
    const [list , setList] = useState([]);

    useEffect(() => {
        axios.get("/cafes")
        .then(res => {
            // res.data 는 글 목록이 있는 배열 [{} , {} , {} , ...]
            setList(res.data);
        })
        .catch(error => {
            console.log(error);
        });
    } , []);

    return (
        <>
            <Link to="/cafes/new">새글작성</Link>
            <h1>글 목록 입니다.</h1>
            <table className="table table-bordered">
                <thead className="table-dark">
                    <tr>
                        <th>글번호</th>
                        <th>제목</th>
                        <th>작성자</th>
                    </tr>
                </thead>
                <tbody>
                {
                    list.map(item=>{
                        return (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>
                                    <Link to={"/cafes/"+item.id}>{item.title}</Link>
                                </td>
                                <td>{item.writer}</td>
                            </tr>
                        );
                    })
                }
                </tbody>
            </table>
        </>
    )
}