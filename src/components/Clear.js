import React from "react";
import styled from "@emotion/styled";

const Styled = styled.button`
  color: white;
  background-color: gray;
  width: 10%;
  padding-top: 1%;
  padding-bottom: 1%;
`;

function Clear({setTodos}){

    function ClearAll(){
        setTodos([]);
    }
    return(
        <Styled onClick={ClearAll} type="button">Clear All</Styled>
    )
}

export default Clear;