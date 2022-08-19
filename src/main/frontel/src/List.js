import { useEffect, useState } from "react";
import { DataGrid } from '@mui/x-data-grid';
import { callList } from "./Contact";

export const List=(properties)=>{

    const[records,setRecords]=useState([])

    const loading=async()=>{
        const tmp =  await callList()
        setRecords(tmp.data)
    }

    useEffect(()=>{
        loading()
    },[])

    const columns = [
        { field: 'tvId', headerName: 'Television ID', width: 200 },
        { field: 'model', headerName: 'Television Model', width: 200 },
        { field: 'brand', headerName: 'Television Brand', width: 300 },
        { field: 'cost', headerName: 'Television Price', width: 300 },
        { field: 'inches', headerName: 'Television Size in inches', width: 300 },
        { field: 'type', headerName: 'Television Type', width: 300 },
      ];

    return(
        <>
            <div className="container mt-3">
                <div className="row justify-content-center">
                    <div className="table-responsive-lg">
                        <div style={{ height: 400, width: '100%' }} className="col-lg-8 col-md-10 col-sm-12">
                            <DataGrid
                                onSelectionModelChange={(collected)=>{
                                    alert(collected)
                                    const obj=records.filter((each)=>{
                                        return each.tvId==collected
                                    })
                                    //alert(JSON.stringify(obj))
                                    properties.filling(obj[0])
                                    //window.location.assign("/")
                                }}
                                columns={columns}
                                rows={records}
                                pageSize={7}
                                getRowId={(sil)=>sil.tvId}
                                rowsPerPageOptions={[7]}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}