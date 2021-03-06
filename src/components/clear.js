import React from "react";
import {Button} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    button: {
        margin: '20px 30px 0px 20px',
        background: 'linear-gradient(45deg, #B22222 30%, #DC143C 60%)',
    },
});

function Clear({setHomeTodos,setSchoolTodos, setShoppingTodos, kind}){
    const classes = useStyles();
    function ClearAll(){
        if(kind==="school tasks"){
            setSchoolTodos([])
        }
        else if(kind==="home tasks"){
            setHomeTodos([])
        }
        else{
            setShoppingTodos([])
        }
    }
    return(
        <Button onClick={ClearAll} className={classes.button} id="CLEAR ALL" type="submit">Delete all</Button>
    )
}

export default Clear;