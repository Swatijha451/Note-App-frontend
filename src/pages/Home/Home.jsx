import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import NoteCard from "../../components/Cards/NoteCard";
import { MdAdd } from "react-icons/md";
import AddEditNotes from "./AddEditNotes";
import Modal from "react-modal"
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../utils/axiosInstance";
import ToastMessage from "../../components/ToastMessage/ToastMessage";
import EmptyCard from "../../components/EmptyCard/EmptyCard";



const Home=()=>{

    const [openAddEditModal,setOpenEditModal]=useState({
        isShown:false,
        type:"add",
        data:null,
    });

    const [toastMessage,setToastMessage]=useState({
        isShown:false,
        type:"add",
        data:null,
    });

    const [userInfo, setUserInfo]=useState(null);
    const [allNotes,setAllNotes]=useState([]);
    const [isSearch,setIsSearch]=useState(false);

    const navigate= useNavigate();

    const handleEdit=(noteDetails)=>{
        setOpenEditModal({isShown:true, data:noteDetails, type:"edit"});
    };

    

    const showToastMessage= (message,type)=>{
        setToastMessage({
            isShown:true,
            message:message,
            type:type,
        })
    }

    const handleCloseToast= ()=>{
        setToastMessage({
            isShown:false,
            message:"",
        })
    }

    //get user info
    const getUserInfo= async()=>{
        try{
            const response= await axiosInstance.get("/get-user");

            if(response.data && response.data.user){
                setUserInfo(response.data.user);
            }

        }
        catch(error){
            if(error.response.status === 401){
                localStorage.clear();
                navigate("/login");
            }
        }

    };

    //get all notes
    const getAllNotes=async()=>{
        try{
            const response= await axiosInstance.get("/get-all-notes/");
        if(response.data && response.data.notes){
            setAllNotes(response.data.notes);
        }
    } catch(error){
        console.log("An unexpected error occurred. Please try again later");
    }
        }
     //Delete Note 
     const deleteNote=async(data)=>{
        const noteId=data._id;
        try{
        const response=await axiosInstance.delete("/delete-note/"+noteId);

        if(response.data && !response.data.error){
            showToastMessage("Note Deleted Successfully!",'delete');
            getAllNotes();
        }
        }
        catch(error){
            if(error.response && error.response.data && error.response.data.message){
                console.log("An unexpected erro occurred. Please try again later");
            }
        }
     } 
     
     //search notes
     const onSearchNote=async(query)=>{
        try{
            const response=await axiosInstance.get("/search-notes",{
                params:{ query },
            })

            if(response.data && response.data.notes){
                setIsSearch(true);
                setAllNotes(response.data.notes);
            }
        }
     catch(error){
        console.log(error);
     }
    }

    const handleClearSearch=()=>{
        setIsSearch(false);
        getAllNotes();
    }

    const updateIsPinned = async (noteData)=>{
        const noteId=noteData._id;

        try{
            const response=await axiosInstance.put("/is-pinned/"+noteId,
            {
                isPinned:!noteId.isPinned
            }
        );
            if(response.data && response.data.note){
                showToastMessage("Note Updated Successfully");
                getAllNotes();
            }
        }
        catch(error){
            console.log(error);
        }
    }
    

    useEffect(()=>{
        getAllNotes();
        getUserInfo();
        return ()=>{};
    },[]);


return(
    <>
        <Navbar userInfo={userInfo} onSearchNote={onSearchNote} handleClearSearch={handleClearSearch}></Navbar>

        <div className="container mx-auto">
            {allNotes.length > 0 ? <div className="grid grid-cols-3 gap-4 mt-8">
                {allNotes.map((item,index)=>(
                    <NoteCard 
                    key={item._id}
                    title={item.title}
                     date={item.createdOn}
                     content={item.content}
                      tags={item.tags}
                      isPinned={item.isPinned} 
                    onEdit={()=>handleEdit(item)}
                     onDelete={()=>deleteNote(item)}
                     onPinNote={()=>updateIsPinned(item)}
                    /> 
                ))}
        </div> : <EmptyCard message={`Start creating your first note! click the ADD button to jot down your reminders, thoughts, ideas and experiences in one place. Let's get started!`}/>}
        </div>

        <button className="w-16 h-16 flex items-center justify-center rounded-2xl  border-[5px] bg-newColor hover:bg-blue-600 absolute right-10 bottom-10 " 
        onClick={()=>{
            setOpenEditModal({isShown:true, type:"add", data:"null"});
        }}>
            <MdAdd className="text-[32px] text-white"/>
        </button>

        <Modal 
        isOpen={openAddEditModal.isShown}
        onRequestClose={()=>{}}
        style={{
            overlay:{
                backgroundColor:"rgba(0,0,0,0.2)",
            },
        }}
        contentLabel=""
        className="w-[40%] max-h-3/4 bg-white rounded-md mx-auto mt-14 p-5 overflow-scroll"

        >
            <AddEditNotes 
            type={openAddEditModal.type}
            noteData={openAddEditModal.data}
            onClose={()=>{
                setOpenEditModal({isShown:false, type:"add", data:null})
            }}
            getAllNotes={getAllNotes}
            showToastMessage={showToastMessage}
            />
        </Modal>
        <ToastMessage
        isShown={toastMessage.isShown}
        message={toastMessage.message}
        type={toastMessage.type}
        onClose={handleCloseToast}
        />

        

    </>
)
}
export default Home;