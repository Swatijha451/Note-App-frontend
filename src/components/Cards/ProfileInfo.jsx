import React from "react";
import { getInitials } from "../../utils/helper";

const ProfileInfo=({userInfo, onLogout})=>{
    return(
        <div className="flex items-center gap-3">
                <div className="w-12 h-12 flex items-center justify-center rounded-full text-slate-950 font-medium bg-slate-100">{getInitials(userInfo?.name)}</div> 
            <div> 
              <p className="text-sm font-medium">{userInfo?.name}</p>
              
                <button className="btn-primary text-sm border-[2px] hover:bg-blue-600" onClick={onLogout}> LogOut</button> 
              
             
            </div>
        </div>
    )
}
export default ProfileInfo;