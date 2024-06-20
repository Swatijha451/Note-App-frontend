import React, { useState } from "react";
import { useNavigate } from "react-router-dom"

import ProfileInfo from "../Cards/ProfileInfo";
import SearchBar from "../../SearchBar/SearchBar";


const Navbar=({userInfo, onSearchNote ,handleClearSearch})=>{

    const [seachQuery,setSearchQuery]=useState("");
    
    const navigate=useNavigate();

    const onLogout=()=>{
        localStorage.clear();
        navigate("/login");

    }
    const handleSearch=()=>{
        if(seachQuery){
            onSearchNote(seachQuery);
        }

    }
    const onClearSearch=()=>{
        setSearchQuery("");
        handleClearSearch();
        
    }
    return(
        <>
            <div className="bg-white flex items-center justify-between px-6 py-2 drop-shadow">
                <h2 className="text-xl font-medium text-black py-2">Notes</h2>
                <SearchBar 
                value={seachQuery}
                onChange={({target})=>{
                    setSearchQuery(target.value);
                }}
                handleSearch={handleSearch}
                onClearSearch={onClearSearch}
                />
            <ProfileInfo userInfo={userInfo} onLogout={onLogout}></ProfileInfo>
                
            </div>

        </>
    )
}
export default Navbar