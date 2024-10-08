import {useNavigate,Outlet} from "react-router-dom";
import {useState} from "react";

const Search = ()=>{
    const [detail,setDetail] = useState({});
    const Nave = useNavigate();
    
    return(
        <>
            <div align="center">
                <table>
                <tr>
                <td><input type="text" onChange={(e)=>{
                    setDetail({...detail, Rno:parseInt(e.target.value)})
                }}/></td>

                <td><input type="button" value="Go" className="btn btn-primary" onClick={()=>{
                Nave("/Stu/"+detail.Rno);
                }}/></td>
                </tr>
                </table>
            </div>
            <Outlet/>
        </>
    );
}

export default Search;