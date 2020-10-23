import React from "react";
import {Button} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    button: {
        margin: '20px 30px 0px 20px',
        background: 'linear-gradient(45deg, #33FFFF 30%, #33CEFF 80%)',
    },
});

function Date(){
    const classes = useStyles();
return(<>
    <Button className={classes.button} type="submit">Ma</Button>
    <Button className={classes.button} type="submit">Di</Button>
    <Button className={classes.button} type="submit">Wo</Button>
    <Button className={classes.button} type="submit">Do</Button>
    <Button className={classes.button} type="submit">Vr</Button>
    <Button className={classes.button} type="submit">Za</Button>
    <Button className={classes.button} type="submit">Zo</Button>
    </>
)
}

export default Date;