
import React from "react";
import { RiStickyNoteAddFill } from "react-icons/ri";
import { MdNearbyError } from "react-icons/md";

const EmptyCard=({ isSearch, message})=>{
    return(
        <div className="flex flex-col items-center justify-center mt-20">
        {isSearch ? <MdNearbyError className="text-[250px] text-slate-300" /> : <RiStickyNoteAddFill className="text-[250px] text-slate-300"/>}

            <p className="w-1/2 text-sm font-medium text-slate-700 text-center loading-7 mt-5" >{message}</p>
        </div>
    )
}

export default EmptyCard;