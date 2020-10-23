import React from "react";
import {Button} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    button: {
        margin: '20px 30px 0px 20px',
        background: 'linear-gradient(45deg, #33FFFF 30%, #33CEFF 80%)',
    },
});

function Date({setKind}){
    const classes = useStyles();

    function setKindSchoolTaken(){
        setKind("schooltaken");
    }

    function setKindHuisTaken(){
        setKind("huistaken");
    }

return(<>
    <Button onClick={setKindSchoolTaken} className={classes.button} type="submit">Schooltaken</Button>
    <Button onClick={setKindHuisTaken} className={classes.button} type="submit">Huistaken</Button>
    </>
)
}

export default Date;