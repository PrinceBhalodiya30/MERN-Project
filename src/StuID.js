import {useState,useEffect} from 'react';
import { useParams,useNavigate } from 'react-router-dom';

const StuId=()=>{
    const [detail,setDetail] = useState({});
    const {id} = useParams();
    const nave = useNavigate();

    useEffect(()=>{
        fetch("http://localhost:8080/Student/"+id)
        .then((res)=>res.json())
        .then((res)=>setDetail(res));    
    },[]);

    return(
    <>
        <p>{detail.Rno}</p>
        <p>{detail.StuName}</p>
    
    <table>
        <tr>
            <td><input type="button" className = "btn btn-warning" value="Edit" onClick={(e)=>{
                    nave("/Edit/"+id);
                    e.preventDefault();
                }}/>
            </td>
            <td>
                <input type="button" className = "btn btn-danger" value="Delete" onClick={(e)=>{
                    fetch("http://localhost:8080/Student/"+id,{method:"delete"})
                    .then(nave("/allStudent"));
                    e.preventDefault();
                }}/>
            </td>
        </tr>
    </table>
    </>
    );
}

export default StuId;