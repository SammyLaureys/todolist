import React from "react";
import {Button} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    button: {
        margin: '20px 30px 0px 20px',
        background: 'linear-gradient(45deg, #B22222 30%, #DC143C 60%)',
    },
});

function Clear({setTodos}){
    const classes = useStyles();
    function ClearAll(){
        setTodos([]);
    }
    return(
        <Button onClick={ClearAll} className={classes.button} type="submit">Clear</Button>
    )
}

export default Clear;