import { Button, TextField,Typography } from "@mui/material"
import { useState } from "react"
import Inventory2Icon from '@mui/icons-material/Inventory2';
import PhonelinkEraseIcon from '@mui/icons-material/PhonelinkErase';
import { callCreate } from "./Contact";

export const Create=()=>{

    const[vision,setVision]=useState({
        "model":"",
        "brand":"",
        "cost":0,
        "inches":0.0,
        "type":""
    })

    const assemble=(pack)=>{
        const{name,value}=pack.target
        setVision((old)=>{
            return{
                ...old,
                [name]:value
            }
        })
    }

    const onAdd=async()=>{
        const tmp = await callCreate(vision)
        alert(tmp.data)
        onCancel()
    }

    const onCancel=()=>{
        setVision({
            "model":"",
            "brand":"",
            "cost":0,
            "inches":0.0,
            "type":""
        })
    }

    return(
        <>
            <div className="container mt-4">
                <h1 className="text-primary text-center">Add new television to stock</h1>
                <div className="row justify-content-center">
                    <div className="col-lg-7 col-md-10 col-sm-12 rounded-3 shadow-lg p-3">
                        <TextField 
                            id="outlined-basic"
                            name="model"
                            value={vision.model}
                            onChange={assemble}
                            className="form-control mb-2" 
                            label="Television Model" 
                            variant="outlined" 
                        />
                        <TextField 
                            id="outlined-basic"
                            name="brand"
                            value={vision.brand}
                            onChange={assemble}
                            className="form-control mb-2" 
                            label="Television Brand" 
                            variant="outlined" 
                        />
                        <TextField 
                            id="outlined-basic"
                            name="cost"
                            value={vision.cost}
                            onChange={assemble}
                            className="form-control mb-2" 
                            label="Television Cost" 
                            variant="outlined" 
                        />
                        <TextField 
                            id="outlined-basic"
                            name="type"
                            value={vision.type}
                            onChange={assemble}
                            className="form-control mb-2" 
                            label="Television Type" 
                            variant="outlined" 
                        />
                        <TextField 
                            id="outlined-basic"
                            name="inches"
                            value={vision.inches}
                            onChange={assemble}
                            className="form-control mb-2" 
                            label="Television Inches" 
                            variant="outlined" 
                        />
                        <div className="mt-3 row justify-content-around">
                            <Button variant="outlined" color="warning" className="col-1" onClick={()=>onAdd()}>
                                <Inventory2Icon/>
                            </Button>
                            <Button variant="outlined" color="error" className="col-1" onClick={()=>onCancel()}>
                                <PhonelinkEraseIcon/>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}