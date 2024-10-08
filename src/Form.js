import {useState} from "react";
import {useNavigate} from "react-router-dom";

const Add = ()=>{
    const [data,setData] = useState({});
    const Nave = useNavigate();

    return(
        <>
            <div>
                <table align="center">
                    <tr align="center"><td colSpan={2}><h2>-:Student Detail Form:-</h2></td></tr>
                    <tr>
                        <td><h5>Roll No :-</h5></td>
                        <td><input type="text" onChange={(e)=>{
                            setData({...data,Rno : parseInt(e.target.value)});
                        }}/></td>
                        
                    </tr>
                    <tr>
                        <td><h5>Student Name :-</h5></td>
                        <td><input type="text" onChange={(e)=>{
                            setData({...data, StuName : e.target.value});
                        }}/></td>
                    </tr>
                    <tr align = "center">
                        <td colSpan={2}><input type="button" className="btn btn-primary" value="Submit" onClick={()=>{
                            fetch("http://localhost:8080/",
                            {method:"post",
                            body: JSON.stringify(data),
                            headers:{"Content-Type" : "application/json"}})
                            .then((res)=>res.json())
                            .then((res)=>Nave('/allStudent'));
                        }}/></td>
                    </tr>
                </table>
            </div>
        </>
    );
}

export default Add;