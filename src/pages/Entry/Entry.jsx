import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import { RiStickyNoteAddFill } from "react-icons/ri";



const Entry=()=>{

    
    return (
        // <div className="w-10 h-10 rounded-full flex items-center justify-center absolute top-3 right-3 hover:bg-slate-500">
        <>
            <Navbar/>
        <div className='flex flex-col items-center justify-center mt-20' >
            <RiStickyNoteAddFill className="text-[250px] text-slate-300"/>

            <p className="w-1/2 text-sm font-medium text-slate-700 text-center loading-7 mt-5" >Start creating your first note! click the LOGIN button to jot down your reminders, thoughts, ideas and experiences in one place. Let's get started!</p>
        <Link to="/login"><button className="btn-primary">Login</button></Link>   

        </div>
        </>
    
    )
}
export default Entry;