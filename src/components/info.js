import React from "react";
import input from "../Input.PNG"
import Buttons from "../Buttons.PNG"


function Info(){
    return(<>
        <h2>How to use the app:</h2><br/>
        <h4>Currently there are 3 categories:</h4>
            <img src={Buttons}/>
            <br/><br/>
            <h4>Pick any of these to start making a list of things you need to do</h4>
            <br/><br/><br/><br/>
            <h4>Next, start typing tasks in the input field here:</h4>
            <img src={input}/>
            <h4>Then add them with the green "+" Button</h4>
            <br/><br/><br/><br/>
            <h4>The categories are completely separate from each other so they won't mix up.</h4>
            <h4>They will also be stored in your browser so they stay there untill you remove them.</h4>
        </>
    )
}

export default Info;