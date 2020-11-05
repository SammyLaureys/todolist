import React from "react";
import {Button} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {Link} from "react-router-dom";

const useStyles = makeStyles({
    button: {
        margin: '20px 30px 0px 20px',
        background: 'linear-gradient(45deg, #33FFFF 30%, #33CEFF 80%)',
    },
});

function KindOfTask({setKind}){
    const classes = useStyles();

    function setKindSchoolTaken(){
        setKind("school tasks");
    }

    function setKindHuisTaken(){
        setKind("home tasks");
    }
    function setKindShoppingTaken(){
        setKind("shopping tasks");
    }

return(<>
        <Link to='/' style={{textDecoration: 'none'}}>
            <Button onClick={setKindSchoolTaken} id="SCHOOL TASKS" className={classes.button} type="submit">School tasks</Button>
        </Link>
        <Link to='/' style={{textDecoration: 'none'}}>
            <Button onClick={setKindHuisTaken} id="HOME TASKS" className={classes.button} type="submit">Home tasks</Button>
        </Link>
        <Link to='/' style={{textDecoration: 'none'}}>
            <Button onClick={setKindShoppingTaken} id="SHOPPING TASKS" className={classes.button} type="submit">Shopping tasks</Button>
        </Link>
    </>
)
}

export default KindOfTask;