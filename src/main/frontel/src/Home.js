import { Button } from "@mui/material"
import { useEffect, useState } from "react"
import { callLogout } from "./Contact"
import { List } from "./List"
import { Login } from "./Login"
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import ChromeReaderModeIcon from '@mui/icons-material/ChromeReaderMode';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import { Read } from "./Read"
import { Create } from "./Create"

export const Home=()=>{

    const[logview,setLogview]=useState(true)
    const[listview,setListview]=useState(false)
    const[readview,setReadview]=useState(false)
    const[createview,setCreateview]=useState(false)
    const[databox,setDatabox]=useState({})

    const check=()=>{
        const t= sessionStorage.getItem("valid")
        if(t){
            setLogview(false)
        }
        else{
            setLogview(true)
        }
    }

    useEffect(()=>{
        //sessionStorage.removeItem("valid")
        check()
    },[])

    return(
        <>
            {
                (logview)?<Login/>
                :
                <>
                    <div className="container-fluid">
                        <h1>Home page</h1>
                        <div className="row justify-content-around">
                            <Button className="col-1" color="error" onClick={async()=>{
                                await callLogout()
                                window.location.assign("/")
                            }}>
                                <MeetingRoomIcon/>Logout
                            </Button>
                            <Button className="col-1" color="success" onClick={()=>{
                                setCreateview(false)
                                setListview(true)
                            }}>
                                <FormatListBulletedIcon/>List
                            </Button>
                            <Button className="col-1" color="primary" onClick={()=>{
                                setListview(false)
                                //alert(JSON.stringify(databox))
                                setReadview(true)
                            }}>
                                <ChromeReaderModeIcon/>Read
                            </Button>
                            <Button className="col-1" color="warning" onClick={()=>{
                                setCreateview(true)
                            }}>
                                <NoteAddIcon/>Create
                            </Button>
                        </div>
                        {
                            (createview)?<Create/>:
                            (listview)?<List filling={setDatabox}/>:
                            (readview)?<Read obj={databox}/>:<></>
                        }
                    </div>
                </>
            }
        </>
    )
}