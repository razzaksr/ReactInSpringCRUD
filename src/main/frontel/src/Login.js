import { AccountCircle } from "@mui/icons-material"
import { Button, InputAdornment, TextField } from "@mui/material"
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import LockResetIcon from '@mui/icons-material/LockReset';
import { useState } from "react";
import { callLogin } from "./Contact";
import { Home } from "./Home";

export const Login=()=>{

    const[user,setUser]=useState({
        "username":"",
        "password":""
    })

    const onCollect=(eve)=>{
        const{name,value}=eve.target
        setUser((old)=>{
            return{
                ...old,
                [name]:value
            }
        })
    }

    const onLogin=async()=>{
        alert(JSON.stringify(user)+" trying to login")
        await callLogin(user)
        //alert(JSON.stringify(ter.data))
        window.location.assign("/")
    }

    const onReset=()=>{
        setUser(()=>{
            return{
                "username":"",
                "password":""
            }
        })
    }

    return(
    <>
        <div className="mt-5 container">
            <p className="display-4 text-center text-danger">Login into Television</p>
            <div className="row justify-content-center">
                <div className="col-lg-8 col-md-10 col-sm-12 shadow p-5">
                    <TextField
                        id="input-with-icon-textfield"
                        className="form-control"
                        label="username"
                        name="username"
                        onChange={onCollect}
                        value={user.username}
                        InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                            <AccountCircle />
                            </InputAdornment>
                        ),
                        }}
                        variant="outlined"
                    />
                    <TextField
                        id="outlined-password-input"
                        label="password"
                        name="password"
                        value={user.password}
                        onChange={onCollect}
                        type="password"
                        autoComplete="current-password"
                        className="mt-3 form-control"
                    />

                    <div className="mt-4 row justify-content-around">
                        <Button variant="contained" className="col-1" color="success" onClick={()=>onLogin()}>
                            <VpnKeyIcon color="inherit"/>
                        </Button>
                        <Button variant="contained" className="col-1" color="error" onClick={()=>onReset()}>
                            <LockResetIcon />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}