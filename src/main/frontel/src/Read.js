import { Avatar, Button, Card, CardActions, CardContent, CardHeader, Collapse, IconButton, styled, Typography } from "@mui/material"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from "react";
import EditLocationAltIcon from '@mui/icons-material/EditLocationAlt';
import BackspaceIcon from '@mui/icons-material/Backspace';
import { Update } from "./Update";
import { callDelete } from "./Contact";

export const Read=(prop)=>{

    //alert(JSON.stringify(prop.obj))

    const ExpandMore = styled((props) => {
        const { expand, ...other } = props;
        return <IconButton {...other} />;
      })(({ theme, expand }) => ({
        transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
          duration: theme.transitions.duration.shortest,
        }),
      }));

    const[expanded,setExpanded]=useState(false)
    const[editview,setEditview]=useState(false)

    const handleExpandClick=()=>{
        setExpanded(!expanded)
    }

    return(
        <>
            {
                (editview)?
                <Update one={prop.obj} />
                :
                <>
                    <div className="container mt-3">
                        <div className="row justify-content-center">
                            <div className="col-lg-6 col-md-8 col-sm-12 shadow">
                                <Card style={{backgroundColor:'greenyellow'}}>
                                    <CardHeader
                                        avatar={
                                        <Avatar sx={{ bgcolor: "red" }}>
                                            R
                                        </Avatar>
                                        }
                                        title="Detailing Television"
                                        subheader="television CRUDL"
                                    />
                                    <CardContent>
                                        <Typography variant="h3" align="center">
                                            {prop.obj.model} {prop.obj.tvId}
                                        </Typography>
                                    </CardContent>
                                    <CardContent className="row justify-content-evenly">
                                        <Typography variant="h4" className="col">
                                            {prop.obj.brand}
                                        </Typography>
                                        <Typography variant="h4" className="col">
                                            {prop.obj.inches}
                                        </Typography>
                                    </CardContent>
                                    <CardContent className="row justify-content-evenly">
                                        <Typography variant="h4" className="col">
                                            {prop.obj.cost}
                                        </Typography>
                                        <Typography variant="h4" className="col">
                                            {prop.obj.type}
                                        </Typography>
                                    </CardContent>
                                    <CardActions disableSpacing>
                                        <ExpandMore
                                        expand={expanded}
                                        onClick={handleExpandClick}
                                        aria-expanded={expanded}
                                        aria-label="show more"
                                        >
                                        <ExpandMoreIcon />
                                        </ExpandMore>
                                    </CardActions>
                                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                                        <CardContent className="row justify-content-around">
                                            <Button className="col-1" color="warning" onClick={()=>{
                                                setEditview(true)
                                            }}>
                                                <EditLocationAltIcon/>Edit
                                            </Button>
                                            <Button className="col-1" color="error" onClick={async()=>{
                                                const tmp=await callDelete(prop.obj)
                                                alert(tmp.data)
                                                window.location.assign("/")
                                            }}>
                                                <BackspaceIcon/>Delete
                                            </Button>
                                        </CardContent>
                                    </Collapse>
                                    </Card>
                            </div>
                        </div>
                    </div>
                </>
            }
        </>
    )
}