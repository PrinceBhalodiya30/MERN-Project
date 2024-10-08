import {useState,useEffect} from "react";
import {useNavigate, useParams} from "react-router-dom";

const AllStu = ()=>{
    const [data,setData] = useState([]);
    const {id} = useParams();
    const Nave = useNavigate();

    useEffect(()=>{
        fetch('http://localhost:8080/')
        .then((res)=>res.json())
        .then((res)=>setData(res));
    },[]);

    const formatedData = data.map((stu)=>{
        return(
        <>
                <li>{stu.Rno}</li>  
            <ul>
                <li onClick={()=>{
                    Nave("/Stu/"+stu.Rno);
                }}>{stu.StuName}</li>
            </ul>
            {/* <li>{stu.Rno}</li>
            <li>{stu.StuName}</li> */}
        </>
        );
    });

    return (<>

    <ol>{formatedData}</ol></>);
}

export default AllStu;