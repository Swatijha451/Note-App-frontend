import React from 'react';
import { useNavigate } from 'react-router-dom';


const Entry=()=>{
    const navigate=useNavigate();

    const handleOnClick=()=>{
        navigate("/login");
    }
    return (
        <div className="w-10 h-10 rounded-full flex items-center justify-center absolute top-3 right-3 hover:bg-slate-500">
            <button className='btn-primary' onClick={handleOnClick}>Login</button>
        
        </div>


    )
}
export default Entry;