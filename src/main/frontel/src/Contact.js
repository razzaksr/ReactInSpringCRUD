import axios from "axios"

export const callDelete=async(object)=>{
    const t = await axios.delete(`/fapi/delid/${object.tvId}`,{
        headers:{
            "Authorization":`Basic ${sessionStorage.getItem('valid')}`
        }
    })
    return t
}

export const callUpdate=async(object)=>{
    const t = await axios.put(`/fapi/up`,object,{
        headers:{
            "Authorization":`Basic ${sessionStorage.getItem('valid')}`
        }
    })
    return t;
}

export const callCreate=async(object)=>{
    const t = await axios.post(`/fapi/new`,object,{
        headers:{"Authorization":`Basic ${sessionStorage.getItem('valid')}`}
    })
    return t
}

export const callList=async()=>{
    try{
        const t = await axios.get(`/fapi/`,{
            headers:{
                "Authorization":`Basic ${sessionStorage.getItem('valid')}`
            }
        })
        return t
    }
    catch(err){
        alert(err)
    }
}

export const callLogout=async()=>{
    await axios.get(`/login?logout`)
    sessionStorage.removeItem("valid")
    return;
}

export const callLogin=async(obj)=>{
    const credentials=obj.username+":"+obj.password
    const token=btoa(credentials)

    try{
        const t = await axios.get(`/fapi/`,{headers:{"Authorization":`Basic ${token}`}})
        if(t.data){
            sessionStorage.setItem("valid",token)
        }
    }
    catch(hai){
        alert(hai)
    }
}


    //await axios.get(`${url}/haithere`,{},{auth:{username:"razak",password:"mohamed"}})
    //const tok=Buffer.from(`${mine}`,"utf-8").toString('base64')
    //await axios.get(`${url}/haithere`)