import { Login } from "./Login";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button } from "@mui/material";
import { callSimpleReturn, passByBody, sampleCall, simpleCall } from "./Contact";
import { List } from "./List";
import { Home } from "./Home";

const App=()=>{
  return(
    <>
      <Home/>
      {/* <List/> */}
      {/* <Button variant="outlined" color="error" onClick={async()=>{
        await sampleCall()
      }}>
        Call without param and Return
      </Button><br/>
      <Button variant="outlined" color="warning" onClick={async()=>{
        await simpleCall()
      }}>
        Call with param as pathvariable and Return
      </Button><br/>
      <Button variant="outlined" color="primary" onClick={async()=>{
        await passByBody()
      }}>
        Call with param as requestbody and Return
      </Button><br/>
      <Button variant="outlined" color="primary" onClick={async()=>{
        const t = await callSimpleReturn()
        alert(t.data)
      }}>
        Call without param and but Returning
      </Button><br/> */}
    </>
  )
}

export default App;