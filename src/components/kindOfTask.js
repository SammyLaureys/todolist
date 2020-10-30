import React from "react";
import {Button} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

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

return(<>
    <Button onClick={setKindSchoolTaken} id="HOME TASKS" className={classes.button} type="submit">School tasks</Button>
    <Button onClick={setKindHuisTaken} id="SCHOOL TASKS" className={classes.button} type="submit">Home tasks</Button>
    </>
)
}

export default KindOfTask;