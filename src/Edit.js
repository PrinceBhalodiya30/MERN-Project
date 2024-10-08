import {useParams,useNavigate} from "react-router-dom";
import {useState,useEffect} from "react";

const Edit = ()=>{
    const [d,setD] = useState({});
    const {id} = useParams();
    const Nave = useNavigate();

    useEffect(()=>{
        fetch("http://localhost:8080/Student/"+id,{method:"get"})
        .then((res)=>res.json())
        .then((res)=>setD(res));
    },[]);

    return(
        <>
            <div>
                <table align="center">
                    <tr align="center"><td colSpan={2}><h2>-:Student Detail Form:-</h2></td></tr>
                    <tr>
                        <td><h5>Roll No :-</h5></td>
                        <td><input type="text" value={d.Rno} onChange={(e)=>{
                            setD({...d,Rno : parseInt(e.target.value)});
                        }}/></td>
                        
                    </tr>
                    <tr>
                        <td><h5>Student Name :-</h5></td>
                        <td><input type="text" value={d.StuName} onChange={(e)=>{
                            setD({...d,StuName : e.target.value});
                        }}/></td>
                    </tr>

                    <tr align = "center">
                        <td colSpan={2}><input type="button" className="btn btn-primary" value="Submit" onClick={()=>{
                            fetch("http://localhost:8080/Student/"+d.Rno,
                            {method:"put",
                            body: JSON.stringify(d),
                            headers:{"Content-Type" : "application/json"}})
                            .then(Nave("/Stu/"+d.Rno));
                            console.log(d);
                        }}/></td>
                    </tr>
                </table>
            </div>
        </>
    );
}

export default Edit;